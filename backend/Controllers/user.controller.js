import { User } from "../Models/user.model.js";
import bcrypt from "bcryptjs";
import {
  generateTokenAndSetCookies,
  verificationToken,
  verificationTokenExpiresAt,
} from "../utils/util.js";

import { sendVerificationEmail,sendWelcomeEmail } from "../mailtrap/email.js"; 


export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // ✅ Input validation
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // ✅ Check if user already exists
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Generate verification token
    const token = verificationToken();
    const expiresAt = verificationTokenExpiresAt();

    // ✅ Create and save user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      verificationToken: token,
      verificationTokenExpiresAt: expiresAt,
    });

    // ✅ Set JWT cookie
    generateTokenAndSetCookies(res, user._id);  //samajh nhi aaye ye function

    await sendVerificationEmail(user.email, token);   //samajh nhi aaye ye function

    res.status(201).json({
      success: true,
      message: "Signup completed successfully",
      user,
    });
  } catch (error) {
    console.error(error);
  }
};

export const verifyEmail = async (req, res) => {
  const { code } = req.body;

  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() }
    });

    // If user not found or token expired
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid or expired verification code"
      });
    }

    // Token is valid, update user
    user.isValid = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;

    await user.save();

    // Send welcome email
    await sendWelcomeEmail(user.email, user.name);

    // Send success response
    return res.status(200).json({
      success: true,
      message: "Email verified successfully",
      user,
    });

  } catch (error) {
    console.error("Error verifying email:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while verifying email",
    });
  }
};


export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Find the user
    const user = await User.findOne({ email });

    // 2. Check if user exists
    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
        success: false
      });
    }

    // 3. Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid credentials",
        success: false
      });
    }

    // 4. Update last login
    user.lastLogin = new Date();
    await user.save();

    // 5. Generate token and set cookies
    generateTokenAndSetCookies(res, user._id);

    // 6. Send response
    return res.status(200).json({
      message: "Login successfully",
      success: true,
      user
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error during login"
    });
  }
};


export const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    success:true,
    message:"loged out sucessfully",
  })
  try {
  } catch (error) {
    console.log(error);
  }
};
