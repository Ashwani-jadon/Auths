import express from "express";
import { checkAuth, forgotPassword, login, logout, resetPassword, signup, verifyEmail, } from  "../Controllers/user.controller.js";
import { isAuthenticated } from "../Middlewares/isAuthenticated.js";

const router=express.Router();

router.route("/check-auth").get(isAuthenticated,checkAuth);
router.route("/signup").post(signup);
router.route("/verify-email").post(verifyEmail);
router.route("/login").post(login); 
router.route("/logout").post(logout);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password/:token").post(resetPassword);

export default router;
