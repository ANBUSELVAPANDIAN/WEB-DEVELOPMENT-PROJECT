import React from 'react';
import { useNavigate } from 'react-router-dom';

// Function to speak text
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

function DoctorConsult() {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate('/book-appointment');
  };

  return (
    <div className="page-container">
      <h2>Doctor Consultation</h2>
      <p>Connect with experienced doctors online for fast and reliable consultations.</p>

      <button
        onClick={handleBookClick}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Book a Slot
      </button>

      {/* Speak Button for Doctor Consultation */}
      <button
        onClick={() => speak('Doctor Consultation, Connect with experienced doctors for fast and reliable consultations. Book a slot now.')}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#FFEB3B',
          color: '#10847E',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Speak Doctor Consultation Info
      </button>
    </div>
  );
}

export default DoctorConsult;
