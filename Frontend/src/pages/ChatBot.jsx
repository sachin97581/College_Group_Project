import React from "react";
import "../style/chatbot.css";

const ChatBot = () => {
  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h1>💬 Your ❤️🚀ChatBot</h1>
        <p>Ask your questions and get instant answers!</p>
      </div>
      <div className="chatbot-frame">
        <iframe
          id="JotFormIFrame-0198d7e144d377db8bc17357e305004cce99"
          title="Hi_Bot: Client Service Advisor"
          allow="geolocation; microphone; camera; fullscreen"
          src="https://agent.jotform.com/0198d7e144d377db8bc17357e305004cce99?embedMode=iframe&background=0&shadow=0"
          frameBorder="0"
          style={{
            maxWidth: "100%",
            width: "100%",
            height: "688px",
            border: "none",
          }}
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default ChatBot;
