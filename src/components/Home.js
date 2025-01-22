import React from "react";
import '../Styles/Hero.css'
import Oracle from '../Images/Oracle.png'
import samsung from '../Images/samsung.png'
import Monday from '../Images/Monday.png'
import Morphous from '../Images/Morphous.png'
import twilio from '../Images/twilio.png'

const Home = () => {
  return (
    <>
    <div>
      {/* Hero Section */}
      <section className="hero-services">
        <div className="hero-content">
          <h1>Your trusted partner for compliance business needs</h1>
          <p>
            An online business compliance platform that helps entrepreneurs and
            individuals with registrations, tax filings, and other legal matters.
          </p>
          <div className="stats">
            <span>4.5+ Customer Rating</span>
            <span>20,000+ Clients</span>
            <span>99.8% Financial Stability</span>
          </div>
          <button className="btn-secondary">Talk To An Expert</button>
        </div>

        {/* Right-Side Section */}
        <div className="right-side">
          <div className="service-cards-overlay">
            <div className="service-cards">
              <div className="service-card">Annual Compliance</div>
              <div className="service-card">Payroll Services</div>
              <div className="service-card">Company Formation</div>
              <div className="service-card">Tax Filing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <h3>Trusted By Over 100+ Startups and Freelance Businesses</h3>
        <div className="brands">
          <img src={Oracle} alt="Oracle Logo" />
          <img src={Morphous} alt="Morpheus Logo" />
          <img src={samsung} alt="Samsung Logo" />
          <img src={Monday} alt="Monday.com Logo" />
          <img src={twilio} alt="Segment Logo" />
        </div>
      </footer>
    </div>
    </>
  );
};

export default Home;
