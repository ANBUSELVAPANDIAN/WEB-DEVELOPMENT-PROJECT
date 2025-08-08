import React, { useState } from "react";

// Function to speak text
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation or API integration here
    console.log("Signup submitted:", formData);
    speak("You have successfully submitted the signup form. Please check your details.");
  };

  return (
    <div className="form-container">
      <h2>Create Your MEDICO PLUS + Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>

      {/* Speak Instructions Button */}
      <button
        onClick={() =>
          speak(
            "Please enter your full name, email address, create a password, and confirm the password to sign up."
          )
        }
        style={{
          backgroundColor: "#ffeb3b",
          color: "#2575fc",
          padding: "8px 16px",
          borderRadius: "25px",
          fontWeight: "500",
          transition: "all 0.3s ease",
          border: "none",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Speak Form Instructions
      </button>

      {/* Speak Form Data Button */}
      <button
        onClick={() =>
          speak(
            `Name: ${formData.name}, Email: ${formData.email}, Password: ${formData.password}, Confirm Password: ${formData.confirmPassword}`
          )
        }
        style={{
          backgroundColor: "#ffeb3b",
          color: "#2575fc",
          padding: "8px 16px",
          borderRadius: "25px",
          fontWeight: "500",
          transition: "all 0.3s ease",
          border: "none",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Speak Form Data
      </button>

      <p style={{ marginTop: "10px", fontSize: "0.9rem" }}>
        Already have an account? <a href="/login">Log in here</a>
      </p>
    </div>
  );
}

export default Signup;
