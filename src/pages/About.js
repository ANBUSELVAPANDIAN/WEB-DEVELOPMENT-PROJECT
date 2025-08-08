import React from "react";
import "../styles/About.css";

// Function to speak text
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <p className="about-description">
        We are a trusted pharmacy that provides high-quality medications,
        healthcare products, and reliable services to ensure your well-being.
      </p>

      <div className="about-section">
        <h3>What We Do</h3>
        <ul>
          <li>Online medication ordering</li>
          <li>Book health tests</li>
          <li>Consult with experienced doctors</li>
        </ul>
      </div>

      <div className="about-mission">
        <h3>Our Mission</h3>
        <p>We aim to provide affordable and accessible healthcare for everyone.</p>
      </div>

      <div className="about-contact">
        <h3>Contact Us</h3>
        <p>Email: support@medicoplus.com</p>
        <p>Phone: +123456789</p>
      </div>

      <div className="about-socials">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </div>

      {/* Speak About Page Button */}
      <button
        className="speak-about-btn"
        onClick={() =>
          speak(
            "About Us, We are a trusted pharmacy, Online medication ordering, Book health tests, Consult with experienced doctors, Our Mission, Affordable healthcare for everyone, Contact Us, Email: support@medicoplus.com, Phone: +123456789"
          )
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M10 2a8 8 0 108 8 8 8 0 00-8-8zm0 14a6 6 0 110-12 6 6 0 010 12z"
          />
        </svg>
        Speak About Page
      </button>
    </div>
  );
}
