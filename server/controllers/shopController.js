const Product = require("../models/shopModel");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Correct variable usage here
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res
      .status(500)
      .json({ message: "Failed to fetch products. Please try again later." });
  }
};

module.exports = { getProducts };
