import React from 'react';

// Function to speak text
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

const products = [
  {
    name: 'Aloe Vera Moisturizing Gel',
    category: 'Skin Care',
    price: '₹199',
    image: 'https://via.placeholder.com/150/92c952?text=Aloe+Vera+Gel',
  },
  {
    name: 'Ayurvedic Pain Relief Oil',
    category: 'Health Care',
    price: '₹299',
    image: 'https://via.placeholder.com/150/771796?text=Pain+Relief+Oil',
  },
  {
    name: 'Vitamin E Skin Capsules',
    category: 'Skin Care',
    price: '₹149',
    image: 'https://via.placeholder.com/150/24f355?text=Vitamin+E',
  },
  {
    name: 'Digital Thermometer',
    category: 'Health Care',
    price: '₹349',
    image: 'https://via.placeholder.com/150/f66b97?text=Thermometer',
  },
  {
    name: 'Herbal Face Wash',
    category: 'Skin Care',
    price: '₹129',
    image: 'https://via.placeholder.com/150/56a8c2?text=Face+Wash',
  },
  {
    name: 'Blood Pressure Monitor',
    category: 'Health Care',
    price: '₹999',
    image: 'https://via.placeholder.com/150/b0f7cc?text=BP+Monitor',
  },
];

function ValueStore() {
  const handleCartClick = (product) => {
    alert(`🛒 "${product.name}" added to cart!`);
  };

  const handleBuyNow = (product) => {
    alert(`✅ You chose to buy "${product.name}". Proceeding to checkout...`);
  };

  const handleWhatsAppOrder = (product) => {
    const message = `Hello, I want to order: ${product.name} for ${product.price}`;
    const phone = '919876543210'; // Replace with your WhatsApp number
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="page-container" style={{ padding: '30px' }}>
      <h2 style={{ color: '#6a1b9a' }}>🛍️ Value Store</h2>
      <p style={{ fontSize: '1.1rem', color: '#555', maxWidth: '700px' }}>
        Affordable health & skincare essentials — Shop smart, stay healthy!
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '30px' }}>
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              background: '#f3e5f5',
              borderRadius: '15px',
              padding: '15px',
              width: '220px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}
          >
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '10px' }} />
            <h4 style={{ color: '#4a148c', marginTop: '10px' }}>{product.name}</h4>
            <p style={{ margin: '5px 0', color: '#6a1b9a' }}>{product.category}</p>
            <p style={{ fontWeight: 'bold', color: '#2e7d32' }}>{product.price}</p>

            <div style={{ marginTop: '10px' }}>
              <button
                onClick={() => handleCartClick(product)}
                style={{
                  marginBottom: '5px',
                  backgroundColor: '#7b1fa2',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleBuyNow(product)}
                style={{
                  marginBottom: '5px',
                  backgroundColor: '#43a047',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                Buy Now
              </button>
              <button
                onClick={() => handleWhatsAppOrder(product)}
                style={{
                  backgroundColor: '#25D366',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                Order on WhatsApp
              </button>

              {/* Speak Product Details Button */}
              <button
                onClick={() =>
                  speak(
                    `Product Name: ${product.name}, Category: ${product.category}, Price: ${product.price}.`
                  )
                }
                style={{
                  marginTop: '10px',
                  backgroundColor: '#ffeb3b',
                  color: '#2575fc',
                  padding: '8px 16px',
                  borderRadius: '25px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                Speak Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ValueStore;
