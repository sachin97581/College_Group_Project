import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/Ai_Chat.css";

function Ai_Chat() {
  const [messages, setMessages] = useState([]); // stores chat history
  const [input, setInput] = useState("");

  // Fetch welcome AI response when new user lands here
  useEffect(() => {
    const welcomeMessage = async () => {
      try {
        const response = await axios.post("http://localhost:3000/patients/chat", {
          message: "Hello, I am a new user"
        });
        setMessages([
          { sender: "ai", text: response.data.reply }
        ]);
      } catch (error) {
        console.error("Error fetching welcome message:", error);
      }
    };

    welcomeMessage();
  }, []);

  // Send user message to backend
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message locally
    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);

    try {
      const response = await axios.post("http://localhost:3000/patients/chat", {
        message: input
      });

      // Add AI reply
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: response.data.reply }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠️ Error: AI could not respond." }
      ]);
    }

    setInput(""); // clear input field
  };

  return (
    <div className="chat-container">
      <h2 className="chat-title">AI Health Assistant 🤖</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.sender === "user" ? "user" : "ai"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <form className="chat-input" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Ai_Chat;
