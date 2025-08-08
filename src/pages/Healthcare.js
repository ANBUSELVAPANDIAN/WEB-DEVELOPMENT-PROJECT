import React from 'react';

// Function to speak text
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

function Healthcare() {
  const handleOrder = (productName) => {
    alert(`Order placed for: ${productName}`);
  };

  const products = [
    { id: 1, name: 'Digital Thermometer', price: '₹199' },
    { id: 2, name: 'Blood Pressure Monitor', price: '₹1,299' },
    { id: 3, name: 'Oximeter', price: '₹899' },
    { id: 4, name: 'Hand Sanitizer (500ml)', price: '₹149' },
    { id: 5, name: 'First Aid Kit', price: '₹499' }
  ];

  const handleSpeakHealthcareProducts = () => {
    const productDescriptions = products.map(
      (product) => `${product.name} is priced at ${product.price}.`
    ).join(' ');
    speak(productDescriptions); // Speak all product names and prices
  };

  return (
    <div className="page-container">
      <h2>Healthcare Products</h2>
      <p>Explore a wide range of wellness and personal care essentials.</p>

      {/* Speak Healthcare Products Button */}
      <button
        onClick={handleSpeakHealthcareProducts}
        style={{
          marginBottom: '20px',
          padding: '10px 20px',
          backgroundColor: '#FFEB3B',
          color: '#10847E',
          border: 'none',
          borderRadius: '25px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Speak Healthcare Products
      </button>

      <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              padding: '15px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            }}
          >
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <button
              onClick={() => handleOrder(product.name)}
              style={{
                padding: '8px 16px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Healthcare;
