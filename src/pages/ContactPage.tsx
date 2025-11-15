import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import "./ContactPage.css";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented later
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <header className="contact-header">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
          <h1>Contact Us</h1>
          <p className="subtitle">
            We'd love to hear from you. Reach out with any questions or
            thoughts.
          </p>
        </header>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-section">
              <h2>Get in Touch</h2>
              <p>
                BARRAḠA is being shaped step by step, and we welcome your
                interest in our journey. Connect with us directly or follow
                along as we grow.
              </p>
            </div>

            <div className="info-section">
              <h3>Email</h3>
              <a href="mailto:hello@barraga.com">hello@barraga.com</a>
            </div>

            <div className="info-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a
                  href="https://www.instagram.com/thebarraga"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://www.x.com/thebarraga"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X (Twitter)
                </a>
                <a
                  href="https://www.linkedin.com/company/barraga"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.facebook.com/share/16hKgLnEnw/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a
                  href="https://www.pinterest.com/thebarraga"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pinterest
                </a>
                <a
                  href="https://www.youtube.com/@TheBarraga"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        <footer className="contact-footer">
          <nav className="footer-nav">
            <Link to="/about">About Us</Link>
            <Link to="/vision">Our Vision</Link>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default ContactPage;
