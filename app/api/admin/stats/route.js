import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // In a real application, you would fetch these stats from your database
    // For now, we'll return mock data
    const stats = {
      users: 25,
      blogs: 12,
      gallery: 48,
      totalViews: 1250
    };

    return NextResponse.json(stats);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
} 