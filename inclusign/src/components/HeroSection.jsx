import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Building AI Tools for inclusive communication</h1>
        <p>
          Inclusign's real-time sign language translator is revolutionizing
          accessibility for the deaf and hard-of-hearing communities.
        </p>
        <div className="hero-cta">
          {/* <button className="btn btn-black">Learn More</button> */}
          <button className="btn btn-black">Talk To Us</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
