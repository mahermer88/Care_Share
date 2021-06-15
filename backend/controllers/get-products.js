import User from "../models/User.js";
import Product from "../models/Product.js";

const getProducts = async (req, res) => {
  try {
    const data = await Product.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

export default getProducts;
