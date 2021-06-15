import { compare } from "bcrypt";
import User from "../models/User.js";

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password)
    return res.status(400).json("Invalid inputs, please check...!");

  try {
    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(404)
        .json({ err: "No account associated with this email!" });

    const validPassword = await compare(password, user.password);
    if (!validPassword)
      return res.status(400).json({ err: "Invalid password!" });

    res.status(200).send(user);
  } catch (err) {
    res.status(404).json({ err: "Something went wrong" });
  }
};

export default login;
