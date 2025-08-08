import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';

// Function to speak text (global)
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

// Create root and render the App inside StrictMode for best practices
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* Pass the speak function to the App component */}
    <App speak={speak} />
  </React.StrictMode>
);

// Optional: Measure performance or send metrics to analytics endpoint
reportWebVitals();
// You can log metrics like this:
// reportWebVitals(console.log);
