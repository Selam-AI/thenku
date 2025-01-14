import React, { useState } from "react";
import { Navigate } from "react-router-dom";

// Query function to interact with Hugging Face API
const queryAPI = async (data) => {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/bigscience/bloom",
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_HF_ACCESS_TOKEN}`, // Ensure it's securely loaded from env
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    },
  );
  return response.json();
};

const Hbody = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    setLoading(true);
    setMessages([...messages, { text: input, sender: "user" }]);

    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/huggingface/chatbot",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: input }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [...prev, { text: data.message, sender: "bot" }]);
      } else {
        console.error("Error:", data.message);
        setMessages((prev) => [
          ...prev,
          { text: "Error: " + data.message, sender: "bot" },
        ]);
      }
    } catch (error) {
      console.error("Error querying chatbot:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Error contacting the server", sender: "bot" },
      ]);
    } finally {
      setInput("");
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="mt-16 flex flex-col items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md overflow-hidden my-6">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Problem?</h2>
        </div>
        <div className="flex flex-col p-4 space-y-4 h-96 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-2 rounded-lg ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="p-2 rounded-lg bg-gray-200 text-gray-800">
                Let me tell you...
              </div>
            </div>
          )}
        </div>
        <div className="p-4 border-t flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bg-base-200"
            placeholder="Tell me here..."
            disabled={loading}
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
            disabled={loading}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hbody;
