const express = require("express");
const { chatbotController } = require("../controllers/chatbotController");

const router = express.Router();

//Route
router.post("/chatbot", chatbotController);

module.exports = router;
