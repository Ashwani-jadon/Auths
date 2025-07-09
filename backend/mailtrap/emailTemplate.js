export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Email Verification</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 0; margin: 0;">
  <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); overflow: hidden;">
    <div style="background: linear-gradient(to right, #2f855a, #38a169); padding: 24px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Verify Your Email Address</h1>
    </div>
    <div style="padding: 24px;">
      <p style="font-size: 16px;">Hello,</p>
      <p style="font-size: 16px;">
        Thank you for creating an account with us. Please use the verification code below to verify your email address:
      </p>
      <div style="text-align: center; margin: 30px 0;">
        <span style="display: inline-block; background-color: #edfdf2; color: #2f855a; padding: 16px 32px; font-size: 28px; font-weight: bold; border-radius: 8px; letter-spacing: 4px;">
          {verificationCode}
        </span>
      </div>
      <p style="font-size: 15px;">This code will expire in <strong>15 minutes</strong> for security reasons.</p>
      <p style="font-size: 15px;">If you did not create an account, please disregard this message.</p>
      <p style="font-size: 15px;">Warm regards,<br/><strong>Your App Team</strong></p>
    </div>
    <div style="background-color: #f7f7f7; text-align: center; padding: 16px; font-size: 12px; color: #777;">
      This is an automated message. Please do not reply to this email.
    </div>
  </div>
</body>
</html>
`;
export const WELCOME_EMAIL_TEMPLATE = (userName) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome Email</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f2f4f8; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);">
    
    <!-- Banner Image -->
    <img src="https://images.unsplash.com/photo-1494173853739-c21f58b16055?fit=crop&w=1200&q=80" 
         alt="Welcome Banner" style="width: 100%; height: auto; display: block;"/>

    <!-- Header -->
    <div style="padding: 24px; text-align: center; background: linear-gradient(to right, #667eea, #764ba2); color: #ffffff;">
      <h1 style="margin: 0; font-size: 26px;">Welcome to Our Platform, ${userName}!</h1>
    </div>

    <!-- Body -->
    <div style="padding: 24px;">
      <p style="font-size: 16px; color: #333;">Hi ${userName},</p>
      <p style="font-size: 16px; color: #555;">
        We're thrilled to have you on board! Get ready to explore amazing features, connect with awesome people, and make the most of your experience with us.
      </p>
      <p style="font-size: 16px; color: #555;">
        To get started, click the button below and dive in!
      </p>

      <!-- CTA Button -->
      <div style="text-align: center; margin: 32px 0;">
        <a href="https://yourapp.com/dashboard" style="background-color: #667eea; color: white; text-decoration: none; padding: 14px 28px; font-size: 16px; border-radius: 6px; display: inline-block;">
          Explore Now
        </a>
      </div>

      <p style="font-size: 14px; color: #888;">
        If you have any questions or need help, feel free to contact our support team anytime.
      </p>
      <p style="font-size: 15px; color: #555;">Cheers,<br/><strong>Your App Team</strong></p>
    </div>

    <!-- Footer -->
    <div style="background-color: #f7f7f7; text-align: center; padding: 16px; font-size: 12px; color: #777;">
      You are receiving this email because you signed up for Our App.<br/>
      <a href="https://yourapp.com/unsubscribe" style="color: #667eea; text-decoration: none;">Unsubscribe</a> if you no longer wish to receive emails.
    </div>
  </div>
</body>
</html>
`;


export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 0; margin: 0;">
  <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); overflow: hidden;">
    <div style="background: linear-gradient(to right, #2f855a, #38a169); padding: 24px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0;">Password Reset Successful</h1>
    </div>
    <div style="padding: 24px;">
      <p style="font-size: 16px;">Hello,</p>
      <p style="font-size: 16px;">We’re confirming that your password has been successfully updated.</p>
      <div style="text-align: center; margin: 30px 0;">
        <div style="background-color: #2f855a; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 28px;">
          ✓
        </div>
      </div>
      <p style="font-size: 15px;">If you did not make this change, please contact our support team immediately.</p>
      <p style="font-size: 15px;">For better security, we recommend:</p>
      <ul style="font-size: 15px; padding-left: 20px;">
        <li>Using a strong, unique password</li>
        <li>Enabling two-factor authentication</li>
        <li>Avoiding reuse of passwords across platforms</li>
      </ul>
      <p style="font-size: 15px;">Thank you for keeping your account secure.</p>
      <p style="font-size: 15px;">Best regards,<br/><strong>Your App Team</strong></p>
    </div>
    <div style="background-color: #f7f7f7; text-align: center; padding: 16px; font-size: 12px; color: #777;">
      This is an automated message. Please do not reply to this email.
    </div>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 0; margin: 0;">
  <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); overflow: hidden;">
    <div style="background: linear-gradient(to right, #2f855a, #38a169); padding: 24px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0;">Password Reset Request</h1>
    </div>
    <div style="padding: 24px;">
      <p style="font-size: 16px;">Hello,</p>
      <p style="font-size: 16px;">We received a request to reset the password associated with your account.</p>
      <p style="font-size: 15px;">Click the button below to proceed:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="{resetURL}" style="background-color: #2f855a; color: white; padding: 14px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px;">
          Reset Password
        </a>
      </div>
      <p style="font-size: 15px;">This link will expire in <strong>1 hour</strong> for your security.</p>
      <p style="font-size: 15px;">If you didn’t make this request, you can safely ignore this message.</p>
      <p style="font-size: 15px;">Best regards,<br/><strong>Your App Team</strong></p>
    </div>
    <div style="background-color: #f7f7f7; text-align: center; padding: 16px; font-size: 12px; color: #777;">
      This is an automated message. Please do not reply to this email.
    </div>
  </div>
</body>
</html>
`;

