const express = require("express");
const { getProducts } = require("../controllers/shopController");

const router = express.Router();

// Define route for fetching products
router.get("/shop", getProducts);

module.exports = router;
