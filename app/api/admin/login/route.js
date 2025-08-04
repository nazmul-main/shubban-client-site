import { NextResponse } from 'next/server';

// Simple admin credentials (in production, use environment variables and proper authentication)
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
};

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // Validate credentials
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      // In a real application, you would generate a JWT token here
      const token = 'admin-token-' + Date.now();
      
      return NextResponse.json({
        success: true,
        token: token,
        message: 'Login successful'
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
} 