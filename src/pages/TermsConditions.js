import React from 'react';

// Function to speak text
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

function TermsConditions() {
  const termsText = `
    Terms & Conditions:
    1. Use of Website: Our website is intended for personal, non-commercial use. You agree not to misuse the site or its services.
    2. Account Responsibility: You are responsible for maintaining the confidentiality of your account and password and for restricting access to your device.
    3. Medical Information: The content provided on MEDICO PLUS + is for informational purposes only and should not be considered a substitute for medical advice, diagnosis, or treatment.
    4. Product & Service Availability: Product listings and availability are subject to change without notice. We reserve the right to limit the sale of our products to any person, geographic region, or jurisdiction.
    5. Intellectual Property: All content on this site, including logos, graphics, and text, is the property of MEDICO PLUS + and protected by copyright laws.
    6. Limitation of Liability: We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.
    7. Modifications: We reserve the right to update or modify these Terms at any time. Continued use of the site means you accept those changes.
    If you have any questions regarding our terms, please contact us.
  `;

  return (
    <div className="page-container">
      <h2>Terms & Conditions</h2>
      <p>Welcome to <strong>MEDICO PLUS +</strong>. By accessing or using our platform, you agree to be bound by the following Terms and Conditions. Please read them carefully.</p>

      <h3>1. Use of Website</h3>
      <p>
        Our website is intended for personal, non-commercial use. You agree not to misuse the site or its services.
      </p>

      <h3>2. Account Responsibility</h3>
      <p>
        You are responsible for maintaining the confidentiality of your account and password and for restricting access to your device.
      </p>

      <h3>3. Medical Information</h3>
      <p>
        The content provided on MEDICO PLUS + is for informational purposes only and should not be considered a substitute for medical advice, diagnosis, or treatment.
      </p>

      <h3>4. Product & Service Availability</h3>
      <p>
        Product listings and availability are subject to change without notice. We reserve the right to limit the sale of our products to any person, geographic region, or jurisdiction.
      </p>

      <h3>5. Intellectual Property</h3>
      <p>
        All content on this site, including logos, graphics, and text, is the property of MEDICO PLUS + and protected by copyright laws.
      </p>

      <h3>6. Limitation of Liability</h3>
      <p>
        We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.
      </p>

      <h3>7. Modifications</h3>
      <p>
        We reserve the right to update or modify these Terms at any time. Continued use of the site means you accept those changes.
      </p>

      <p>For questions regarding our terms, please <a href="/contact">contact us</a>.</p>

      {/* Speak Terms Button */}
      <button 
        className="speak-btn"
        onClick={() => speak(termsText)}
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
        Speak Terms & Conditions
      </button>
    </div>
  );
}

export default TermsConditions;
