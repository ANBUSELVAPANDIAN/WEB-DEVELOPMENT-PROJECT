import React from 'react';

// Function to speak text
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

function PrivacyPolicy() {
  const privacyPolicyText = `
    Privacy Policy of MEDICO PLUS+:
    1. Information We Collect: Personal details like name, email, phone number, and address.
    Medical information necessary to process your orders. Payment information processed securely through third-party services.
    2. How We Use Your Information: To fulfill your medicine and healthcare orders. To personalize your experience on our platform. To communicate important updates and offers.
    3. Data Protection: We implement strict security measures to protect your data. Access is restricted to authorized personnel only.
    4. Third-Party Sharing: We do not sell or rent your personal information. Information is shared only with trusted partners for order fulfillment and legal compliance.
    5. Your Consent: By using our website, you consent to our privacy practices outlined in this policy.
    6. Updates to Policy: We may update this policy periodically. Please review it regularly to stay informed.
    If you have any questions, feel free to contact our support team at support@medicoplus.com.
  `;

  return (
    <div className="page-container">
      <h2>Privacy Policy</h2>
      <p>
        At <strong>MEDICO PLUS +</strong>, your privacy and trust are our top priorities. This Privacy Policy outlines how we collect, use, and protect your personal information.
      </p>

      <h3>1. Information We Collect</h3>
      <ul>
        <li>Personal details like name, email, phone number, and address.</li>
        <li>Medical information necessary to process your orders.</li>
        <li>Payment information processed securely through third-party services.</li>
      </ul>

      <h3>2. How We Use Your Information</h3>
      <ul>
        <li>To fulfill your medicine and healthcare orders.</li>
        <li>To personalize your experience on our platform.</li>
        <li>To communicate important updates and offers.</li>
      </ul>

      <h3>3. Data Protection</h3>
      <p>
        We implement strict security measures to protect your data. Access is restricted to authorized personnel only.
      </p>

      <h3>4. Third-Party Sharing</h3>
      <p>
        We do not sell or rent your personal information. Information is shared only with trusted partners for order fulfillment and legal compliance.
      </p>

      <h3>5. Your Consent</h3>
      <p>
        By using our website, you consent to our privacy practices outlined in this policy.
      </p>

      <h3>6. Updates to Policy</h3>
      <p>
        We may update this policy periodically. Please review it regularly to stay informed.
      </p>

      <p>
        If you have any questions, feel free to contact our support team at <strong>support@medicoplus.com</strong>.
      </p>

      {/* Speak Button */}
      <button 
        className="speak-btn"
        onClick={() => speak(privacyPolicyText)}
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
        Speak Privacy Policy
      </button>
    </div>
  );
}

export default PrivacyPolicy;
