import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Mock categories (in production, this would come from your database)
    const categories = ['Events', 'Projects', 'Health', 'Education', 'Sports', 'Culture'];
    
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
} 