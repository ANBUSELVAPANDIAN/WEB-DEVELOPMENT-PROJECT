import React, { useState } from 'react';
import './FAQ.css'; // Make sure this file exists

const faqData = [
  {
    question: 'How do I order medicines?',
    answer:
      'You can order medicines by signing up and browsing our store. Add products to your cart and proceed to checkout. It’s simple and quick!',
  },
  {
    question: 'Is delivery free?',
    answer: 'Yes, we offer free delivery on all orders above ₹500.',
  },
  {
    question: 'Can I cancel an order?',
    answer:
      'Yes, orders can be cancelled before dispatch. Visit your orders section to manage active orders.',
  },
  {
    question: 'Do you offer lab tests?',
    answer:
      'Yes! You can book lab tests through our “Lab Tests” section and get results directly in your profile.',
  },
];

// Function to speak text
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleSpeakFAQ = () => {
    const faqText = faqData.map(
      (item) => `${item.question} ${item.answer}`
    ).join(' '); // Concatenate all questions and answers
    speak(faqText); // Speak the entire FAQ text
  };

  return (
    <div className="page-container faq-page">
      <h2 className="page-title">Frequently Asked Questions</h2>
      
      {/* Speak FAQ Button */}
      <button
        onClick={handleSpeakFAQ}
        className="speak-faq-btn"
      >
        Speak FAQ Content
      </button>

      {faqData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <button
            className={`accordion-question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            {item.question}
            <span>{activeIndex === index ? '-' : '+'}</span>
          </button>
          {activeIndex === index && (
            <div className="accordion-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
