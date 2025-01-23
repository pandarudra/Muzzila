import express from "express";
import { login } from "../controllers/user.ctrls/login.js";
import { signup } from "../controllers/user.ctrls/signup.js";
import { verifyToken } from "../middlewares/auth.js";
import { logout } from "../controllers/user.ctrls/logout.js";
import { refresh } from "../controllers/user.ctrls/refreshtoken.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", verifyToken, logout);
router.post("/refresh_token", refresh);

export default router;
