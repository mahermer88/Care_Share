import User from "../models/User.js";
import { hash } from "bcrypt";

const signup = async (req, res) => {
  const { email, username, password } = req.body;
  if (!email && !username && !password)
    return res.status(400).json({ err: "Invalid inputs, please check...!" });

  try {
    const hashedPassword = await hash(password, 10);
    const newUser = new User({
      email: email,
      username: username,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ err: "Something went wrong" });
  }
};

export default signup;
