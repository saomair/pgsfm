import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, topic, message, timestamp, source } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the form submission (you can replace this with your preferred method)
    console.log('📧 New Quote Request Received:', {
      name,
      email,
      phone,
      topic,
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
        message: 'Quote request submitted successfully',
        id: `quote_${Date.now()}` 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
