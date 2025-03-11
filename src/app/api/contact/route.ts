import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Ensure environment variables are correctly set
if (
  !process.env.AWS_REGION ||
  !process.env.AWS_ACCESS_KEY_ID ||
  !process.env.AWS_SECRET_ACCESS_KEY ||
  !process.env.AWS_SES_FROM_EMAIL
) {
  throw new Error("Missing required AWS environment variables.");
}

// Initialize AWS SES Client
const ses = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Function to generate a branded HTML email template
const generateEmailTemplate = (subject: string, message: string) => `
<!DOCTYPE html>
<html>

<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f1f1f1;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .header {
           
            color: #031602;
            padding: 15px;
            text-align: center;
            border-radius: 8px 8px 0 0;
            font-size: 20px;
            font-weight: bold;
        }

        .content {
            padding: 20px;
            font-size: 16px;
            color: #313131;
            line-height: 1.6;
        }

        .message {
            background: #f1f1f1;
            padding: 15px;
            border-radius: 6px;
            color: #031602;
            font-size: 15px;
        }

        .footer {
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #616161;
            border-top: 1px solid #A4A5A7;
            margin-top: 20px;
        }

        .button {
            background: #194D1F;
            color: white;
            padding: 12px 20px;
            text-decoration: none;
            border-radius: 5px;
            display: inline-block;
            margin-top: 15px;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">${subject}</div>
        <div class="content">
            <p>Hello,</p>
            <p class="message">${message}</p>
            <a href="https://yourwebsite.com" class="button">Visit Website</a>
        </div>
        <div class="footer">© 2025 HiAcuity. All rights reserved.</div>
    </div>
</body>

</html>
`;

export async function POST(req: Request) {
  try {
    // Parse request body
    const { subject, message } = await req.json();

    // Validate required fields
    if (!subject || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields: to, subject, or message",
        },
        { status: 400 }
      );
    }

    // Generate the email HTML template
    const htmlContent = generateEmailTemplate(subject, message);

    // SES email parameters
    const params = {
      Source: process.env.AWS_SES_FROM_EMAIL,
      Destination: { ToAddresses: ["michael.cooray@hiacuity.com"] },
      Message: {
        Subject: { Data: subject },
        Body: {
          Text: { Data: message }, // Plain text fallback
          Html: { Data: htmlContent }, // Branded HTML email
        },
      },
    };

    // Send email via AWS SES
    await ses.send(new SendEmailCommand(params));

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("SES Error:", error);
      return NextResponse.json(
        { success: false, error: error.message || "Failed to send email" },
        { status: 500 }
      );
    } else {
      console.error("Unknown error:", error);
      return NextResponse.json(
        { success: false, error: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
