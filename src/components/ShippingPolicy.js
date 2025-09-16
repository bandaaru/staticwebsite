import React from 'react';
import '../styles/ShippingPolicy.css';

const ShippingPolicy = () => {
  return (
    <div className="shipping-policy-container">
      <h1 className="policy-title">Shipping & Delivery Policy</h1>

      <section className="policy-section">
        <h2 className="section-heading">Processing Time</h2>
        <p>
          All orders are processed within 1–3 business days (excluding weekends and holidays) after we receive your order confirmation.
          You will receive a notification when your order has shipped, sent via email and text message to your registered mobile number.
        </p>
      </section>

      <section className="policy-section">
        <h2 className="section-heading">Shipping Rates and Estimates</h2>
        <p>Shipping charges for your order will be calculated and displayed at checkout.</p>
        <ul>
          <li><strong>Domestic Shipping:</strong> 3–7 business days</li>
          <li><strong>International Shipping:</strong> 7–21 business days (varies by destination)</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2 className="section-heading">How Do I Check the Status of My Order?</h2>
        <p>
          When your order has shipped, you will receive an email notification with a tracking number you can use to check its status.
          Please allow 48 hours for the tracking information to become available.
        </p>
      </section>

      <section className="policy-section">
        <h2 className="section-heading">Shipping to P.O. Boxes</h2>
        <p>
          Some carriers have limitations on shipping to P.O. Boxes. Please ensure you provide a valid shipping address when placing your order.
        </p>
      </section>

      <section className="policy-section">
        <h2 className="section-heading">Refunds, Returns, and Exchanges</h2>
        <p>
          We accept returns in accordance with the supplier’s policy as agreed upon in the confirmed purchase orders.
        </p>
      </section>
    </div>
  );
};

export default ShippingPolicy;
