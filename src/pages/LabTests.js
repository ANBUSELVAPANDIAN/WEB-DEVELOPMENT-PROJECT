import React, { useState } from 'react';
import bgImage from '../assets/bg.jpg';
import './LabTests.css';

const labTests = [
  { id: 1, name: 'Complete Blood Count (CBC)', price: '₹350' },
  { id: 2, name: 'Lipid Profile', price: '₹699' },
  { id: 3, name: 'Blood Sugar Test', price: '₹150' },
  { id: 4, name: 'Liver Function Test (LFT)', price: '₹499' },
  { id: 5, name: 'Vitamin D Test', price: '₹799' },
];

// Function to speak text
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

function LabTests() {
  const [selectedTest, setSelectedTest] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
  });

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${formData.name} on ${formData.date} for ${selectedTest}`);
    setFormData({ name: '', phone: '', date: '' });
    setSelectedTest('');
  };

  const handleSpeakLabInfo = () => {
    const testDescriptions = labTests.map(
      (test) => `Test: ${test.name}, Price: ${test.price}.`
    ).join(' ');
    
    const formInstructions = "To book a test, enter your name, phone number, and preferred date, then click the book button.";

    // Combine lab test descriptions and form instructions and speak them
    speak(testDescriptions + ' ' + formInstructions);
  };

  return (
    <div
      className="page-container lab-page"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '40px 20px',
      }}
    >
      <h2 className="lab-heading">Book a Lab Test</h2>
      <p className="lab-subtext">Trusted labs. Accurate reports. At your convenience.</p>

      {/* Speak Lab Test Info Button */}
      <button
        onClick={handleSpeakLabInfo}
        className="speak-lab-info-btn"
      >
        Speak Lab Test Info
      </button>

      <div className="lab-test-list">
        {labTests.map(test => (
          <div
            key={test.id}
            className={`lab-test-item ${selectedTest === test.name ? 'selected' : ''}`}
            onClick={() => setSelectedTest(test.name)}
          >
            <h4>{test.name}</h4>
            <p>{test.price}</p>
          </div>
        ))}
      </div>

      <form className="lab-form" onSubmit={handleSubmit}>
        <h3>Book Appointment</h3>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          value={formData.phone}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="date"
          required
          value={formData.date}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={!selectedTest}>
          Book for {selectedTest || 'Select a Test'}
        </button>
      </form>
    </div>
  );
}

export default LabTests;
