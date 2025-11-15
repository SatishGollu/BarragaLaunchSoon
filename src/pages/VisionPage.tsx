import React from "react";
import { Link } from "react-router-dom";
import "./VisionPage.css";

const VisionPage: React.FC = () => {
  return (
    <div className="vision-page">
      <div className="vision-container">
        <header className="vision-header">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
          <h1>Our Vision</h1>
        </header>

        <section className="vision-content">
          <div className="vision-hero">
            <h2>Built Slowly, Shaped by Intention</h2>
            <p className="hero-text">
              BARRAḠA is in creation—a vision being shaped carefully, honestly,
              and in our own rhythm.
            </p>
          </div>

          <div className="vision-sections">
            <div className="vision-section">
              <div className="section-number">01</div>
              <h3>Quiet Luxury</h3>
              <p>
                We design with restraint, clarity, and purpose. Our approach to
                luxury is subtle, refined, and intentional—guided by an evolving
                sense of what feels timeless and lived-in.
              </p>
            </div>

            <div className="vision-section">
              <div className="section-number">02</div>
              <h3>Deliberate Craft</h3>
              <p>
                Every silhouette, palette, and detail is considered. We work
                without rush or noise, focusing only on thoughtful design and
                craftsmanship that honors balance and purpose.
              </p>
            </div>

            <div className="vision-section">
              <div className="section-number">03</div>
              <h3>Family & Intention</h3>
              <p>
                Built slowly by family, BARRAḠA grows step by step. We believe
                in creating with care, shaping each piece as part of a vision
                that evolves naturally over time.
              </p>
            </div>

            <div className="vision-section">
              <div className="section-number">04</div>
              <h3>Born in India, Shaped for the World</h3>
              <p>
                Rooted in Indian heritage yet designed for a global audience,
                BARRAḠA carries forward a sense of place while embracing
                timeless, universal design principles.
              </p>
            </div>
          </div>

          <div className="vision-cta">
            <h2>A Vision in Progress</h2>
            <p>
              BARRAḠA is not a legacy yet. It is something being shaped with
              care—honest, deliberate, and true to its own rhythm.
            </p>
            <div className="cta-buttons">
              <Link to="/about" className="cta-button">
                Learn More About Us
              </Link>
              <Link to="/contact" className="cta-button secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VisionPage;
