import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/InputFabriX.css";
import inputImage from "../images/InputFabrix.jpg";

const offerings = [
  { title: "Organic & Non-GMO Seeds", body: "Supply of certified organic seeds ensuring biodiversity and healthier crop production." },
  { title: "Bio-fertilizers & Microbial Solutions", body: "Eco-friendly alternatives to chemical fertilizers, promoting sustainable soil enrichment." },
  { title: "Smart Irrigation Tools", body: "Advanced systems for optimizing water usage, improving irrigation efficiency and conserving resources." },
  { title: "Eco-friendly Pest Management", body: "Biological pest control solutions minimizing environmental impact and maximizing crop protection." },
  { title: "Digital Advisory Services", body: "AI-driven recommendations for precision input application, improving yield outcomes." },
];

const benefits = [
  { title: "Increases Yield Sustainably", body: "Boosts productivity while minimizing dependency on chemical inputs, ensuring long-term soil health." },
  { title: "Affordable, Quality Inputs", body: "Ensures farmers and FPOs get easy access to high-quality resources at competitive prices." },
  { title: "Supports Regenerative Agriculture", body: "Encourages practices that restore soil health, biodiversity, and resilience over time." },
];

const InputFabriX = () => (
  <section className="inputfabrx-section">
    <div className="inputfabrx-container">
      {/* HERO SECTION */}
      <div className="inputfabrx-hero">
        <img src={inputImage} alt="InputFabriX Marketplace" className="inputfabrx-img" />
        <div className="inputfabrx-content">
          <h2><strong>InputFabriX</strong></h2>
          <h3>Sustainable Agricultural Inputs</h3>
          <p>
            A one-stop B2B marketplace connecting Farmers, FPOs, and Agri-Enterprises with verified suppliers
            of sustainable, Climate-smart Agricultural inputs.
          </p>
        </div>
      </div>

      {/* KEY OFFERINGS */}
      <div className="inputfabrx-section-content leaf-decor">
        <div className="inputfabrx-label">
          <h3>Key Offerings</h3>
        </div>
        <div className="inputfabrx-card-grid">
          {offerings.map((item, idx) => (
            <div className="inputfabrx-card" key={idx}>
              <div className="inputfabrx-title-item">{item.title}</div>
              <div className="inputfabrx-body-item">{item.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT HELPS */}
      <div className="inputfabrx-section-content leaf-decor">
        <div className="inputfabrx-label">
          <h3>How It Helps</h3>
        </div>
        <div className="inputfabrx-card-grid">
          {benefits.map((item, idx) => (
            <div className="inputfabrx-card" key={idx}>
              <div className="inputfabrx-title-item">{item.title}</div>
              <div className="inputfabrx-body-item">{item.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA BUTTON */}
      <div className="inputfabrx-button-container">
        <Link to="/OnboardingForm">
          <button className="inputfabrx-button">Browse Inputs Now</button>
        </Link>
      </div>
    </div>
  </section>
);

export default InputFabriX;
