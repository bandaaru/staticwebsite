import React from 'react';
import '../styles/Technology.css';
import { FaRobot, FaDatabase, FaGlobe, FaLeaf, FaLock, FaChartLine } from 'react-icons/fa';
import techBg from '../images/Technology.jpg'; // Add a relevant background image

const Technology = () => {
    return (
        <div className="technology">
        {/* Hero Section */}
        <div className="Tech-section">
            <div className="Tech-row">
                <img src={techBg} alt="Tech Background" className="Tech-bg" />
                <div className="Tech-content">
                    <h2>Technology (AI & Blockchain-Powered AgTech)</h2>
                    <p>We believe in technology... but more than that we believe in farmer's centric technology ! We know how to make technology work for the welfare of the farmer's</p>
                </div>
            </div>
            </div>

            {/* AI & ML Section */}
            <div className="tech-section">
                <h2>Artificial Intelligence & Machine Learning</h2>
                <p>AI is transforming Agriculture with precision farming, predictive analytics, and smart automation.</p>
                <div className="grid">
                    <div className="card">
                        <FaRobot className="tech-icon" />
                        <h4>Yield Prediction</h4>
                        <p>AI-driven models analyze soil health and weather patterns to forecast yields accurately.</p>
                    </div>
                    <div className="card">
                        <FaChartLine className="tech-icon" />
                        <h4>Market Insights</h4>
                        <p>Machine learning tracks real-time market data to aid in informed sales decisions.</p>
                    </div>
                    <div className="card">
                        <FaLeaf className="tech-icon" />
                        <h4>Pest Detection</h4>
                        <p>AI-powered image recognition detects crop diseases early, preventing losses.</p>
                    </div>
                </div>
            </div>

            {/* Blockchain Section */}
            <div className="tech-section alt-bg">
                <h2>Blockchain for Transparency & Security</h2>
                <p>Ensuring end-to-end traceability and secure financial transactions in agriculture.</p>
                <div className="grid">
                    <div className="card">
                        <FaDatabase className="tech-icon" />
                        <h4>Smart Contracts</h4>
                        <p>Blockchain-powered agreements ensure secure and automated transactions.</p>
                    </div>
                    <div className="card">
                        <FaLock className="tech-icon" />
                        <h4>Fraud Prevention</h4>
                        <p>Ensures that only genuine seeds and fertilizers reach farmers.</p>
                    </div>
                    <div className="card">
                        <FaGlobe className="tech-icon" />
                        <h4>Carbon Credit Verification</h4>
                        <p>Blockchain helps monitor and trade carbon credits for sustainable farming.</p>
                    </div>
                </div>
            </div>

            {/* Digital Twin Section */}
            <div className="tech-section">
                <h2>Digital Twin Models for Precision Farming</h2>
                <p>Simulating farm environments for predictive analysis and real-time monitoring.</p>
                <div className="grid">
                    <div className="card">
                        <FaGlobe className="tech-icon" />
                        <h4>Climate Resilience</h4>
                        <p>Predicts how climate changes will impact crop yields and soil health.</p>
                    </div>
                    <div className="card">
                        <FaLeaf className="tech-icon" />
                        <h4>Water Management</h4>
                        <p>AI-powered models optimize irrigation schedules for better resource usage.</p>
                    </div>
                    <div className="card">
                        <FaDatabase className="tech-icon" />
                        <h4>Supply Chain Optimization</h4>
                        <p>Identifies logistics bottlenecks, reducing post-harvest losses.</p>
                    </div>
                </div>
            </div>

            {/* Why AgriFabriX? */}
            <div className="why-agri">
                <h2>Why AgriFabriX's Technology is a Game Changer</h2>
                <div className="benefits">
                    <div className="benefit"><FaChartLine className="tech-icon" /> <p>Increase Productivity</p></div>
                    <div className="benefit"><FaLock className="tech-icon" /> <p>Secure Financial Transactions</p></div>
                    <div className="benefit"><FaGlobe className="tech-icon" /> <p>Market Access & Traceability</p></div>
                    <div className="benefit"><FaLeaf className="tech-icon" /> <p>Sustainable Farming</p></div>
                    <div className="benefit"><FaDatabase className="tech-icon" /> <p>Risk Reduction</p></div>
                </div>
            </div>
        </div>
    );
};

export default Technology;
