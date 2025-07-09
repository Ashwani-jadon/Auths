import jwt from "jsonwebtoken";
// Generate 6-digit token
export const verificationToken = () =>Math.floor(100000 + Math.random() * 900000).toString();

// Set expiry for OTP or similar (15 mins ahead)
export const verificationTokenExpiresAt = () =>  new Date(Date.now() + 15 * 60 * 1000);

// ✅ Generate JWT and set it as cookie
export const generateTokenAndSetCookies = (res, userId) => {
  // Create token payload
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });

  // Set token in cookie
  res.cookie("token", token, {
    httpOnly: true,        // prevents JS access
    secure: process.env.NODE_ENV === "production", // only HTTPS in production
    sameSite: "strict",    // CSRF protection
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  return token; // optional, if you want to use it on frontend
};
