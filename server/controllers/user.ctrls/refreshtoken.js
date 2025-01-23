import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { genAccessToken } from "../../middlewares/auth.js";
dotenv.config();

export const refresh = async (req, res) => {
  const token = req.cookies.reftoken;
  if (!token) {
    return res.status(401).json({ message: "Token Absent" });
  }
  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, async (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    const accessToken = genAccessToken(user);
    res.json({ accessToken });
  });
};
