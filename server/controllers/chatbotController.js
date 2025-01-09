// Query Function
const query = async (data) => {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/bigscience/bloom",
    {
      headers: {
        Authorization: `Bearer ${process.env.HF_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    },
  );
  return response.json();
};

// Chatbot Controller
exports.chatbotController = async (req, res) => {
  try {
    const { text } = req.body;

    // Validate input
    if (!text || text.trim() === "") {
      return res.status(400).json({ message: "Text input is required" });
    }

    // Prepare query
    const userInput = `User: ${text.trim()}\nThenku:`;
    const data = await query({
      inputs: `You are Thenku, a helpful assistant for a marketplace. Respond concisely and directly to user queries.\n${userInput}`,
    });

    // Process response
    const output = data[0]?.generated_text || "";
    const thenkuResponse = output.split("Thenku:")[1]?.split("\n")[0]?.trim();

    if (thenkuResponse) {
      return res.status(200).json({ message: thenkuResponse });
    }

    return res.status(400).json({ message: "No valid response generated" });
  } catch (err) {
    console.error("Error in chatbotController:", err);
    return res.status(500).json({
      message: "An error occurred while processing your request",
      error: err.message,
    });
  }
};
