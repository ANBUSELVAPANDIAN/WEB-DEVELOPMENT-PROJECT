import React from 'react';

// Function to speak text
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

function BookAppointment() {
  const handleBooking = () => {
    alert('Slot booked successfully!');
  };

  return (
    <div className="page-container">
      <h2>Book an Appointment</h2>
      <p>Click the below button to book an appointment.</p>

      <button
        onClick={handleBooking}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Book Appointment
      </button>

      {/* Speak Appointment Button */}
      <button
        onClick={() => speak('Click the button to book your appointment.')}
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
        Speak Appointment Info
      </button>
    </div>
  );
}

export default BookAppointment;
