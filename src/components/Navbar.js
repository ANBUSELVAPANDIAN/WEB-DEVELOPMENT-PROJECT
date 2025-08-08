import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

// Function to speak text
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="PharmaStore" />
        <span>MEDICO PLUS + PHARMACY</span>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-conditions">Terms</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup" className="nav-signup-btn">Signup</Link>
      </div>

      {/* Speak Navbar Button */}
      <button
        className="navbar-speak-btn"
        onClick={() =>
          speak(
            "Medico Plus Pharmacy, Home, About, FAQ, Privacy Policy, Terms, Login, Sign Up"
          )
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M10 2a8 8 0 108 8 8 8 0 00-8-8zm0 14a6 6 0 110-12 6 6 0 010 12z"
          />
        </svg>
        Speak Navbar
      </button>
    </nav>
  );
}
