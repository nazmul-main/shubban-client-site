import { NextResponse } from 'next/server';

// Mock data for gallery items (in production, this would come from your MongoDB database)
let galleryItems = [
  {
    _id: '1',
    title: 'Community Event 2024',
    description: 'Photos from our annual community gathering',
    category: 'Events',
    tags: ['community', 'event', 'gathering'],
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
    isPublic: true,
    featured: true,
    uploader: 'Admin',
    createdAt: new Date('2024-01-10').toISOString(),
    updatedAt: new Date('2024-01-10').toISOString()
  },
  {
    _id: '2',
    title: 'School Building Project',
    description: 'Construction progress of our new school building',
    category: 'Projects',
    tags: ['construction', 'school', 'building'],
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop',
    isPublic: true,
    featured: false,
    uploader: 'Admin',
    createdAt: new Date('2024-01-15').toISOString(),
    updatedAt: new Date('2024-01-15').toISOString()
  },
  {
    _id: '3',
    title: 'Medical Camp',
    description: 'Free medical checkup camp for the community',
    category: 'Health',
    tags: ['medical', 'health', 'camp'],
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    isPublic: true,
    featured: true,
    uploader: 'Admin',
    createdAt: new Date('2024-01-20').toISOString(),
    updatedAt: new Date('2024-01-20').toISOString()
  }
];

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const item = galleryItems.find(item => item._id === id);

    if (!item) {
      return NextResponse.json(
        { error: 'Gallery item not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(item);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch gallery item' },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    
    const itemIndex = galleryItems.findIndex(item => item._id === id);
    
    if (itemIndex === -1) {
      return NextResponse.json(
        { error: 'Gallery item not found' },
        { status: 404 }
      );
    }

    galleryItems[itemIndex] = {
      ...galleryItems[itemIndex],
      ...body,
      updatedAt: new Date().toISOString()
    };

    return NextResponse.json(galleryItems[itemIndex]);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update gallery item' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const itemIndex = galleryItems.findIndex(item => item._id === id);
    
    if (itemIndex === -1) {
      return NextResponse.json(
        { error: 'Gallery item not found' },
        { status: 404 }
      );
    }

    galleryItems.splice(itemIndex, 1);

    return NextResponse.json({ message: 'Gallery item deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete gallery item' },
      { status: 500 }
    );
  }
} 