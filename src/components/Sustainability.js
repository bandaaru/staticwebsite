import React from "react";
import "../styles/Sustainable.css";
import sustainableBg from "../images/Susatainable.png"; // Replace with actual path

const Sustainability = () => {
  return (
    <div className="sustainability">
      {/* Hero Section */}
      <div className="Sustain-section">
        <div className="Sustain-row">
          <img src={sustainableBg} alt="Sustainability Background" className="Sustain-bg" />
          <div className="Sustain-content">
            <h2>Driving a Sustainable Future for Agriculture</h2>
            <p>While achieving SDG, it's important to see how farmer's get benefited at every step. Translating SDGs into profitable farming at grassroots,  is the real challenge.  And we believe,  we can make it!</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="sustainability-section">
        <div className="sustainability-container">

          {/* Intro Paragraphs */}
          <p className="intro">
            The Future of agriculture depends on sustainability, resource efficiency, and environmental stewardship.
            AgriFabriX is committed to transforming traditional farming practices into climate-smart, eco-friendly,
            and financially rewarding systems.
          </p>
          <p className="intro">
            By Integrating Carbon Credit markets, regenerative practices, and sustainable inputs,
            AgriFabriX enables farmers to improve productivity while reducing their environmental footprint.
          </p>

          <hr />

          {/* Commitment Section */}
          <h2>Our Commitment to Sustainability</h2>
          <p>
            AgriFabriX believes Economic growth and Environmental responsibility go hand in hand. Our sustainability
            initiatives include climate-smart agriculture, carbon trading, and ESG compliance—helping farmers
            grow greener while earning more.
          </p>

          <hr />

          {/* ESG Columns */}
          <h2>How AgriFabriX Promotes ESG Initiatives</h2>
          <div className="esg-columns">
            <div className="esg-box">
              <h3>Environmental Commitment</h3>
              <ul>
                <li>Reduced chemical use through organic inputs</li>
                <li>Water conservation via drip irrigation & sensors</li>
                <li>Use of renewable energy on farms</li>
              </ul>
            </div>
            <div className="esg-box">
              <h3>Social Impact</h3>
              <ul>
                <li>Empowering smallholders with training and market access</li>
                <li>Supporting women-led agricultural ventures</li>
                <li>Boosting rural employment via sustainable agri-businesses</li>
              </ul>
            </div>
            <div className="esg-box">
              <h3>Governance & Ethics</h3>
              <ul>
                <li>Blockchain-enabled traceability & ethical sourcing</li>
                <li>Fair Trade & global certification compliance</li>
                <li>Collaboration with policymakers and researchers</li>
              </ul>
            </div>
          </div>

          <hr />

          {/* Game Changer Section */}
          <h2>Why Our Model is a Game Changer</h2>
          <ul className="game-changer-list">
            <li>Carbon Credit income streams for farmers</li>
            <li>Premium Market access for sustainable produce</li>
            <li>AI & Blockchain for ESG-compliant traceability</li>
            <li>Sustainability-linked financing with competitive interest</li>
          </ul>

          <p className="closing">
            By making sustainability both profitable and scalable, AgriFabriX is building a resilient, inclusive, and regenerative agricultural future.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
