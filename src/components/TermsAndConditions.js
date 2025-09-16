import React from 'react';
import '../styles/TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-heading">Terms and Conditions</h1>

      <p className="terms-paragraph">
        By accessing or using our website, you agree to be bound by the terms and conditions described herein and all terms incorporated by reference.
      </p>

      <h2 className="terms-subheading">1. Use of the Site</h2>
      <p className="terms-paragraph">
        You may use the site for lawful purposes only. You agree not to use the site in any way that could harm the site or its users.
      </p>

      <h2 className="terms-subheading">2. Intellectual Property</h2>
      <p className="terms-paragraph">
        All content on this site is the property of the website owner and is protected by applicable copyright and trademark laws.
      </p>

      <h2 className="terms-subheading">3. User Responsibilities</h2>
      <ul className="terms-list">
        <li>Provide accurate and complete information.</li>
        <li>Do not attempt to breach the site's security.</li>
        <li>Respect other users and their rights.</li>
      </ul>

      <h2 className="terms-subheading">4. Limitation of Liability</h2>
      <p className="terms-paragraph">
        We are not liable for any damages resulting from your use of the site or from any content posted on the site.
      </p>

      <h2 className="terms-subheading">5. Changes to Terms</h2>
      <p className="terms-paragraph">
        We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the site constitutes acceptance of those changes.
      </p>
    </div>
  );
};

export default TermsAndConditions;
