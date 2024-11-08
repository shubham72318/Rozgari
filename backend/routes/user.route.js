
import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

// Registration route without file upload
router.route("/register").post(register);

// Login route
router.route("/login").post(login);

// Logout route
router.route("/logout").get(logout);

// Profile update route (without file upload)
router.route("/profile/update").post(isAuthenticated, updateProfile);

export default router;
