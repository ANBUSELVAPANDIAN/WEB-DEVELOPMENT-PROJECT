import React from 'react';

// Function to speak text
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

function HealthBlogs() {
  const tips = [
    {
      title: 'Stay Hydrated Always',
      content: 'Drinking at least 8 glasses of water a day keeps your body functioning optimally and flushes out toxins.'
    },
    {
      title: 'Eat the Rainbow',
      content: 'Incorporate colorful fruits and vegetables in your meals. Each color represents different essential nutrients.'
    },
    {
      title: 'Mindful Breathing',
      content: 'Take 5 minutes a day to focus on deep, mindful breathing. It reduces stress and calms the nervous system.'
    },
    {
      title: 'Limit Screen Time',
      content: 'Too much screen time strains your eyes and affects sleep. Use blue light filters and take regular breaks.'
    },
    {
      title: 'Get Moving',
      content: 'Even a 30-minute walk can boost your mood, support heart health, and maintain a healthy weight.'
    }
  ];

  const handleSpeakHealthTips = () => {
    const allTips = tips.map(tip => `${tip.title}: ${tip.content}`).join(' ');
    speak(allTips); // Speak all health tips
  };

  return (
    <div className="page-container">
      <h2>Health Blogs</h2>
      <p>Read curated health tips, medical news, and wellness articles from experts.</p>

      <div style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
        {tips.map((tip, index) => (
          <div
            key={index}
            style={{
              padding: '20px',
              borderRadius: '10px',
              background: '#f7f9fc',
              borderLeft: '5px solid #4CAF50',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
            }}
          >
            <h3 style={{ marginBottom: '10px', color: '#333' }}>{tip.title}</h3>
            <p style={{ color: '#555' }}>{tip.content}</p>
          </div>
        ))}
      </div>

      {/* Speak Health Tips Button */}
      <button
        onClick={handleSpeakHealthTips}
        style={{
          marginTop: '40px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '25px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Speak Health Tips
      </button>

      <div style={{ marginTop: '40px', textAlign: 'center', fontStyle: 'italic', color: '#777' }}>
        💚 “A healthy outside starts from the inside.” 💚
      </div>
    </div>
  );
}

export default HealthBlogs;
