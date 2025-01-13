const Product = require("../models/shopModel");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products: ", error.message);
    res.status(500).json({ message: "An error occurred while fetching products." });
  }
};

module.exports = { getProducts };
