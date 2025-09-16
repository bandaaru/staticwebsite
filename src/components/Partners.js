import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Partner.css";
import Ag from '../images/AgriTech.jpg';
import fpo from '../images/FPO.jpeg'; 
import fin from '../images/Bank.jpg'; 

const Partners = () => {
  const navigate = useNavigate();

  return (
    <div className="contain">
      <div className="header-container">
        <h1>Partners & Collaborations</h1>
        <p>Bringing AgriTech, Finance, and Farmers,  Farmer Collectives, Agri-Entrepreneur CloserThanEver</p>
      </div>

      {/* Hero Section */}
<section className="her-content">
  <div className="her-text">
    <p>
    AgriFabriX fosters transformation in Agriculture through strategic collaboration. By partnering with farmer groups, financial institutions, and AgriTech innovators, it builds a connected ecosystem. Key focus areas include: expanding access to finance, enabling digital tools for productivity, connecting farmers to premium markets, and promoting sustainable, climate-smart practices. These partnerships create lasting impact across the agricultural value chain.
    </p>
    {/* <button className="cta-button">Join Us</button> */}
  </div>
</section>


      <h2 className="secion-title">Who We Work With</h2>

      {/* Partner Sections */}
      <div class="timeline">
  <div class="timeline-item">
    <div class="timeline-content">
      <h3>Farmer Collectives</h3>
      <p>
      AgriFabriX empowers Farmer collectives (FPOs, PACS  & SHG Federations) with affordable quality inputs, direct market access, financial services, and blockchain-enabled supply chain tracking. Sustainability initiatives like carbon trading and ESG opportunities help small farmers scale and thrive in a digital-first ecosystem.
      </p>
      <button className="cta-button" onClick={() => navigate("/OnboardingForm")}>Link to onboard</button>
    </div>
    <div class="timeline-image">
    <img src={fpo} alt="FPO" className="partner-image" />
    </div>
  </div>

  <div class="timeline-item">
    <div class="timeline-content">
      <h3>Financial Institutions</h3>
      <p>
      Access to finance is a key challenge in agriculture. AgriFabriX partners with banks, NBFCs, and fintech providers to offer: AI-driven credit risk assessments, blockchain-secured loan tracking, BNPL and digital invoice financing, sustainability-linked loans, and access to a large network of verified agri-businesses. This helps financial institutions expand lending while supporting sustainable farm growth.
      </p>
      <button className="cta-button" onClick={() => navigate("/OnboardingForm")}>Link to onboard</button>
    </div>
    <div class="timeline-image">
    <img src={fin} alt="Finance" className="partner-image" />
    </div>
  </div>

   <div class="timeline-item">
    <div class="timeline-content">
      <h3>AgriTech Innovators</h3>
      <p>AgriFabriX drives Agricultural innovation by partnering with AgriTech startups and research institutions. Key focus areas include AI-driven yield prediction and disease detection, IoT-enabled farm monitoring, blockchain-based traceability, digital twin models for precision farming, and robotics for automation. These advancements enhance efficiency, sustainability, and profitability in agriculture.
      </p>
      <button className="cta-button" onClick={() => navigate("/OnboardingForm")}>Link to onboard</button>
    </div>
    <div class="timeline-image">
    <img src={Ag} alt="AgriTech" className="partner-image" />
    </div>
  </div>
</div>

      {/* <section className="partner-section">
        <div className="partner-box">
          <img src={fpo} alt="FPO" className="partner-image" />
          <div className="partner-content">
            <h3>Farmer Producer Organizations (FPOs) & PACS</h3>
            <p>AgriFabriX empowers farmer collectives with affordable inputs, direct market access, financial services, and blockchain-enabled supply chain tracking. Sustainability initiatives like carbon trading and ESG opportunities help small farmers scale and thrive in a digital-first ecosystem.</p>
            <button className="cta-button" onClick={() => navigate("/OnboardingForm")}>Link to onboard</button>
          </div>
        </div>
      </section>

      <section className="partner-section">
        <div className="partner-box">
          <img src={fin} alt="Finance" className="partner-image" />
          <div className="partner-content">
            <h3>Financial Institutions</h3>
            <p>Access to finance is a key challenge in agriculture. AgriFabriX partners with banks, NBFCs, and fintech providers to offer: AI-driven credit risk assessments, blockchain-secured loan tracking, BNPL and digital invoice financing, sustainability-linked loans, and access to a large network of verified agri-businesses. This helps financial institutions expand lending while supporting sustainable farm growth.</p>
            <button className="cta-button" onClick={() => navigate("/OnboardingForm")}>Link to onboard</button>
          </div>
        </div>
      </section>

      <section className="partner-section">
        <div className="partner-box">
          <img src={Ag} alt="AgriTech" className="partner-image" />
          <div className="partner-content">
            <h3>AgriTech Innovators</h3>
            <p>AgriFabriX drives agricultural iGovernment and Policy Collaborationsnovation by partnering with AgriTech startups and research institutions. Key focus areas include AI-driven yield prediction and disease detection, IoT-enabled farm monitoring, blockchain-based traceability, digital twin models for precision farming, and robotics for automation. These advancements enhance efficiency, sustainability, and profitability in agriculture.</p>
            <button className="cta-button" onClick={() => navigate("/OnboardingForm")}>Link to onboard</button>
          </div>
        </div>
      </section> */}

      <section className="policy-box">
  <div className="policy-content">
    <h2>Government and Policy Collaborations</h2>

    <ul className="policy-list">
  <li><strong>Policy Advocacy:</strong>Driving digital and financial inclusion in agriculture.</li>
  <li><strong>Climate-Resilient Farming:</strong>Supporting large-scale implementation of sustainable farming models.</li>
  <li><strong>Digital Literacy Programs:</strong>Expanding rural outreach for better adoption of technology.</li>
  <li><strong>Blockchain & AI:</strong>Enhancing transparency and efficiency in agricultural trade.</li>
  <li><strong>Research Collaborations:</strong>Innovating for Sustainability and long-term agricultural growth.</li>
</ul>


    <p>
      By working closely with National and State-Level agricultural departments, AgriFabriX contributes to scalable, impact-driven policies that benefit millions of farmers.
    </p>
  </div>
</section>
<section className="policy-box">
      <div className="policy-content">
        <h2>Why Partner with AgriFabriX?</h2>

        <ul className="policy-list">
          <li>
            <strong>Expansive Network:</strong> Access India’s largest digital agricultural network, including thousands of FPOs and PACS.
          </li>
          <li>
            <strong>Financial Innovation:</strong> Co-develop financial products and digital solutions tailored for rural India.
          </li>
          <li>
            <strong>Blockchain Traceability:</strong> Seamless integration into a blockchain-powered supply chain and market linkage system.
          </li>
          <li>
            <strong>Market Expansion:</strong> Enter new domains like carbon credit trading and sustainable agribusiness.
          </li>
          <li>
            <strong>Impact-Driven Innovation:</strong> Be part of a fast-growing AgriTech platform focused on scalable, long-term change.
          </li>
        </ul>

        <p>
          AgriFabriX’s partnerships are transformational—helping farmers gain financial security, businesses thrive in transparent ecosystems, and agriculture grow into a sustainable, high-value sector.
        </p>
      </div>
    </section>
    <section className="sec">
        <h2>Business Enquiries and Partnerships</h2>
        <p>
          AgriFabriX is actively expanding its network of Farmers, agribusinesses,
          FPOs, Financial institutions, and AgriTech Innovators.
        </p>
        <ul>
          <li>Become a supplier on our B2B Marketplace</li>
          <li>Partnering for Financial Inclusion initiatives</li>
          <li>Integrating Digital Solutions into Agricultural Operations</li>
          <li>Collaborating on Sustainability and Carbon Credit projects</li>
        </ul>
        <p>
          Our business development team is ready to explore opportunities that
          create mutual value and long-term impact.
        </p>
        <p>
          For partnership enquiries, write to us at:
          <a href="mailto:partnerships@agrifabrix.com"> partnerships@agrifabrix.com</a>
        </p>
      </section>
     
    </div>
  );
};

export default Partners;
