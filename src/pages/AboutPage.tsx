import React from "react";
import { Link } from "react-router-dom";
import "./AboutPage.css";

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <header className="about-header">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
          <h1>About BARRAḠA</h1>
        </header>

        <section className="about-content">
          <div className="about-section main-description">
            <p className="opening">BARRAḠA is in creation.</p>
            <p>
              Built slowly by family, shaped by intention, and guided by an
              evolving sense of quiet luxury.
            </p>
            <p>
              Born in India and shaped for a global world, we grow step by step,
              without rush or noise, only deliberate craft and thoughtful
              design.
            </p>
            <p className="signature">
              This is not a legacy yet. It is a vision being shaped carefully,
              honestly, and in our own rhythm.
            </p>
          </div>

          <div className="about-section social-section">
            <p className="website">🌐 barraga.com</p>
          </div>
        </section>

        <footer className="about-footer">
          <nav className="footer-nav">
            <Link to="/vision">Our Vision</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
