import React from 'react';

// Function to speak text
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

function Offers() {
  const todaysDeals = [
    { name: 'Paracetamol 500mg (10 tablets)', price: '₹25', offer: 'Buy 1 Get 1 Free' },
    { name: 'Vitamin C Immunity Booster (60 tablets)', price: '₹299', offer: '20% OFF Today Only' },
    { name: 'Blood Sugar Test Kit', price: '₹599', offer: 'Flat ₹100 OFF' },
  ];

  const comboOffers = [
    { combo: 'Diabetes Care Combo', includes: 'Glucometer + 50 Strips + Free Diet Chart', price: '₹1399', deal: 'Save ₹400' },
    { combo: 'Cold & Flu Relief Pack', includes: 'Cough Syrup + Paracetamol + Vitamin C', price: '₹349', deal: 'Combo Deal - 15% OFF' },
    { combo: 'Immunity Booster Pack', includes: 'Multivitamin + Zinc + Ayurveda Tonic', price: '₹599', deal: 'Worth ₹799' },
  ];

  return (
    <div className="page-container" style={{ padding: '30px' }}>
      <h2 style={{ color: '#d32f2f' }}>🔥 Today’s Hot Deals</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        {todaysDeals.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff3e0',
              border: '1px solid #ffb74d',
              borderRadius: '12px',
              padding: '15px',
              width: '250px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            }}
          >
            <h4 style={{ marginBottom: '5px', color: '#e65100' }}>{item.name}</h4>
            <p><strong>Price:</strong> {item.price}</p>
            <p style={{ color: '#d84315' }}><strong>{item.offer}</strong></p>
            <button 
              className="speak-btn"
              onClick={() => speak(`Today's deal: ${item.name}. Price: ${item.price}. Offer: ${item.offer}.`)}
            >
              Speak Details
            </button>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: '40px', color: '#388e3c' }}>🎁 Combo Offers</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        {comboOffers.map((combo, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#e8f5e9',
              border: '1px solid #81c784',
              borderRadius: '12px',
              padding: '15px',
              width: '280px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            }}
          >
            <h4 style={{ marginBottom: '5px', color: '#2e7d32' }}>{combo.combo}</h4>
            <p><strong>Includes:</strong> {combo.includes}</p>
            <p><strong>Price:</strong> {combo.price}</p>
            <p style={{ color: '#1b5e20' }}><strong>{combo.deal}</strong></p>
            <button
              className="speak-btn"
              onClick={() => speak(`Combo offer: ${combo.combo}. Includes: ${combo.includes}. Price: ${combo.price}. Deal: ${combo.deal}.`)}
            >
              Speak Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
