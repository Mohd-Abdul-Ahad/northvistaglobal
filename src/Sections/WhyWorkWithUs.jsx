import React from 'react';
import './WhyWorkWithUs.css';

const WhyWorkWithUs = () => {
  return (
    <div className="why-work-with-us">
      {/* Header Section */}
      <div className="wwu-header">
        <h2 className="wwu-title">Why Work With Us?</h2>
        <p className="wwu-subtitle">Discover the North Vista Global advantage</p>
      </div>

      {/* Benefits Grid */}
      <div className="wwu-benefits">
        <div className="benefit-item">
          <div className="benefit-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#C44D34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#C44D34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="benefit-title">Expertise across 25+ countries</h3>
          <p className="benefit-description">Our team has extensive knowledge and experience in immigration and residency programs across more than 25 countries worldwide.</p>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#C44D34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="benefit-title">Trusted HNWI advisors</h3>
          <p className="benefit-description">We specialize in serving high-net-worth individuals with personalized solutions that protect and grow their assets globally.</p>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M16.6438 16.1429C16.8768 15.5717 17 14.551 17 14C17 11.2386 14.7614 9 12 9C9.23858 9 7 11.2386 7 14C7 14.551 7.12325 15.5717 7.35625 16.1429M13 7C13 8.10457 12.1046 9 11 9C9.89543 9 9 8.10457 9 7C9 5.89543 9.89543 5 11 5C12.1046 5 13 5.89543 13 7ZM15 12C15 13.1046 14.1046 14 13 14C11.8954 14 11 13.1046 11 12C11 10.8954 11.8954 10 13 10C14.1046 10 15 10.8954 15 12Z" stroke="#C44D34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="benefit-title">Global legal, financial, real estate partnerships</h3>
          <p className="benefit-description">We've established strategic partnerships worldwide to provide comprehensive support for all your relocation needs.</p>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.75 17L9 20L8 21H16L15 20L14.25 17M3 13H21M5 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17Z" stroke="#C44D34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="benefit-title">AI-powered client services</h3>
          <p className="benefit-description">Our advanced technology platform streamlines the process, providing faster responses and more accurate case assessments.</p>
        </div>
      </div>

      {/* Final CTA Banner */}
      <div className="wwu-cta-banner">
        <div className="cta-content">
          <h2 className="cta-title">Your Global Journey Starts Here</h2>
          <p className="cta-subtitle">Take the first step toward global mobility and expanded opportunities</p>
          <div className="cta-buttons">
            <button className="cta-btn primary">Book a Free Consultation</button>
            <button className="cta-btn secondary">Download Our Residency Guide</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithUs;