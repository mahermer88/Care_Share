import Product from "../models/Product.js";

const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    const { product } = savedProduct;
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

export default createProduct;
