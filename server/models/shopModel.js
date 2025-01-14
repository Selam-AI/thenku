const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, default: "No description provided." },
});

const Product = mongoose.model("Product", productSchema); // Correct name

module.exports = Product; // Consistent export
