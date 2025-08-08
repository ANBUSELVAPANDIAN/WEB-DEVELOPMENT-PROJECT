import React, { useState } from "react";

// Function to speak text
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sending a reset email (you can replace with real API logic)
    if (email.trim()) {
      setMessage("If this email is registered, a reset link has been sent.");
      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  const handleSpeakMessage = () => {
    // Speak the form instructions and the current message
    const instructions = "Enter your email and we’ll send you a reset link.";
    speak(instructions);
    if (message) {
      speak(message); // Speak the current message if it exists
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Reset Your Password</h2>
      <p className="form-subtitle">Enter your email and we’ll send you a reset link.</p>
      
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>

      {message && <p className="form-message">{message}</p>}

      {/* Speak Forgot Password Button */}
      <button
        onClick={handleSpeakMessage}
        className="speak-form-btn"
      >
        Speak Forgot Password Instructions
      </button>
    </div>
  );
}

export default ForgotPassword;
