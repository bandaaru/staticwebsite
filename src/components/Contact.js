import React, { useState } from "react";
import "../styles/Contact.css";
import capital from "../images/thub.jpg";
import { FaXTwitter, FaFacebookF, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://admin.agrifabrix.in/api/static/Contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Your contact details have been submitted!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert(data.error || "Submission failed.");
        console.error("Server Error:", data);
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
      console.error("Fetch Error:", err);
    }
  };

  return (
    <div className="container">
      <section className="help">
        <h2>Your Growth is Our Priority – Let’s Build the Future of Agriculture Together</h2>
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:support@agrifabrix.com">support@agrifabrix.com</a></p>
        <p>Phone: +91-7075483505</p>
        <p>Our support team is available Monday to Saturday from 9:00 AM to 6:00 PM IST.</p>
      </section>

      <div className="contact-row">
        <section className="contact-form-container">
          <div className="contact-form">
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <label>Enter Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Please enter your name..."
                required
                value={formData.name}
                onChange={handleChange}
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Please enter your email..."
                required
                value={formData.email}
                onChange={handleChange}
              />

              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Please enter your phone number..."
                required
                value={formData.phone}
                onChange={handleChange}
              />

              <label>What do you have in mind?</label>
              <textarea
                name="message"
                placeholder="Please enter your query..."
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </section>

        <section className="contact-details-container">
          <h2>Reach us at</h2>
          <p>T-Hub,Phase 2, Plot No 1/C, Sy No 83/1, Raidurgam,
Knowledge City Rd, Panmaktha, Serilingampalle, Hyderabad, Telangana 500081.</p>
          <div className="map-container">
            <a href="https://maps.app.goo.gl/UrnjYHPiZbgrmA7M9" target="_blank" rel="noopener noreferrer">
              <img src={capital} alt="Capital Park, Madhapur" className="im" />
            </a>
          </div>

          <div className="contact-social-icons">
            <a href="https://x.com/YOUR_TWITTER" target="_blank" rel="noopener noreferrer" aria-label="X">
              <FaXTwitter className="icon" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61575820740960" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="icon" />
            </a>
            <a href="https://in.linkedin.com/company/agrifabrix" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://instagram.com/YOUR_INSTAGRAM" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="icon" />
            </a>
            <a href="https://wa.me/7075483505" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp className="icon" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
