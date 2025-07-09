import express from "express";
import { login, logout, signup, verifyEmail, } from  "../Controllers/user.controller.js";

const router=express.Router();
router.route("/signup").post(signup);
router.route("/verify-email").post(verifyEmail);
router.route("/login").post(login); 
router.route("/logout").post(logout);

export default router;

