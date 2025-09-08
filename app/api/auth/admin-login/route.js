import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json({
        success: false,
        message: 'ইমেইল এবং পাসওয়ার্ড প্রয়োজন'
      }, { status: 400 });
    }

    // Make request to backend server
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/auth/admin-login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({
        success: true,
        message: data.message,
        user: data.data.user,
        token: data.data.token
      });
    } else {
      return NextResponse.json({
        success: false,
        message: data.message
      }, { status: response.status });
    }
  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json({
      success: false,
      message: 'সার্ভার ত্রুটি। আবার চেষ্টা করুন।'
    }, { status: 500 });
  }
}
