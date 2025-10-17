import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Partner.css";

import Ag from "../images/AgriTech.jpg";
import fpo from "../images/FPO.jpeg";
import fin from "../images/Bank.jpg";

// Partner logos
import logo1 from "../images/capsber.png";
import logo2 from "../images/infarmsys.jpg";
import logo3 from "../images/dibbble.png";
import logo4 from "../images/aigenix.png";
import logo5 from "../images/fin.png";
import logo6 from "../images/nyasta.png";
import logo7 from "../images/yk.png";
import logo8 from "../images/osc.png";
import logo9 from "../images/bal.png";
import logo10 from "../images/rukart.png";
import logo11 from "../images/viswa.png";

const Partners = () => {
  const navigate = useNavigate();

  // Logos
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
  ];

  // Each logo’s website (temp links, replace later)
  const partnerLinks = [
    "https://capsber.com/",
    "https://farmsys.co/",
    "https://dibbleag.com/",
    "https://www.ai-genix.net/",
    "https://finozen.co.in/",
    "https://nyasta.in/",
    "https://yklaboratories.com/",
    "https://oscillomachines.com/",
    "https://www.balwaan.in/",
    "https://rukart.co/",
    "https://www.vishwaagrotech.com/",
  ];

  return (
    <div className="contain">
      {/* ===== Header ===== */}
      <div className="header-container">
        <h1>Partners & Collaborations</h1>
        <p>
          Bringing AgriTech, Finance, Farmers, Farmer Collectives,
          and Agri-Entrepreneurs closer than ever.
        </p>
      </div>

      {/* ===== Hero Section ===== */}
      <section className="her-content">
        <div className="her-text">
          <p>
            AgriFabriX fosters transformation in Agriculture through
            strategic collaboration. By partnering with farmer groups,
            financial institutions, and AgriTech innovators, it builds
            a connected ecosystem. Key focus areas include expanding
            access to finance, enabling digital tools for productivity,
            connecting farmers to premium markets, and promoting
            sustainable, climate-smart practices. These partnerships
            create lasting impact across the agricultural value chain.
          </p>
        </div>
      </section>

      {/* ===== Who We Work With ===== */}
      <h2 className="secion-title">Who We Work With</h2>
      <div className="timeline">
        {/* Farmer Collectives */}
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Farmer Collectives</h3>
            <p>
              AgriFabriX empowers Farmer collectives (FPOs, PACS & SHG
              Federations) with affordable quality inputs, direct market
              access, financial services, and blockchain-enabled supply chain
              tracking. Sustainability initiatives like carbon trading and ESG
              opportunities help small farmers scale and thrive in a
              digital-first ecosystem.
            </p>
            <button
              className="cta-button"
              onClick={() => navigate("/OnboardingForm")}
            >
              Link to onboard
            </button>
          </div>
          <div className="timeline-image">
            <img src={fpo} alt="FPO" className="partner-image" />
          </div>
        </div>

        {/* Financial Institutions */}
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Financial Institutions</h3>
            <p>
              Access to finance is a key challenge in agriculture. AgriFabriX
              partners with banks, NBFCs, and fintech providers to offer:
              AI-driven credit risk assessments, blockchain-secured loan
              tracking, BNPL and digital invoice financing,
              sustainability-linked loans, and access to a large network of
              verified agri-businesses.
            </p>
            <button
              className="cta-button"
              onClick={() => navigate("/OnboardingForm")}
            >
              Link to onboard
            </button>
          </div>
          <div className="timeline-image">
            <img src={fin} alt="Finance" className="partner-image" />
          </div>
        </div>

        {/* AgriTech Innovators */}
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>AgriTech Innovators</h3>
            <p>
              AgriFabriX drives Agricultural innovation by partnering with
              AgriTech startups and research institutions. Key focus areas
              include AI-driven yield prediction, IoT-enabled farm monitoring,
              blockchain-based traceability, and robotics for automation.
            </p>
            <button
              className="cta-button"
              onClick={() => navigate("/OnboardingForm")}
            >
              Link to onboard
            </button>
          </div>
          <div className="timeline-image">
            <img src={Ag} alt="AgriTech" className="partner-image" />
          </div>
        </div>
      </div>
       {/* ===== Design 1: Slider ===== */}
      <section className="partners-logos">
        <h2 className="partners-title">Our Collaborative Network</h2>
        <p className="partners-subtitle">We are proud to collaborate with leading organizations that share our vision for innovation, growth, and sustainability.</p>
        <div className="partners-slider">
          <div className="partners-track">
            {logos.map((logo, idx) => (
              <a
                key={idx}
                href={partnerLinks[idx]}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-logo"
              >
                <img src={logo} alt={`logo-${idx}`} />
              </a>
            ))}
            {/* duplicate for infinite scroll */}
            {logos.map((logo, idx) => (
              <a
                key={`dup-${idx}`}
                href={partnerLinks[idx]}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-logo"
              >
                <img src={logo} alt={`logo-dup-${idx}`} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Why Partner ===== */}
      <section className="policy-box">
        <div className="policy-content">
          <h2>Why Partner with AgriFabriX?</h2>
          <ul className="policy-list">
            <li><strong>Expansive Network:</strong> Thousands of FPOs & PACS.</li>
            <li><strong>Financial Innovation:</strong> Co-develop products for rural India.</li>
            <li><strong>Blockchain Traceability:</strong> Supply chain & market linkage.</li>
            <li><strong>Market Expansion:</strong> Carbon credits & sustainability.</li>
            <li><strong>Impact-Driven Innovation:</strong> Long-term scalable change.</li>
          </ul>
        </div>
      </section>

      {/* ===== Business Enquiries ===== */}
      <section className="sec">
        <h2>Business Enquiries and Partnerships</h2>
        <p>
          AgriFabriX is actively expanding its network of Farmers,
          agribusinesses, FPOs, Financial institutions, and AgriTech Innovators.
        </p>
        <ul>
          <li>Become a supplier on our B2B Marketplace</li>
          <li>Partnering for Financial Inclusion initiatives</li>
          <li>Integrating Digital Solutions into Agriculture</li>
          <li>Collaborating on Carbon Credit projects</li>
        </ul>
        <p>
          For partnership enquiries, write to us at:
          <a href="mailto:partnerships@agrifabrix.com"> partnerships@agrifabrix.com</a>
        </p>
      </section>

      {/* ===== Government & Policy ===== */}
      <section className="policy-box">
        <div className="policy-content">
          <h2>Government and Policy Collaborations</h2>
          <ul className="policy-list">
            <li><strong>Policy Advocacy:</strong> Driving digital and financial inclusion in agriculture.</li>
            <li><strong>Climate-Resilient Farming:</strong> Supporting sustainable farming models.</li>
            <li><strong>Digital Literacy Programs:</strong> Expanding rural outreach.</li>
            <li><strong>Blockchain & AI:</strong> Enhancing transparency and efficiency.</li>
            <li><strong>Research Collaborations:</strong> Innovating for sustainability.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Partners;
