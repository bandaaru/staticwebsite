import React from 'react';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-heading">Privacy Policy</h1>

      <p className="privacy-paragraph">
        Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
      </p>

      <h2 className="privacy-subheading">1. Information We Collect</h2>
      <p className="privacy-paragraph">We may collect the following types of information:</p>
      <ul className="privacy-list">
        <li>Personal identification information (Name, email address, phone number, etc.)</li>
        <li>Usage data and cookies</li>
        <li>Transactional information</li>
        <li>KYC details (Aadhar, Pan, GST etc. as applicable)</li>
      </ul>

      <h2 className="privacy-subheading">2. How We Use Your Information</h2>
      <p className="privacy-paragraph">We use the collected data to:</p>
      <ul className="privacy-list">
        <li>To connect with other credible stakeholders transacting on our B2B platform</li>
        <li>Provide and improve our services</li>
        <li>Process transactions</li>
        <li>Send periodic emails and updates</li>
        <li>Respond to customer service requests</li>
      </ul>

      <h2 className="privacy-subheading">3. Cookies and Tracking Technologies</h2>
      <p className="privacy-paragraph">
        We use cookies to improve your browsing experience and analyze traffic. You can control cookie settings through your browser.
      </p>

      <h2 className="privacy-subheading">4. Information Sharing and Disclosure</h2>
      <p className="privacy-paragraph">
        We do not sell or rent your personal data. We may share information with trusted third-party providers to operate our services, subject to confidentiality agreements.
      </p>

      <h2 className="privacy-subheading">5. Data Security</h2>
      <p className="privacy-paragraph">
        We implement appropriate security measures to protect your data from unauthorized access, alteration, or destruction.
      </p>

      <h2 className="privacy-subheading">6. Your Rights</h2>
      <p className="privacy-paragraph">
        You have the right to access, update, or delete your personal information. You can contact us at <a href="mailto:privacy@agrifabrix.com">privacy@agrifabrix.com</a>.
      </p>

      <h2 className="privacy-subheading">7. Changes to This Policy</h2>
      <p className="privacy-paragraph">
        We may update our Privacy Policy periodically. Changes will be posted on this page with a revised effective date.
      </p>

      <h2 className="privacy-subheading">8. Contact Us</h2>
      <p className="privacy-paragraph">
        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@agrifabrix.com">privacy@agrifabrix.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
