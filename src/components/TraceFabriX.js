import React from "react";
import { Link } from "react-router-dom";
import "../styles/TraceFabriX.css";
import traceImage from "../images/TraceFabriX.jpg";

const offerings = [
  {
    title: "Real-time Tracking",
    body: "Monitor agricultural inputs and harvested produce throughout the supply chain, ensuring transparency and efficiency from farm to market.",
  },
  {
    title: "Quality Compliance",
    body: "Adhere to global agricultural and sustainability standards, enabling farmers and FPOs to access premium markets with confidence.",
  },
  {
    title: "Digital Certification",
    body: "Leverage blockchain to maintain secure, verifiable records of farming practices, ensuring credibility in carbon credit and organic certification.",
  },
  {
    title: "AI-powered Quality Control",
    body: "Use artificial intelligence to detect anomalies and fraud in supply chain data while ensuring consistent product quality.",
  },
];

const benefits = [
  {
    title: "Market Empowerment",
    body: "Provide farmers and FPOs with tools and certifications that unlock premium markets demanding traceability and accountability.",
  },
  {
    title: "Consumer Trust",
    body: "Boost brand credibility with transparent sourcing practices, enabling consumers to verify product origin, quality, and sustainability.",
  },
  {
    title: "Efficiency and Loss Reduction",
    body: "Reduce fraud, improve operational accuracy, and strengthen supply chains to minimize post-harvest losses.",
  },
];

const TraceFabriX = () => (
  <section className="tracefabrx-section">
    <div className="tracefabrx-container">
      {/* HERO SECTION */}
      <div className="tracefabrx-hero">
        <img
          src={traceImage}
          alt="TraceFabriX Traceability"
          className="tracefabrx-img"
        />
        <div className="tracefabrx-content">
          <h2><strong>TraceFabriX</strong></h2>
          <h3>Blockchain-Enabled Traceability & Compliance</h3>
          <p>
            A next-generation traceability system ensuring end-to-end supply chain transparency,
            helping businesses comply with global food safety, ESG, and organic certification standards.
          </p>
        </div>
      </div>

      {/* KEY OFFERINGS */}
      <div className="tracefabrx-section-content leaf-decor">
        <div className="tracefabrx-label">
          <h3>Key Offerings</h3>
        </div>
        <div className="tracefabrx-card-grid">
          {offerings.map((item, idx) => (
            <div className="tracefabrx-card" key={idx}>
              <div className="tracefabrx-title-item">{item.title}</div>
              <div className="tracefabrx-body-item">{item.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT HELPS */}
      <div className="tracefabrx-section-content leaf-decor">
        <div className="tracefabrx-label">
          <h3>How It Helps</h3>
        </div>
        <div className="tracefabrx-card-grid">
          {benefits.map((item, idx) => (
            <div className="tracefabrx-card" key={idx}>
              <div className="tracefabrx-title-item">{item.title}</div>
              <div className="tracefabrx-body-item">{item.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA BUTTON */}
      <div className="tracefabrx-button-container">
        <Link to="/OnboardingForm">
          <button className="tracefabrx-button">Discover TraceFabriX</button>
        </Link>
      </div>
    </div>
  </section>
);

export default TraceFabriX;
