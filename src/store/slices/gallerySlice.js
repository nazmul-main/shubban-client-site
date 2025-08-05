import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Async thunks
export const fetchGallery = createAsyncThunk(
  'gallery/fetchGallery',
  async (params = {}, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/gallery`, { params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch gallery');
    }
  }
);

export const fetchGalleryById = createAsyncThunk(
  'gallery/fetchGalleryById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/gallery/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch image');
    }
  }
);

export const uploadImage = createAsyncThunk(
  'gallery/uploadImage',
  async (imageData, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      const formData = new FormData();
      
      // Append image file
      formData.append('image', imageData.file);
      
      // Append other data
      Object.keys(imageData).forEach(key => {
        if (key !== 'file') {
          formData.append(key, imageData[key]);
        }
      });
      
      const response = await axios.post(`${API_URL}/gallery/upload`, formData, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to upload image');
    }
  }
);

export const updateGalleryItem = createAsyncThunk(
  'gallery/updateGalleryItem',
  async ({ id, updateData }, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      const response = await axios.put(`${API_URL}/gallery/${id}`, updateData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update image');
    }
  }
);

export const deleteGalleryItem = createAsyncThunk(
  'gallery/deleteGalleryItem',
  async (id, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      await axios.delete(`${API_URL}/gallery/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete image');
    }
  }
);

const initialState = {
  images: [],
  currentImage: null,
  loading: false,
  error: null,
  totalPages: 0,
  currentPage: 1,
  categories: ['ইসলামিক শিক্ষা', 'সমাজ উন্নয়ন', 'দাওয়াত', 'সামাজিক সেবা', 'ইভেন্ট', 'সাধারণ'],
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearCurrentImage: (state) => {
      state.currentImage = null;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch gallery
      .addCase(fetchGallery.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGallery.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload.images || action.payload;
        state.totalPages = action.payload.totalPages || 0;
        state.error = null;
      })
      .addCase(fetchGallery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch image by ID
      .addCase(fetchGalleryById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGalleryById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentImage = action.payload;
        state.error = null;
      })
      .addCase(fetchGalleryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Upload image
      .addCase(uploadImage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.loading = false;
        state.images.unshift(action.payload);
        state.error = null;
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update image
      .addCase(updateGalleryItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateGalleryItem.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.images.findIndex(image => image._id === action.payload._id);
        if (index !== -1) {
          state.images[index] = action.payload;
        }
        if (state.currentImage && state.currentImage._id === action.payload._id) {
          state.currentImage = action.payload;
        }
        state.error = null;
      })
      .addCase(updateGalleryItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete image
      .addCase(deleteGalleryItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteGalleryItem.fulfilled, (state, action) => {
        state.loading = false;
        state.images = state.images.filter(image => image._id !== action.payload);
        if (state.currentImage && state.currentImage._id === action.payload) {
          state.currentImage = null;
        }
        state.error = null;
      })
      .addCase(deleteGalleryItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearCurrentImage, setCurrentPage } = gallerySlice.actions;
export default gallerySlice.reducer; 