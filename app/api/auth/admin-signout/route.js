import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { deviceId } = await request.json();
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({
        success: false,
        message: 'অনুমোদন প্রয়োজন'
      }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];

    // Make request to backend server
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/auth/admin-signout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ deviceId }),
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
    console.error('Admin signout error:', error);
    return NextResponse.json({
      success: false,
      message: 'সার্ভার ত্রুটি। আবার চেষ্টা করুন।'
    }, { status: 500 });
  }
}
