import React from 'react';
import './Medicine.css'; // Optional: for custom styles if you want

const medicines = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    description: "Used for fever and mild pain relief",
    price: "₹20 / strip",
  },
  {
    id: 2,
    name: "Azithromycin 250mg",
    description: "Antibiotic for bacterial infections",
    price: "₹75 / strip",
  },
  {
    id: 3,
    name: "Cetirizine",
    description: "Relieves allergy symptoms like sneezing and runny nose",
    price: "₹15 / strip",
  },
  {
    id: 4,
    name: "Amoxicillin 500mg",
    description: "Broad-spectrum antibiotic",
    price: "₹55 / strip",
  },
  {
    id: 5,
    name: "Metformin 500mg",
    description: "Helps control blood sugar levels in diabetes",
    price: "₹30 / strip",
  },
];

// Function to speak the medicine details
function speakMedicineDetails(medicine) {
  const text = `Medicine Name: ${medicine.name}. Description: ${medicine.description}. Price: ${medicine.price}.`;
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

function Medicine() {
  return (
    <div className="page-container">
      <h2>Buy Medicines</h2>
      <p>Find all your prescribed and over-the-counter medications below.</p>

      <div className="medicine-list">
        {medicines.map((medicine) => (
          <div key={medicine.id} className="medicine-card">
            <h4>{medicine.name}</h4>
            <p>{medicine.description}</p>
            <p className="price">{medicine.price}</p>
            <button className="buy-btn">Buy Now</button>
            <button 
              className="speak-btn"
              onClick={() => speakMedicineDetails(medicine)}
            >
              Speak Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Medicine;
