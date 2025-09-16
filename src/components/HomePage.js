import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaSeedling, FaShoppingCart, FaHandshake, FaTruck } from "react-icons/fa";
import "../styles/HomePage.css";
import cropimage from "../images/HomeSol.jpg";
import mission from "../images/Vision.jpg";
import cropimage2 from "../images/HomeTech.jpg"; // New image for second slide

// const HomePage = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   const slides = [
//     {
//       title: "Empowering Agriculture with Smart Data & Sustainable Solutions",
//       description: "Connecting Farmers, FPOs, and Agri Enterprises through AI, Blockchain, and Financial Inclusion",
//       image: cropimage,
//       link: "Solutions"
//     },
//     {
//       title: "Revolutionizing Agriculture Through Cutting-Edge Technology",
//       description: "Empowering Smart Farming Through AI, IoT, and Blockchain Innovation.",
//       image: cropimage2, // Updated to use the new image
//       link: "Technology"
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 8000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="homepage">
//       {/* Hero Section Carousel */}
//       <section className="hero-carousel" id="home">
//         {/* <button className="arrow left" onClick={prevSlide}> */}
//           {/* <IoIosArrowBack /> */}
//         {/* </button> */}
//         <div className="hero-slide" key={currentSlide}>
//           <div className="hero-text">
//             <h1>{slides[currentSlide].title}</h1>
//             <p>{slides[currentSlide].description}</p>
//             <div className="buttons">
//               <a href={slides[currentSlide].link} className="learn-more">
//                 Learn More
//               </a>
//             </div>
//           </div>
//           <div className="hero-image">
//             <img src={slides[currentSlide].image} alt="crop" />
//           </div>
//         </div>
//         {/* <button className="arrow right" onClick={nextSlide}> */}
//           {/* <IoIosArrowForward /> */}
//         {/* </button> */}
//       </section>
const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Empowering Agriculture with Smart Data & Sustainable Solutions",
      description:
        "Connecting Farmers, FPOs, and Agri Enterprises through AI, Blockchain, and Financial Inclusion",
      image: cropimage,
      link: "Solutions",
    },
    {
      title: "Revolutionizing Agriculture Through Cutting-Edge Technology",
      description:
        "Empowering Smart Farming Through AI, IoT, and Blockchain Innovation.",
      image: cropimage2,
      link: "Technology",
    },
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="homepage">
      <section className="hero-carousel" id="home">
        <button className="arrow left" onClick={prevSlide}>
          <IoIosArrowBack />
        </button>

        <div className="hero-slide" key={currentSlide}>
          <div className="hero-text">
            <h1>{slides[currentSlide].title}</h1>
            <p>{slides[currentSlide].description}</p>
            <div className="buttons">
              <a href={slides[currentSlide].link} className="learn-more">
                Learn More
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={slides[currentSlide].image} alt="crop" />
          </div>
        </div>

        <button className="arrow right" onClick={nextSlide}>
          <IoIosArrowForward />
        </button>
      </section>
      {/* Vision & Mission Section */}
      <section className="vision-mission">
        <div className="vision-mission-content">
          <h2>Our Vision</h2>
          <p>
            To Build an Agricultural Ecosystem that is productive, sustainable, and
            farmer-friendly, ensuring prosperity for all stakeholders involved.
          </p>

          <h2>Our Mission</h2>
          <p>
            To simplify Agriculture by providing easy access to all essential products
            and services, empowering farmers, and transforming lives.
          </p>
        </div>
        <div className="vision-mission-image">
          <img src={mission} alt="Agriculture" />
        </div>
      </section>
       {/* Highlights Section */}
       <section className="highlights">
        <div className="highlight ai">
          <div className="highlight-overlay">
            <h3>AI-Powered Insights</h3>
            <p>Optimizing supply chain with real-time data.</p>
          </div>
        </div>

        <div className="highlight finance">
          <div className="highlight-overlay">
            <h3>Financial Access</h3>
            <p>BNPL, invoice financing, and agrifabrix loans.</p>
          </div>
        </div>

        <div className="highlight blockchain">
          <div className="highlight-overlay">
            <h3>Blockchain Traceability</h3>
            <p>Ensuring transparency and fraud prevention.</p>
          </div>
        </div>

      </section>
       {/* Solutions Section */}
       <section className="services" id="solutions">
        {/* <h1>What can we do</h1> */}
        <h2>Our Offerings</h2>
        
        <div className="solutions-layout">
          {/* Empty Space */}
          <div className="empty-space"></div>

          {/* Service Cards Grid */}
          <div className="service-grid">
            <div className="service-card">
              <h3><FaSeedling className="service-icon" /> Quality Inputs</h3>
              <p>Seeds, Fertilizers, Pesticides & Machinery to boost productivity</p>
            </div>

            <div className="service-card">
              <h3><FaShoppingCart className="service-icon" /> Easy Ordering</h3>
              <p>Simple and Fast platform for all your Agricultural needs</p>
            </div>

            <div className="service-card">
              <h3><FaHandshake className="service-icon" /> Reliable Consultancy</h3>
              <p>Expert guidance for sustainable & profitable farming</p>
            </div>

            <div className="service-card">
              <h3><FaTruck className="service-icon" /> Efficient Supply Chain</h3>
              <p>Timely and reliable delivery anywhere, anytime</p>
            </div>
          </div>
        </div>
      </section>

            {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
