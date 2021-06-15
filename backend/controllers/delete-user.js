import User from "../models/User.js";

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json("Account has been deleted");
  } catch (err) {
    res.status(500).json({ err: "Account can not be deleted" });
  }
};

export default deleteUser;
