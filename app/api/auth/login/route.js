import { NextResponse } from 'next/server';

const SERVER_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-production-domain.com' 
  : 'http://localhost:5000';

export async function POST(request) {
  try {
    const body = await request.json();
    
    const response = await fetch(`${SERVER_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Auth server response error:', data);
      return NextResponse.json(
        { 
          success: false, 
          message: data.message || 'Login failed',
          status: response.status 
        },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in auth API route:', error);
    
    // Check if it's a connection error
    if (error.code === 'ECONNREFUSED') {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Cannot connect to server. Please ensure the server is running on port 5000.' 
        },
        { status: 503 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
