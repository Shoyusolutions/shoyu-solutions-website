// app/api/contact/route.ts

import { NextResponse } from 'next/server';
import {
  SESClient,
  SendEmailCommand,
  SendEmailCommandInput
} from '@aws-sdk/client-ses';
import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';

// Type definitions
interface ContactFormData {
  name: string;
  email: string;
  business: string;
  phone?: string;
  message: string;
  subject: string;
}

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore: RateLimitStore = {};

// Environment validation
const ENV = {
  AWS_REGION: process.env.AWS_REGION || 'us-east-1',
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  SES_FROM_EMAIL: process.env.SES_FROM_EMAIL,
  CONTACT_EMAIL: process.env.CONTACT_EMAIL || 'info@shoyusolutions.com',
  RATE_LIMIT_MAX: parseInt(process.env.RATE_LIMIT_MAX || '5'),
  RATE_LIMIT_WINDOW: parseInt(process.env.RATE_LIMIT_WINDOW || '3600000'), // 1 hour in ms
};

// Validate required environment variables
if (!ENV.AWS_ACCESS_KEY_ID || !ENV.AWS_SECRET_ACCESS_KEY || !ENV.SES_FROM_EMAIL) {
  console.error('Missing required AWS environment variables');
}

// Configure the AWS SES client with better error handling
const sesClient = new SESClient({
  region: ENV.AWS_REGION,
  credentials: {
    accessKeyId: ENV.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: ENV.AWS_SECRET_ACCESS_KEY || '',
  },
  maxAttempts: 3,
  retryMode: 'adaptive',
});

// Validation schema matching frontend validation
const contactSchema = z.object({
  name: z.string()
    .min(1, 'Name is required')
    .max(100, 'Name is too long')
    .trim(),
  email: z.string()
    .email('Invalid email address')
    .max(255, 'Email is too long')
    .refine(email => !email.includes('+'), 'Email addresses with "+" are not accepted')
    .transform(email => email.toLowerCase().trim()),
  business: z.string()
    .min(1, 'Business name is required')
    .max(100, 'Business name is too long')
    .trim(),
  phone: z.string()
    .optional()
    .transform(val => val?.trim()),
  message: z.string()
    .min(1, 'Message is required')
    .max(1000, 'Message is too long')
    .trim(),
  subject: z.string()
    .max(100, 'Subject is too long')
    .default('POS System Inquiry'),
});

// Rate limiting function
function checkRateLimit(identifier: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const userLimit = rateLimitStore[identifier];

  // Clean up old entries
  Object.keys(rateLimitStore).forEach(key => {
    if (rateLimitStore[key].resetTime < now) {
      delete rateLimitStore[key];
    }
  });

  if (!userLimit || userLimit.resetTime < now) {
    rateLimitStore[identifier] = {
      count: 1,
      resetTime: now + ENV.RATE_LIMIT_WINDOW,
    };
    return { allowed: true };
  }

  if (userLimit.count >= ENV.RATE_LIMIT_MAX) {
    return {
      allowed: false,
      retryAfter: Math.ceil((userLimit.resetTime - now) / 1000)
    };
  }

  userLimit.count++;
  return { allowed: true };
}

// Sanitize HTML content
function sanitizeHtml(input: string): string {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: []
  });
}

// Format email HTML template
function formatEmailHtml(data: ContactFormData): string {
  const sanitizedMessage = sanitizeHtml(data.message).replace(/\n/g, '<br>');

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #111827;">
        <div style="padding: 20px; max-width: 600px;">
          <p style="font-size: 16px; margin-bottom: 20px;"><strong>New inquiry from ${sanitizeHtml(data.name)} at ${sanitizeHtml(data.business)}</strong></p>

          <p style="font-size: 14px; color: #6b7280; margin-bottom: 10px;">
            <strong>Contact:</strong> ${data.email}${data.phone ? ` | ${sanitizeHtml(data.phone)}` : ''}
          </p>

          <p style="font-size: 14px; color: #6b7280; margin-bottom: 20px;">
            <strong>Subject:</strong> ${sanitizeHtml(data.subject)}
          </p>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 20px;">
            <p style="font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${sanitizedMessage}</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Send auto-reply to sender
async function sendAutoReply(data: ContactFormData): Promise<void> {
  const autoReplyParams: SendEmailCommandInput = {
    Source: `"Hello From Franklin" <${ENV.SES_FROM_EMAIL}>`,
    Destination: {
      ToAddresses: [data.email],
    },
    Message: {
      Subject: {
        Data: 'Thank you for your interest in Shoyu Solutions!',
        Charset: 'UTF-8',
      },
      Body: {
        Html: {
          Data: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
              </head>
              <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                  <div style="background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Contacting Shoyu Solutions!</h1>
                  </div>

                  <div style="background: white; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
                    <p style="font-size: 16px; color: #111827; line-height: 1.6; margin-bottom: 20px;">
                      Hi ${sanitizeHtml(data.name)},
                    </p>

                    <p style="font-size: 16px; color: #111827; line-height: 1.6; margin-bottom: 20px;">
                      Thank you for your interest in Shoyu Solutions! We've received your inquiry and one of our POS specialists will contact you within 24 hours to discuss how we can build the perfect solution for ${sanitizeHtml(data.business)}.
                    </p>

                    <p style="font-size: 16px; color: #111827; line-height: 1.6; margin-bottom: 20px;">
                      In the meantime, here's what you can expect:
                    </p>

                    <ul style="font-size: 16px; color: #111827; line-height: 1.8; margin-bottom: 20px;">
                      <li>A personalized consultation to understand your specific needs</li>
                      <li>A custom quote with transparent pricing</li>
                      <li>A demo of how your custom POS will work</li>
                      <li>0% credit card processing fees</li>
                    </ul>

                    <p style="font-size: 16px; color: #111827; line-height: 1.6;">
                      Best regards,<br>
                      The Shoyu Solutions Team
                    </p>

                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                      <p style="font-size: 12px; color: #6b7280; margin: 0; text-align: center;">
                        This is an automated response to confirm receipt of your inquiry.
                      </p>
                    </div>
                  </div>
                </div>
              </body>
            </html>
          `,
          Charset: 'UTF-8',
        },
      },
    },
  };

  try {
    const command = new SendEmailCommand(autoReplyParams);
    await sesClient.send(command);
  } catch (error) {
    // Log error but don't fail the main request
    console.error('Failed to send auto-reply:', error);
  }
}

// Main POST handler
export async function POST(request: Request) {
  // Get client IP for rate limiting
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : 'unknown';

  try {
    // Check rate limit
    const rateLimitResult = checkRateLimit(ip);
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          retryAfter: rateLimitResult.retryAfter
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateLimitResult.retryAfter || 3600),
          },
        }
      );
    }

    // Parse and validate request body
    const body = await request.json();

    // Validate with schema
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message,
      }));

      return NextResponse.json(
        { error: 'Validation failed', errors },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Check environment variables
    if (!ENV.SES_FROM_EMAIL || !ENV.AWS_ACCESS_KEY_ID || !ENV.AWS_SECRET_ACCESS_KEY) {
      console.error('Missing AWS configuration');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 503 }
      );
    }

    // Create the email parameters
    const emailParams: SendEmailCommandInput = {
      Source: `"Hello From Franklin" <${ENV.SES_FROM_EMAIL}>`,
      Destination: {
        ToAddresses: [ENV.CONTACT_EMAIL],
      },
      ReplyToAddresses: [data.email],
      Message: {
        Subject: {
          Data: `${data.name} from ${data.business} - ${data.subject}`,
          Charset: 'UTF-8',
        },
        Body: {
          Text: {
            Data: `New inquiry from ${data.name} at ${data.business}

Contact: ${data.email}${data.phone ? ` | ${data.phone}` : ''}
Subject: ${data.subject}

${data.message}
            `,
            Charset: 'UTF-8',
          },
          Html: {
            Data: formatEmailHtml(data),
            Charset: 'UTF-8',
          },
        },
      },
    };

    // Send the main email
    const command = new SendEmailCommand(emailParams);
    const response = await sesClient.send(command);

    console.log('Email sent successfully:', {
      messageId: response.MessageId,
      subject: data.subject,
      from: data.email,
      business: data.business,
      ip,
    });

    // Send auto-reply asynchronously
    sendAutoReply(data).catch(console.error);

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully',
    });

  } catch (error) {
    // Log detailed error for debugging
    console.error('Contact form error:', {
      error,
      ip,
      timestamp: new Date().toISOString(),
    });

    // Handle specific AWS SES errors
    if (error instanceof Error) {
      if (error.name === 'MessageRejected') {
        return NextResponse.json(
          { error: 'Invalid email address provided' },
          { status: 400 }
        );
      }

      if (error.name === 'ConfigurationSetDoesNotExist' || error.name === 'InvalidParameterValue') {
        return NextResponse.json(
          { error: 'Email service configuration error' },
          { status: 503 }
        );
      }
    }

    // Generic error response
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'contact-form',
    timestamp: new Date().toISOString(),
  });
}