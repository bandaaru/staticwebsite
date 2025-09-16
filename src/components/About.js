import React from "react";
import "../styles/About.css";
import ceoImage from "../images/Mendu.jpg";
import cfoImage from "../images/sureshsir.jpeg";
import { FaLeaf, FaEye, FaLightbulb, FaHandHoldingUsd, FaUsers } from "react-icons/fa";
import overviewImage from "../images/Overview.jpg";
import journeyImage from "../images/Mission.jpg";
 
const About = () => {
  return (
    <div className="about-us">
      <header className="her-section">
        <h1>Who We are</h1>
        {/* <h1>Who We Are</h1> */}
        {/* <p>Transforming Indian Agriculture with Innovation</p> */}
      </header>
 
      <section className="company-overview">
        <div className="overview-content">
          <img src={overviewImage} alt="Company Overview" className="overview-image" />
          <div className="text-content">
            <h2>Overview</h2>
            <p>
              AgriFabriX is India’s first fully integrated AgriTech platform,
              designed to revolutionize agriculture through data-driven supply
              chains, sustainable input accessibility, and financial inclusion.
            </p>
            <ul>
              <li>Improve supply chain efficiency through AI-driven logistics and traceability</li>
              <li>Empower smallholder farmers & FPOs with access to premium markets and financing</li>
              <li>Promote climate-smart agriculture with sustainable inputs and precision farming</li>
            </ul>
          </div>
        </div>
      </section>
 
      <section className="journey-section">
        <div className="journey-content">
          <div className="journey-text-content">
            <h2>Our Mission</h2>
            <p>AgriFabriX was founded with a bold vision:</p>
            <ul>
              <li>Empowering over 20 million farmers with a modern, climate-resilient, and financially inclusive ecosystem.</li>
              <li>Transforming India’s agri-value chain through real-time data, AI-powered decision-making, and financial innovation.</li>
              <li>Enhancing farmer profitability by connecting producers with premium buyers, reducing post-harvest losses, and enabling direct trade.</li>
            </ul>
          </div>
          <img src={journeyImage} alt="Our Journey" className="journey-image" />
        </div>
      </section>
      <section className="values-section">
      <h2>Our Core Values</h2>
      <div className="values-container">
        <div className="value-box">
          <FaLeaf className="value-icon" />
          <h3>Sustainability</h3>
          <p>We promote climate-smart and eco-friendly solutions for long-term agricultural resilience.</p>
        </div>
        <div className="value-box">
          <FaEye className="value-icon" />
          <h3>Transparency</h3>
          <p>We ensure end-to-end traceability and data integrity for every transaction on our platform.</p>
        </div>
        <div className="value-box">
          <FaLightbulb className="value-icon" />
          <h3>Innovation</h3>
          <p>We leverage AI, blockchain, and fintech solutions to enhance supply chain efficiency and farmer profitability.</p>
        </div>
        <div className="value-box">
          <FaHandHoldingUsd className="value-icon" />
          <h3>Financial Inclusion</h3>
          <p>We make credit and financing accessible to underserved farmers and agri-enterprises.</p>
        </div>
        <div className="value-box">
          <FaUsers className="value-icon" />
          <h3>Collaboration</h3>
          <p>We work with FPOs, PACS, financial institutions, and policymakers to drive large-scale impact.</p>
        </div>
      </div>
    </section>
    <section className="leadership">
  <h2>Founders & Leadership</h2>
  <div className="leaders-container">
    <div className="leader">
    <a href="https://www.linkedin.com/in/mendu-srinivasulu-65731817?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
      <img src={ceoImage} alt="Mendu Srinivasulu" className="leader-image" />
      </a>
      <h3 className="leader-name">Mendu Srinivasulu</h3>
      <p className="leader-designation">Co-Founder & CEO</p>
    </div>
    <div className="leader">
    <a href="https://www.linkedin.com/in/suresh-naraparaju?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
    <img src={cfoImage} alt="Suresh Naraparaju" className="leader-image" />
      </a>
      <h3 className="leader-name">Suresh Naraparaju</h3>
      <p className="leader-designation">Co-Founder & CFO</p>
    </div>
  </div>
</section>
<section className="founders-message">
  <h2>Founders Message</h2>
  <p>
    “We founded AgriFabriX with a simple yet powerful mission—to build a
    resilient, technology-enabled agricultural ecosystem that fosters
    sustainability and profitability. Our vision is to ensure that every
    farmer and agribusiness in India has access to world-class financial
    and market solutions that drive long-term prosperity.”
  </p>
  <h3>Join Us in Transforming Indian Agriculture with AgriFabriX!</h3>
</section>
 
    </div>
  );
};
 
export default About;