import React from "react";
import { Link } from "react-router-dom";
import "../styles/Financial.css";
import financeHeroNew from "../images/creditfabrix.jpg";
import loan from "../images/loan.jpg";
import { FaMoneyCheckAlt, FaShoppingCart, FaFileInvoiceDollar } from "react-icons/fa";

const CreditFabriX = () => {
  return (
    <section className="creditfabrx-section">
      <div className="creditfabrx-container">

        {/* HERO SECTION */}
        <div className="creditfabrx-hero leaf-decor">
          <img src={financeHeroNew} alt="CreditFabriX Hero" className="creditfabrx-img" />
          <div className="creditfabrx-content">
            <h2><strong>CreditFabriX</strong></h2>
            <h3>Empowering Financial Access</h3>
            <p>
              A Tech-enabled credit ecosystem designed for Farmers, FPOs, Agri-Enterprises,
              and MSMEs.
            </p>
          </div>
        </div>

        {/* INTRO SECTION */}
        <div className="creditfabrx-section-content leaf-decor">
          <div className="creditfabrx-label">
            <h3>Introduction</h3>
          </div>
          <p>
            The agricultural sector in India faces significant financial challenges—limited access
            to affordable credit, high dependence on informal lending, and inadequate working capital.
          </p>
          <p>
            CreditFabriX is transforming agricultural finance through innovative, technology-driven
            solutions tailored to farmers and agribusinesses, ensuring quick, affordable access to capital.
          </p>
        </div>

        {/* SOLUTIONS SECTION */}
        <div className="creditfabrx-section-content leaf-decor">
          <div className="creditfabrx-label">
            <h3>Credit Solutions Facilitated by CreditFabriX</h3>
          </div>
          <div className="creditfabrx-card-grid">
            <div className="creditfabrx-card">
              <div className="icon-wrapper"><FaMoneyCheckAlt /></div>
              <h4>Agri Loans</h4>
              <p className="subtitle">Quick Access and Competitive</p>
              <ul>
                <li>Quick approvals with minimal documentation</li>
                <li>Flexible repayment tied to cropping cycles</li>
                <li>Loans for inputs, irrigation, and post-harvest</li>
                <li>Credit scoring improves eligibility over time</li>
              </ul>
              <p><strong>Benefits:</strong> Competitive rates, stress-free funding, investment in quality inputs.</p>
            </div>

            <div className="creditfabrx-card">
              <div className="icon-wrapper"><FaShoppingCart /></div>
              <h4>Buy Now, Pay Later (BNPL)</h4>
              <p className="subtitle">Flexible Input Financing</p>
              <ul>
                <li>Instant credit on CreditFabriX marketplace</li>
                <li>Zero or competitive-interest short-term credit</li>
                <li>Crop cycle–aligned repayments</li>
                <li>Use for seeds, fertilizers, and equipment</li>
              </ul>
              <p><strong>Benefits:</strong> No upfront cost, bulk purchase advantage, less reliance on informal loans.</p>
            </div>

            <div className="creditfabrx-card">
              <div className="icon-wrapper"><FaFileInvoiceDollar /></div>
              <h4>Invoice Financing</h4>
              <p className="subtitle">Unlock Capital from Pending Payments</p>
              <ul>
                <li>Up to 80% invoice value as instant cash</li>
                <li>No collateral required</li>
                <li>Support for produce sales and trade</li>
                <li>Transparent digital tracking</li>
              </ul>
              <p><strong>Benefits:</strong> Steady cash flow, reinvestment ability, avoids loan dependency.</p>
            </div>
          </div>
        </div>

        {/* HOW TO APPLY SECTION */}
        <div className="creditfabrx-section-content leaf-decor">
          <div className="creditfabrx-label">
            <h3>How to Apply for Financing</h3>
          </div>
          <div className="apply-row">
            <div className="apply-image">
              <img src={loan} alt="How to Apply" />
            </div>
            <div className="apply-content">
              <ol>
                <li><strong>Register:</strong> Create your profile with farm or business details.</li>
                <li><strong>Submit Documents:</strong> Upload KYC, land ownership, or invoice documents.</li>
                <li><strong>Get Approval:</strong> Receive approval and get funds directly in your account.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE SECTION */}
        <div className="creditfabrx-section-content leaf-decor">
          <div className="creditfabrx-label">
            <h3>Why Choose CreditFabriX?</h3>
          </div>
          <div className="creditfabrx-card-grid">
            <div className="creditfabrx-card no-hover">
              <ul>
                <li>Fast digital credit approvals</li>
                <li>Competitive interest rates</li>
                <li>Customized repayment schedules</li>
                <li>Blockchain-verified secure transactions</li>
              </ul>
              <p className="highlight-text">
                CreditFabriX is committed to delivering accessible, affordable, and efficient credit to every agri stakeholder.
              </p>
              <Link to="/OnboardingForm">
                <button className="creditfabrx-button">Apply for Credit</button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CreditFabriX;
