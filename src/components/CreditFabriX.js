import React from "react";
import { Link } from "react-router-dom";
import "../styles/Financial.css";
import creditHero from "../images/credit.jpg"; // Single hero image
import loan from "../images/loan.jpg";
import { FaMoneyCheckAlt, FaShoppingCart, FaFileInvoiceDollar } from "react-icons/fa";

const CreditFabriX = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="finance-wrapper">
        <div className="finance-hero">
          <img
            src={creditHero}
            alt="CreditFabriX Background"
            className="finance-img"
          />
          <div className="finance-content">
            <h2><strong>CreditFabriX</strong></h2>
            <h3>Empowering Financial Access</h3>
            <p>
              A tech-enabled credit ecosystem designed for farmers, FPOs, and agri-enterprises and msme's
change the image in credit fabrix
            </p>
          </div>
        </div>
      </div>

      <div className="financial-container">
        {/* Intro Section */}
        <section className="section intro">
          <p>
            The agricultural sector in India faces significant financial challenges—
            limited access to affordable credit, high dependence on informal lending,
            and inadequate working capital. Smallholder farmers, Farmer Producer
            Organizations (FPOs), and Primary Agricultural Credit Societies (PACS)
            often struggle with lack of credit history, collateral, and complex loan
            approvals.
          </p>
          <p>
            AgriFabriX is transforming agricultural finance through innovative,
            technology-driven credit solutions tailored to farmers and agribusinesses.
            With data-driven credit assessment, seamless digital processes, and a trusted
            financial network, AgriFabriX ensures quick, affordable access to capital—
            driving productivity and growth.
          </p>
        </section>

        {/* Solutions Section */}
        <section className="solutions-section">
          <h2 className="section-title">
            Credit Solutions Facilitated by AgriFabriX
          </h2>
          <div className="cards-row">
            {/* Card 1 */}
            <div className="solution-card">
              <div className="icon-wrapper">
                <FaMoneyCheckAlt />
              </div>
              <h3>Agri Loans</h3>
              <p className="subtitle">Quick Access and Competitive</p>
              <ul>
                <li>Quick approvals with minimal documentation</li>
                <li>Flexible repayment tied to cropping cycles</li>
                <li>Loans for inputs, irrigation, and post-harvest</li>
                <li>Credit scoring improves eligibility over time</li>
              </ul>
              <p>
                <strong>Benefits:</strong> Competitive rates, stress-free funding,
                investment in quality inputs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="solution-card">
              <div className="icon-wrapper">
                <FaShoppingCart />
              </div>
              <h3>Buy Now, Pay Later (BNPL)</h3>
              <p className="subtitle">Flexible Input Financing</p>
              <ul>
                <li>Instant credit on AgriFabriX marketplace</li>
                <li>Zero or competitive-interest short-term credit</li>
                <li>Crop cycle–aligned repayments</li>
                <li>Use for seeds, fertilizers, and equipment</li>
              </ul>
              <p>
                <strong>Benefits:</strong> No upfront cost, bulk purchase advantage,
                less reliance on informal loans.
              </p>
            </div>

            {/* Card 3 */}
            <div className="solution-card">
              <div className="icon-wrapper">
                <FaFileInvoiceDollar />
              </div>
              <h3>Invoice Financing</h3>
              <p className="subtitle">Unlock Capital from Pending Payments</p>
              <ul>
                <li>Up to 80% invoice value as instant cash</li>
                <li>No collateral required</li>
                <li>Support for produce sales and trade</li>
                <li>Transparent digital tracking</li>
              </ul>
              <p>
                <strong>Benefits:</strong> Steady cash flow, reinvestment ability,
                avoids loan dependency.
              </p>
            </div>
          </div>
        </section>

        {/* How to Apply Section */}
        <section className="apply-section">
          <div className="apply-container">
            <div className="apply-image">
              <img src={loan} alt="How to Apply" />
            </div>
            <div className="apply-content">
              <h2>How to Apply for Financing on AgriFabriX</h2>
              <ol>
                <li>
                  <strong>Register:</strong> Create your profile with farm or business details.
                </li>
                <li>
                  <strong>Submit Documents:</strong> Upload KYC, land ownership, or invoice documents.
                </li>
                <li>
                  <strong>Get Approval:</strong> Receive approval and get funds directly in your account.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="why-section">
          <div className="why-container">
            <div className="why-list-container">
              <h2 className="section-title">Why Choose AgriFabriX?</h2>
              <ul className="why-list">
                <li>Fast digital credit approvals</li>
                <li>Competitive interest rates</li>
                <li>Customized repayment schedules</li>
                <li>Blockchain-verified secure transactions</li>
              </ul>
            </div>
            <div className="why-highlight-container">
              <p className="highlight-text">
                AgriFabriX is committed to delivering accessible, affordable, and efficient credit to every agri stakeholder.
              </p>
              <Link to="/OnboardingForm">
                <button className="apply-button">Apply for Credit</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CreditFabriX;
