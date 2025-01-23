import Joi from "joi";
import emailValidator from "email-validator";
import emailExistence from "email-existence";
import { genAccessToken, genRefreshToken } from "../../middlewares/auth.js";
import { User } from "../../models/user.model.js";
import { genHash } from "../../utils/hasher.js";

const schema = Joi.object({
  email: Joi.string().email().required(),
  number: Joi.number().required(),
  password: Joi.string()
    .min(8)
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})"
      )
    )
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain at least one lowercase letter, one uppercase letter, one number and one special character",
      "string.min": "Password must be at least 8 characters long",
      "any.required": "Password is required",
    }),
});

export const signup = async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { email, number, password } = req.body;

  if (!emailValidator.validate(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  emailExistence.check(email, async (err, exists) => {
    if (err || !exists) {
      return res.status(400).json({ error: "Email does not exist" });
    }

    try {
      const user = await User.findOne({ email: email });
      if (user) {
        return res.status(400).json({ error: "Email already exists" });
      }
      const hashedPassword = await genHash(password);
      const newUser = new User({ email, number, password: hashedPassword });
      newUser.reftoken = genRefreshToken(newUser);

      res.cookie("reftoken", newUser.reftoken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      });

      await newUser.save();

      const accessToken = genAccessToken(newUser);

      return res
        .status(201)
        .json({ message: "Signed Up Successfully", accessToken });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  });
};
