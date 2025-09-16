import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/TradeFabriX.css";
import tradeImage from "../images/TradeFabriX.jpg";


const offerings = [
  {
    title: "Direct-to-Buyer Linkages",
    body: "Facilitates direct connections between farmers and end-buyers, eliminating intermediaries and ensuring farmers receive fair and transparent prices for their produce.",
  },
  {
    title: "Export & Premium Market Access",
    body: "Provides Indian farmers with access to international and high-value domestic markets, enabling them to meet quality standards and benefit from higher-margin export opportunities.",
  },
  {
    title: "Carbon Credit Trading",
    body: "Enables farmers to generate additional revenue by quantifying and trading carbon credits earned through environmentally friendly agricultural practices.",
  },
  {
    title: "ESG-Compliant Certification Assistance",
    body: "Supports Farmer Producer Organizations (FPOs) in obtaining certifications aligned with global ESG (Environmental, Social, and Governance) standards, enhancing their credibility and access to ethical markets.",
  }
];

const benefits = [
  {
    title: "Diversifies Farmer Income",
    body: "Expands farmers’ revenue streams by introducing alternative income opportunities such as carbon credits, certifications, and value-added markets, reducing dependence on conventional crop sales.",
  },
  {
    title: "Encourages Climate-Smart Practices",
    body: "Promotes the use of sustainable, climate-resilient agricultural methods by offering financial rewards and market-based incentives for environmentally responsible practices.",
  },
  {
    title: "Opens Global Trade Opportunities",
    body: "Enables farmers and agri-enterprises to access international markets that prioritize sustainability, increasing demand and value for certified, eco-friendly agricultural goods.",
  }
];

const TradeFabriX = () => (
  <section className="tradefabrx-section">
    <div className="tradefabrx-container">
      {/* HERO SECTION */}
      <div className="tradefabrx-hero">
        <img src={tradeImage} alt="TradeFabriX Marketplace" className="tradefabrx-img" />
        <div className="tradefabrx-content">
          <h2><strong>TradeFabriX</strong></h2>
          <h3>Market Linkages & Carbon Credit Monetization</h3>
          <p>
            A game-changing revenue expansion platform that enables farmers, FPOs, and agri-enterprises to access premium markets, export opportunities, and carbon credit trading.
          </p>
        </div>
      </div>

      {/* KEY OFFERINGS */}
      <div className="tradefabrx-section-content">
        <div className="tradefabrx-label">
          <h3>Key Offerings</h3>
        </div>
        <div className="tradefabrx-card-grid">
          {offerings.map((item, idx) => (
            <div className="tradefabrx-card" key={idx}>
              <div className="tradefabrx-title-item">{item.title}</div>
              <div className="tradefabrx-body-item">{item.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT HELPS */}
      <div className="tradefabrx-section-content">
        <div className="tradefabrx-label">
          <h3>How It Helps</h3>
        </div>
        <div className="tradefabrx-card-grid">
          {benefits.map((item, idx) => (
            <div className="tradefabrx-card" key={idx}>
              <div className="tradefabrx-title-item">{item.title}</div>
              <div className="tradefabrx-body-item">{item.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Browse Button */}
      <div className="tradefabrx-button-container">
        <Link to="/OnboardingForm">
          <button className="tradefabrx-button">Expand Your Revenue</button>
        </Link>
      </div>
    </div>
  </section>
);

export default TradeFabriX;
