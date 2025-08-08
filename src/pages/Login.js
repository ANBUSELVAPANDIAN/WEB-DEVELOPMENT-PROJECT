import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Form.css"; // Make sure to style the form uniformly if you have a shared stylesheet

// Function to speak text
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with", { email, password });
    // Add real authentication logic here
  };

  const handleSpeakLoginForm = () => {
    const formInstructions = "Login to MEDICO PLUS. Please enter your email and password, then click the login button.";
    const footerInstructions = "Forgot your password? Click the link to reset it. Don't have an account? Click the link to create one.";

    // Speak out the form content
    speak(formInstructions + " " + footerInstructions);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login to MEDICO PLUS +</h2>

      {/* Speak Login Form Button */}
      <button
        onClick={handleSpeakLoginForm}
        className="speak-login-btn"
      >
        Speak Login Form
      </button>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>

      <div className="form-footer">
        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
        <p>
          Don’t have an account?{" "}
          <Link to="/signup" className="signup-link">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
