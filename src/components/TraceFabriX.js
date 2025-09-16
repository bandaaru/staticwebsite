import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TraceFabriX.css';
import traceImage from '../images/TraceFabriX.jpg';

const offerings = [
  {
    title: "Real-time Tracking",
    body: "Enables continuous monitoring of agricultural inputs and harvested produce throughout the supply chain, ensuring transparency, traceability, and operational efficiency from farm to market",
  },
  {
    title: "Quality Compliance",
    body: "Supports adherence to globally recognized agricultural and sustainability standards, allowing farmers and FPOs to access premium markets and build trust with international buyers",
  },
  {
    title: "Digital Certification",
    body: "Utilizes blockchain technology to maintain secure, verifiable records of farming practices, ensuring integrity in carbon credit claims and organic certification processes",
  },
  {
    title: "AI-powered Quality Control",
    body: "Applies artificial intelligence to identify anomalies and detect potential fraud in supply chain data while ensuring consistent product quality through automated inspection systems",
  },
];

const benefits = [
  {
    title: "Market Empowerment",
    body: "Equips farmers and Farmer Producer Organizations (FPOs) with traceability tools and certifications that provide end-to-end visibility, enabling access to premium markets that demand transparency and accountability",
  },
  {
    title: "Consumer Trust",
    body: "Enhances brand credibility by ensuring that sourcing practices are ethically sound and transparently documented, allowing consumers to verify the origin, quality, and sustainability of agricultural products",
  },
  {
    title: "Efficiency and Loss Reduction",
    body: "Strengthens the supply chain by minimizing fraudulent practices, improving operational accuracy, and implementing safeguards to reduce losses that occur after harvest",
  },
];

const TraceFabriX = () => (
  <section className="tracefabrx-section">
    <div className="tracefabrx-container">
      {/* HERO SECTION */}
      <div className="tracefabrx-hero">
        <div className="tracefabrx-row">
          <img src={traceImage} alt="TraceFabriX Traceability" className="tracefabrx-bg" />
          <div className="tracefabrx-content">
            <h2><strong>TraceFabriX</strong></h2>
            <h3>Blockchain-Enabled Traceability &amp; Compliance</h3>
            <p>
              A next-generation traceability system ensuring end-to-end supply chain transparency,
              helping businesses comply with global food safety, ESG, and organic certification standards.
            </p>
          </div>
        </div>
      </div>

      {/* KEY OFFERINGS SECTION */}
      <div className="tracefabrx-section-content">
        <div className="trace-label">
          <h3>Key Offerings</h3>
        </div>
        <div className="section-items">
          {offerings.map((item, idx) => (
            <div className="card" key={idx}>
              <h4 className="card-title">{item.title}</h4>
              <p className="card-body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT HELPS SECTION */}
      <div className="tracefabrx-section-content">
        <div className="trace-label">
          <h3>How It Helps</h3>
        </div>
        <div className="section-items">
          {benefits.map((item, idx) => (
            <div className="card" key={idx}>
              <h4 className="card-title">{item.title}</h4>
              <p className="card-body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="tracefabrx-button-container">
        <Link to="/OnboardingForm">
          <button className="tracefabrx-button">Discover TraceFabriX</button>
        </Link>
      </div>
    </div>
  </section>
);

export default TraceFabriX;
