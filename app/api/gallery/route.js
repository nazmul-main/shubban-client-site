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
    uploader: 'System',
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
    uploader: 'System',
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
    uploader: 'System',
    createdAt: new Date('2024-01-20').toISOString(),
    updatedAt: new Date('2024-01-20').toISOString()
  }
];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit')) || 20;
    const category = searchParams.get('category');
    const isPublic = searchParams.get('isPublic') !== 'false';

    let filteredItems = galleryItems;
    
    if (category && category !== 'all') {
      filteredItems = filteredItems.filter(item => item.category === category);
    }

    if (isPublic) {
      filteredItems = filteredItems.filter(item => item.isPublic);
    }

    // Apply limit
    const limitedItems = filteredItems.slice(0, limit);

    return NextResponse.json(limitedItems);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch gallery items' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    const newItem = {
      _id: Date.now().toString(),
      ...body,
      uploader: 'System',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    galleryItems.push(newItem);

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create gallery item' },
      { status: 500 }
    );
  }
} 