import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, timestamp, source } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the demo request (you can replace this with your preferred method)
    console.log('🎯 New Demo Request Received:', {
      name,
      email,
      phone,
      message,
      timestamp,
      source,
      submittedAt: new Date().toISOString()
    });

    // Here you can integrate with your preferred service:
    // - SendGrid, Mailgun, or AWS SES for emails
    // - Airtable, Google Sheets, or your CRM for data storage
    // - Slack/Discord webhook for notifications
    
    // For now, we'll simulate successful processing
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Demo request submitted successfully',
        id: `demo_${Date.now()}` 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Demo form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
