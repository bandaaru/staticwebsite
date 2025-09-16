import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  GiFarmer,
  GiTrade,
} from "react-icons/gi";
import {
  FaHandsHelping,
  FaSolarPanel,
  FaChalkboardTeacher,
} from "react-icons/fa";
import "../styles/Solutions.css";
import BackgroundImage from "../images/Solutions.jpg"; // Adjust path if needed

const Solutions = () => {
  const cardsRef = useRef(null);

  const handleLearnMore = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="slutions-section" id="slutions">
      {/* HERO SECTION */}
      <div className="slutions-row">
        <div className="slutions-image">
          <img
            src={BackgroundImage}
            alt="Agriculture Background"
            className="slutions-background-image"
          />
        </div>

        <div className="slutions-content">
          <h2>Driving Change: AgriFabriX Solutions</h2>
          <p>
            Empowering agriculture with technology, financial innovation, and sustainability.
          </p>
          <button className="slutions-learn-more-btn" onClick={handleLearnMore}>
            Learn More
          </button>
        </div>
      </div>

      {/* CHALLENGES SECTION */}
      <div className="challenges-container">
        <h3 className="challenges-title">Key Challenges We Address</h3>
        <div className="challenge-grid">
          <div className="challenge-card">
            <GiFarmer className="challenge-icon" />
            <h4>Smallholder Farmer Vulnerability</h4>
            <p>Empowering FPOs & PACS for better market access and financial inclusion.</p>
          </div>
          <div className="challenge-card">
            <GiTrade className="challenge-icon" />
            <h4>Supply Chain Inefficiencies</h4>
            <p>AI-powered logistics, data-driven planning & blockchain-backed traceability.</p>
          </div>
          <div className="challenge-card">
            <FaHandsHelping className="challenge-icon" />
            <h4>Limited Financial Access</h4>
            <p>Competitive-interest loans, BNPL & invoice financing for smallholders & agri-enterprises.</p>
          </div>
          <div className="challenge-card">
            <FaSolarPanel className="challenge-icon" />
            <h4>Climate Change & Sustainability</h4>
            <p>Carbon credit trading & climate-resilient farming techniques.</p>
          </div>
          <div className="challenge-card">
            <FaChalkboardTeacher className="challenge-icon" />
            <h4>Low Digital Literacy</h4>
            <p>Training programs & simple digital tools for seamless adoption.</p>
          </div>
        </div>
      </div>

      {/* SOLUTIONS SECTION */}
      <div className="cards" ref={cardsRef}>
        <h3 className="cards-heading"><strong>Explore Our Key Solutions</strong></h3>
        <div className="cards-grid">
          <div className="car">
            <h4>InputFabriX</h4>
            <p>Sustainable Agricultural Input Marketplace</p>
            <ul>
              <li>Organic & non-GMO seeds</li>
              <li>Smart irrigation tools</li>
              <li>Eco-friendly pest solutions</li>
            </ul>
            <Link to="/InputFabriX">
              <button>Browse Inputs</button>
            </Link>
          </div>

          <div className="car">
            <h4>CreditFabriX</h4>
            <p>Financial Access to our channel partners</p>
            <ul>
              <li>Competitive-Interest Agri Loans</li>
              <li>BNPL & Invoice Financing</li>
              <li>Digital Credit Ratings</li>
            </ul>
            <Link to="/CreditFabriX">
              <button>Apply for Finance</button>
            </Link>
          </div>

          <div className="car">
            <h4>TraceFabriX</h4>
            <p>Blockchain-Enabled Traceability</p>
            <ul>
              <li>Real-time Supply Chain Tracking</li>
              <li>International Certifications</li>
              <li>Carbon Credits Records</li>
            </ul>
            <Link to="/TraceFabriX">
              <button>Discover TraceFabriX</button>
            </Link>
          </div>

          <div className="car">
            <h4>SupplyFabriX</h4>
            <p>AI-Driven Supply Chain Optimization</p>
            <ul>
              <li>Demand Forecasting & Logistics</li>
              <li>Cold Chain & Storage</li>
              <li>Reduced Post-Harvest Losses</li>
            </ul>
            <Link to="/SupplyFabriX">
              <button>Optimize Supply Chain</button>
            </Link>
          </div>

          <div className="car">
            <h4>TradeFabriX</h4>
            <p>Market Linkages & Carbon Credit Monetization</p>
            <ul>
              <li>Direct-to-Buyer Linkages</li>
              <li>Carbon Credit Trading</li>
              <li>Export Market Access</li>
            </ul>
            <Link to="/TradeFabriX">
              <button>Explore TradeFabriX</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
