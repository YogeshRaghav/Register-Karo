import React from "react";
import '../Styles/OurServices.css'

const OurServices = () => {
  return (
    <>
      {/* Our Services Content */}
      <section className="our-services">
        <div className="container">
          <h1>Our Services</h1>
          <p>Explore our wide range of services to grow and streamline your business.</p>

          {/* Service Cards */}
          <div className="services-list"> {/* Updated class name */}
            <div className="card">
              <h3>Company Formation</h3>
              <p>Build web-based solutions that enhance customer experience.</p>
              <button>Learn More</button>
            </div>

            <div className="card">
              <h3>Company Secretarial Services</h3>
              <p>Make data-driven decisions to reach business goals.</p>
              <button>Learn More</button>
            </div>

            <div className="card">
              <h3>Virtual Office Address</h3>
              <p>Foster customer relationships by effectively serving your market.</p>
              <button>Learn More</button>
            </div>

            <div className="card">
              <h3>Annual Compliance Services</h3>
              <p>Turn your ideas into modern products with our design experts.</p>
              <button>Learn More</button>
            </div>

            <div className="card">
              <h3>Payroll Services</h3>
              <p>Expand your business across the globe with minimal effort.</p>
              <button>Learn More</button>
            </div>

            <div className="card">
              <h3>Bookkeeping Services</h3>
              <p>Steering user behavior with creative design, data insights & technology.</p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
