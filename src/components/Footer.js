import React, { useState } from "react";
import "../styles/Footer.css";
import logo from "../images/l.png";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://admin.agrifabrix.in/api/static/Subscribe", {
        // Use "http://localhost:5000/api/subscribe" if using /api prefix
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "Thanks for subscribing!");
        setEmail("");
      } else {
        alert(data.error || "Subscription failed.");
      }
    } catch (error) {
      alert("Subscription failed, please try again.");
      console.error("Error subscribing:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-section">
          <img src={logo} alt="AgriFabriX Logo" className="footer-logo" />
          <div className="footer-social-icons">
            <div className="social-icons">
              <a href="https://in.linkedin.com/company/agrifabrix" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X"><FaXTwitter /></a>
              <a href="https://www.facebook.com/profile.php?id=61575820740960" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
              <a href="https://wa.me/7075483505" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>

          <p className="company-desc">
  T-Hub,Phase 2, Plot No 1/C, Sy No 83/1, Raidurgam,<br />
  Knowledge City Rd, Panmaktha, Serilingampalle, Hyderabad, Telangana 500081.
</p>

        </div>

        <div className="footer-sections">
          <div className="footer-nav">
            <h2>Company</h2>
            <ul>
              <li><a href="/About">About</a></li>
              <li><a href="/About">Leadership Team</a></li>
              <li><a href="/partners">Partners</a></li>
            </ul>
          </div>

          <div className="footer-nav">
            <h2>Solutions</h2>
            <ul>
            <li><a href="https://store.agrifabrix.in/" target="_blank" rel="noopener noreferrer">Digital Marketplace</a></li>  
              <li><a href="/CreditFabriX">Financial Services</a></li>
              <li><a href="/Sustainability">Sustainability & Carbon Credits</a></li>
              <li><a href="/Solutions">AI & Blockchain in Agriculture</a></li>
            </ul>
          </div>

          <div className="footer-nav">
            <h2>Support & Resources</h2>
            <ul>
              <li><a href="/Contact">Help Center</a></li>
              <li><a href="/Contact">Customer Support & Live Chat</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/PrivacyPolicy">Privacy Policy</a></li>
              <li><a href="/CancellationPolicy">Cancellation and Refund Policy</a></li>
              <li><a href="/TermsAndConditions">Terms & Conditions</a></li>
              <li><a href="/ShippingPolicy">Shipping & Delivery</a></li>
            </ul>
          </div>

          <div className="footer-subscribe">
            <h2>Newsletter</h2>
            <p>Stay updated with the latest in Agri-tech innovations and market insights.</p>
            <form className="subscribe-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" disabled={loading}>
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 AgriFabriX. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
