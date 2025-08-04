import { NextResponse } from 'next/server';

// Mock data for blogs (in production, this would come from your MongoDB database)
let blogs = [
  {
    _id: '1',
    title: 'Welcome to Subban',
    content: 'This is our first blog post about the Subban organization.',
    excerpt: 'Introduction to Subban and our mission.',
    author: 'Admin',
    category: 'General',
    tags: ['welcome', 'introduction'],
    status: 'published',
    slug: 'welcome-to-subban',
    createdAt: new Date('2024-01-15').toISOString(),
    updatedAt: new Date('2024-01-15').toISOString()
  },
  {
    _id: '2',
    title: 'Our Community Projects',
    content: 'Learn about the various community projects we are working on.',
    excerpt: 'Overview of our community development initiatives.',
    author: 'Admin',
    category: 'Projects',
    tags: ['community', 'projects'],
    status: 'published',
    slug: 'our-community-projects',
    createdAt: new Date('2024-01-20').toISOString(),
    updatedAt: new Date('2024-01-20').toISOString()
  }
];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit')) || 10;
    const status = searchParams.get('status') || 'published';

    let filteredBlogs = blogs;
    
    if (status !== 'all') {
      filteredBlogs = blogs.filter(blog => blog.status === status);
    }

    // Apply limit
    const limitedBlogs = filteredBlogs.slice(0, limit);

    return NextResponse.json(limitedBlogs);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    const newBlog = {
      _id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    blogs.push(newBlog);

    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    );
  }
} 