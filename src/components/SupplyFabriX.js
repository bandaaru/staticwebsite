import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SupplyFabriX.css';
import supplyImage from '../images/SupplyFabriX.jpg'; // adjust path if needed

const offerings = [
  {
    title: "AI-powered Demand Forecasting",
    body: "Leverages AI-driven demand forecasting to optimize pricing strategies and improve inventory management, ensuring products are available when and where they're needed while minimizing overstock and shortages",
  },
  {
    title: "Route Optimization",
    body: "Uses intelligent route planning to streamline transportation operations, reduce fuel consumption, minimize delivery times, and enhance overall logistics efficiency",
  },
  {
    title: "Digital Twin Models",
    body: "Applies digital twin technology to create real-time virtual models of the supply chain, enabling accurate simulation, scenario analysis, and effective capacity planning for better decision-making",
  },
  {
    title: "Cold Chain Integration",
    body: "Integrates cold chain logistics and advanced storage solutions to preserve product quality after harvest, reduce spoilage, and ensure compliance with food safety standards",
  },
];

const benefits = [
  {
    title: "Minimizes Food Wastage",
    body: "Implements efficient handling, storage, and distribution practices to significantly reduce food wastage and losses that occur after harvesting, ensuring more of the produce reaches the market in good condition",
  },
  {
    title: "Optimizes Transportation Costs",
    body: "Enhances route planning, load management, and vehicle utilization to lower transportation expenses, increasing cost-efficiency and profitability across the agricultural logistics chain",
  },
  {
    title: "Improves Farmer Profitability",
    body: "Equips farmers with real-time market insights and predictive tools, enabling them to sell at the right time and access better prices, thereby maximizing their income potential",
  },
];

const SupplyFabriX = () => (
  <section className="supplyfabrx-section">
    <div className="supplyfabrx-container">
      
      {/* HERO HEADER */}
      <div className="SupplyFabriX-section">
        <div className="SupplyFabriX-row">
          <img src={supplyImage} alt="SupplyFabriX Logistics" className="SupplyFabriX-bg" />
          <div className="SupplyFabriX-content">
            <h2><strong>SupplyFabriX</strong></h2>
            <h3>Advanced Logistics &amp; Market Intelligence</h3>
            <p>
              An advanced logistics and market intelligence platform that streamlines agricultural supply chains, reducing inefficiencies and post-harvest losses.
            </p>
          </div>
        </div>
      </div>

      {/* KEY OFFERINGS SECTION */}
      <div className="supplyfabrx-section-content">
        <div className="supply-label">
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
      <div className="supplyfabrx-section-content">
        <div className="supply-label">
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
      <div className="supplyfabrx-button-container">
        <Link to="/OnboardingForm">
          <button className="supplyfabrx-button">
            Optimize Your Supply Chain
          </button>
        </Link>
      </div>
      
    </div>
  </section>
);

export default SupplyFabriX;
