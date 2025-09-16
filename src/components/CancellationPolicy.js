import React from 'react';
import '../styles/CancellationPolicy.css';

const CancellationPolicy = () => {
  return (
    <div className="cancellation-container">
      <h1 className="cancellation-heading">Cancellation and Refund Policy</h1>

      <p className="cancellation-paragraph">
        We strive to provide our users with a fair and transparent cancellation and refund policy. Please read the following terms carefully before making a purchase or using our services.
      </p>

      <h2 className="cancellation-subheading">1. Cancellation Policy</h2>
      <ul className="cancellation-list">
        <li>Cancellation of orders are subjective to suppliers existing policies.</li>
        <li>To cancel an order, please contact our support team at <a href="mailto:support@agrifabrix.com">support@agrifabrix.com</a> with your order details.</li>
      </ul>

      <h2 className="cancellation-subheading">2. Refund Policy</h2>
      <ul className="cancellation-list">
        <li>We accept returns in accordance with the supplier's policy as agreed upon in the confirmed purchase orders.</li>
        <li>Refunds are issued only if the cancellation is made within the eligible period as defined by the supplier’s policy</li>
        <li>No refunds will be issued for services already rendered or products delivered, except in cases of defective or incorrect items.</li>
        <li>Approved refunds will be processed within 7–10 business days to the original payment method.</li>
      </ul>

      <h2 className="cancellation-subheading">3. Non-Refundable Items</h2>
      <p className="cancellation-paragraph">The following are non-refundable:</p>
      <ul className="cancellation-list">
        <li>Customized or personalized products.</li>
        <li>Any other products mentioned by suppliers at the time of purchase order confirmation.</li>
      </ul>

      <h2 className="cancellation-subheading">4. Contact Us</h2>
      <p className="cancellation-paragraph">
        If you have any questions about our cancellation and refund policies, please contact us at <a href="mailto:support@agrifabrix.com">support@agrifabrix.com</a>.
      </p>
    </div>
  );
};

export default CancellationPolicy;
