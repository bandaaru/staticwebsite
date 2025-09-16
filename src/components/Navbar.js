import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../images/l.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleParentClick = (dropdownName, path) => {
    navigate(path);
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="AgriFabriX Logo" className="logo-image" />
        </Link>
      </div>

      <div className="mobile-menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>

          <li className={`dropdown ${openDropdown === "solutions" ? "open" : ""}`}>
            <div
              className="dropbtn"
              onClick={() => {
                if (window.innerWidth <= 768) {
                  // navigate and then close mobile menu
                  navigate("/Solutions");
                  toggleMenu();
                } else {
                  handleParentClick("solutions", "/Solutions");
                }
              }}
            >
              Solutions
              <span
                className="arrow-css"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown("solutions");
                }}
              ></span>
            </div>
            <div className={`dropdown-content ${openDropdown === "solutions" ? "open" : ""}`}>
              <Link to="/InputFabriX" onClick={toggleMenu}>InputFabriX</Link>
              <Link to="/CreditFabriX" onClick={toggleMenu}>CreditFabriX</Link>
              <Link to="/TraceFabriX" onClick={toggleMenu}>TraceFabriX</Link>
              <Link to="/SupplyFabriX" onClick={toggleMenu}>SupplyFabriX</Link>
              <Link to="/TradeFabriX" onClick={toggleMenu}>TradeFabriX</Link>
            </div>
          </li>

          <li className={`dropdown ${openDropdown === "partners" ? "open" : ""}`}>
            <div
              className="dropbtn"
              onClick={() => {
                if (window.innerWidth <= 768) {
                  navigate("/Partners");
                  toggleMenu();
                } else {
                  handleParentClick("partners", "/Partners");
                }
              }}
            >
              Partners
              <span
                className="arrow-css"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown("partners");
                }}
              ></span>
            </div>
            <div className={`dropdown-content ${openDropdown === "partners" ? "open" : ""}`}>
              <Link to="/OnboardingForm" onClick={toggleMenu}>Onboarding Form</Link>
            </div>
          </li>

          <li><Link to="/Technology" onClick={toggleMenu}>Technology</Link></li>
          <li><Link to="/Sustainability" onClick={toggleMenu}>Sustainability</Link></li>
          <li>
            <a
              href="https://store.agrifabrix.in/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              Marketplace
            </a>
          </li>
          <li><Link to="/Contact" onClick={toggleMenu}>Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
