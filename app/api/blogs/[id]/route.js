import { NextResponse } from 'next/server';

// Mock data for blogs (in production, this would come from your MongoDB database)
let blogs = [
  {
    _id: '1',
    title: 'Welcome to Subban',
    content: 'This is our first blog post about the Subban organization.',
    excerpt: 'Introduction to Subban and our mission.',
    author: 'System',
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
    author: 'System',
    category: 'Projects',
    tags: ['community', 'projects'],
    status: 'published',
    slug: 'our-community-projects',
    createdAt: new Date('2024-01-20').toISOString(),
    updatedAt: new Date('2024-01-20').toISOString()
  }
];

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const blog = blogs.find(blog => blog._id === id);

    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch blog' },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    
    const blogIndex = blogs.findIndex(blog => blog._id === id);
    
    if (blogIndex === -1) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }

    blogs[blogIndex] = {
      ...blogs[blogIndex],
      ...body,
      updatedAt: new Date().toISOString()
    };

    return NextResponse.json(blogs[blogIndex]);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update blog' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const blogIndex = blogs.findIndex(blog => blog._id === id);
    
    if (blogIndex === -1) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }

    blogs.splice(blogIndex, 1);

    return NextResponse.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete blog' },
      { status: 500 }
    );
  }
} 