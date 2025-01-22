import React from "react";
import '../Styles/AboutUs.css'; // Import the CSS for styling
import Pic2 from '../Images/Pic2.jpg'
import WhyChooseUsAndVideoIntro from "./WhyChooseUsAndVideoIntro";

const About = () => {
  return (
    <>
    <section className="about-us">
      <div className="container">
        <div className="about-content">
          <div className="text-content">
            <h2>WELCOME TO REGISTERKARO.IN</h2>
            <h3>About Register Karo</h3>
            <p>
              We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years, and I’m extremely pleased with their performance, ability to execute, and willingness to adapt in our ever-changing environment. Perry is an outstanding leader who is fanatical about customer satisfaction. He has built a solid team that has consistently delivered on projects, exceeding everyone’s expectations.
            </p>
            <p>
              I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.
            </p>
            <button>Learn More</button>
          </div>
          <div className="image-content">
            <img src={Pic2} alt="RegisterKaro" />
          </div>
        </div>
      </div>
    </section>
    {
      <WhyChooseUsAndVideoIntro/>
    }
    </>
  );
};

export default About;
