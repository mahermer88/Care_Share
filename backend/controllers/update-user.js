import User from "../models/User.js";

const updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    const upDateUser = await User.findByIdAndUpdate(id, {
      $set: req.body,
    });
    res.status(200).send(upDateUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

export default updateUser;
