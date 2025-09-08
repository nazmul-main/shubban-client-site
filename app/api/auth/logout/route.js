import { NextResponse } from 'next/server';

const SERVER_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-production-domain.com' 
  : 'http://localhost:5000';

export async function POST(request) {
  try {
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({
        success: false,
        message: 'Authorization required'
      }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];

    const response = await fetch(`${SERVER_URL}/api/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({
        success: true,
        message: data.message
      });
    } else {
      return NextResponse.json({
        success: false,
        message: data.message
      }, { status: response.status });
    }
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json({
      success: false,
      message: 'Server error. Please try again.'
    }, { status: 500 });
  }
}
