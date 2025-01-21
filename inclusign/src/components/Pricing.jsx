import React from 'react';
import './Pricing.css';

function Pricing() {
  return (
    <section className="pricing-section container">
      <h2 className="section-title">Choose Your Plan</h2>
      <p className="section-subtitle">
        Simple, transparent pricing to get you started with Inclusign.
      </p>

      <div className="pricing-grid">
        {/* Free Tier */}
        <div className="pricing-card">
          <h3 className="pricing-card-title">Entry</h3>
          <div className="price">
            $29<span>/ month</span>
          </div>
          <ul className="pricing-features">
            <li>Upto 20hrs</li>
            <li>Community Support</li>
            <li>Accurate Translations</li>
          </ul>
          <button className="btn-pricing">Get Started</button>
        </div>

        {/* Pro Tier */}
        <div className="pricing-card pricing-featured">
          <h3 className="pricing-card-title">Basic</h3>
          <div className="price">
            $45<span>/ month</span>
          </div>
          <ul className="pricing-features">
            <li>Unlimited Translations</li>
            <li>Priority Support</li>
            <li>AI-Powered Accuracy</li>
          </ul>
          <button className="btn-pricing featured-btn">Upgrade Now</button>
        </div>

        {/* Enterprise Tier */}
        <div className="pricing-card">
          <h3 className="pricing-card-title">Enterprise</h3>
          <div className="price">
            Contact Us
          </div>
          <ul className="pricing-features">
            <li>Custom Integrations</li>
            <li>Dedicated Account Manager</li>
            <li>On-Premise Deployment</li>
          </ul>
          <button className="btn-pricing">Contact Sales</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
