import { genAccessToken, genRefreshToken } from "../../middlewares/auth.js";
import { User } from "../../models/user.model.js";
import { compareHash } from "../../utils/hasher.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    const isValid = await compareHash(password, user.password);
    if (!isValid) {
      return res.status(400).json({ error: "Invalid password" });
    }
    user.reftoken = genRefreshToken(user);
    await user.save();

    res.cookie("reftoken", user.reftoken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    const accessToken = genAccessToken(user);

    return res
      .status(200)
      .json({ message: "Logged In Successfully", accessToken });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
