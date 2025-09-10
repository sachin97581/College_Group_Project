import React, { useState } from "react";
import axios from "axios";
import "../style/ConnectWithPhNum.css";

const SendSMS = () => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendSMS = async () => {
    try {
      const response = await axios.post("http://localhost:3000/patients/sms", {
        phone,
        message,
      });
      alert("Message sent successfully!");
    } catch (error) {
      alert("Failed to send SMS");
    }
  };

  return (
    <div className="send-sms-container">
      <h2>Send SMS</h2>
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <textarea
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendSMS}>Send SMS</button>
    </div>
  );
};

export default SendSMS;
