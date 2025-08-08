import React from 'react';

// Function to speak text
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

function Plus() {
  const handleGetPremium = () => {
    alert('🎉 You’ve unlocked MEDICO PLUS+ Premium! Welcome to elite care.');
  };

  const benefits = [
    '🩺 Unlimited Free Doctor Consultations',
    '🔬 20% OFF on All Lab Tests',
    '💊 Flat 15% OFF on Medicines',
    '🚚 Priority Home Delivery',
    '🎁 Access to Member-Only Offers',
    '📞 24/7 Personal Health Assistant'
  ];

  const premiumDetails = "Unlock all benefits for just ₹499/year. This includes unlimited doctor consultations, discounts on medicines and lab tests, priority delivery, and more.";

  return (
    <div className="page-container" style={{ padding: '30px' }}>
      <h2 style={{ color: '#3f51b5', fontSize: '2rem' }}>✨ MEDICO PLUS+ Premium Membership</h2>
      <p style={{ fontSize: '1.1rem', color: '#555', maxWidth: '700px' }}>
        Elevate your health journey with our premium subscription. Get early access, priority service, and unbeatable discounts designed for your well-being.
      </p>

      {/* Benefits Section */}
      <div style={{ marginTop: '30px' }}>
        <h3 style={{ color: '#2e7d32' }}>🌟 Premium Benefits</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem', color: '#444' }}>
          {benefits.map((benefit, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>{benefit}</li>
          ))}
        </ul>
        {/* Speak Benefits Button */}
        <button 
          className="speak-btn"
          onClick={() => speak(`Premium Benefits: ${benefits.join(', ')}`)}
          style={{
            backgroundColor: '#ffeb3b',
            color: '#2575fc',
            padding: '8px 16px',
            borderRadius: '25px',
            fontWeight: '500',
            transition: 'all 0.3s ease',
            border: 'none',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Speak Benefits
        </button>
      </div>

      {/* Premium Card */}
      <div
        style={{
          marginTop: '40px',
          padding: '25px',
          background: 'linear-gradient(to right, #6a11cb, #2575fc)',
          borderRadius: '15px',
          color: '#fff',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          maxWidth: '400px'
        }}
      >
        <h2 style={{ marginBottom: '10px' }}>💳 Premium Card</h2>
        <p style={{ marginBottom: '20px' }}>
          Unlock all benefits for just <strong>₹499/year</strong>.
        </p>
        {/* Speak Premium Details Button */}
        <button 
          className="speak-btn"
          onClick={() => speak(premiumDetails)}
          style={{
            backgroundColor: '#ffeb3b',
            color: '#2575fc',
            padding: '8px 16px',
            borderRadius: '25px',
            fontWeight: '500',
            transition: 'all 0.3s ease',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Speak Premium Details
        </button>

        <button
          onClick={handleGetPremium}
          style={{
            backgroundColor: '#ffffff',
            color: '#2575fc',
            padding: '10px 20px',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: '20px',
          }}
        >
          Get Premium
        </button>
      </div>
    </div>
  );
}

export default Plus;
