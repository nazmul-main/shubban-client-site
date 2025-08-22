import { NextResponse } from 'next/server';

const SERVER_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-production-domain.com' 
  : 'http://localhost:5000';

export async function POST(request) {
  try {
    const body = await request.json();
    
    const headers = {
      'Content-Type': 'application/json',
    };
    
    const response = await fetch(`${SERVER_URL}/api/users`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Server response error:', data);
      return NextResponse.json(
        { 
          success: false, 
          message: data.message || 'Failed to create user',
          status: response.status 
        },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in users API route:', error);
    
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

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const queryString = searchParams.toString();
    
    // Get authorization header from the request
    const authHeader = request.headers.get('authorization');
    
    const headers = {
      'Content-Type': 'application/json',
    };

    // Forward the authorization header if it exists
    if (authHeader) {
      headers['Authorization'] = authHeader;
    }
    
    const response = await fetch(`${SERVER_URL}/api/users${queryString ? `?${queryString}` : ''}`, {
      method: 'GET',
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Server response error:', data);
      return NextResponse.json(
        { 
          success: false, 
          message: data.message || 'Failed to fetch users',
          status: response.status 
        },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in users API route:', error);
    
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
