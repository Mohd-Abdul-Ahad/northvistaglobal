import React, { useEffect, useRef, useState } from "react";
import passportImage from "../assets/Images/passport.jpg";
import globeIcon from "../assets/icons/global.svg";
import personIcon from "../assets/icons/user.svg";
import documentIcon from "../assets/icons/briefcase.svg";
import bulbIcon from "../assets/icons/strategicexpertise.svg";
import { Link } from "react-router-dom";

const InfoHighlight = ({ icon, title, text }) => (
  <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
    <div className="mb-4">
      <img src={icon} alt={title} className="w-12 h-12" />
    </div>
    <h4 className="text-xl font-semibold mb-2 text-[#1E453E]">{title}</h4>
    <p className="text-sm text-gray-700 mt-auto">{text}</p>
  </div>
);

const AboutUs = () => {
  const [visibleSections, setVisibleSections] = useState({
    header: false,
    mainContent: false,
    missionVision: false,
    whyChooseUs: false,
    features: false,
    cta: false,
  });

  const headerRef = useRef(null);
  const mainContentRef = useRef(null);
  const missionVisionRef = useRef(null);
  const whyChooseUsRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observers = [];

    const createObserver = (ref, section) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [section]: true }));
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.8 } // 80% of the section must be visible
      );

      if (ref.current) {
        observer.observe(ref.current);
        observers.push(observer);
      }
    };

    createObserver(headerRef, "header");
    createObserver(mainContentRef, "mainContent");
    createObserver(missionVisionRef, "missionVision");
    createObserver(whyChooseUsRef, "whyChooseUs");
    createObserver(featuresRef, "features");
    createObserver(ctaRef, "cta");

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="bg-[#1E453E]">
      {/* Header with animation */}
      <div
        ref={headerRef}
        className={`flex items-center justify-center interbold font-bold text-7xl py-20 ${
          visibleSections.header ? "animate-swipe-up" : "opacity-0"
        }`}
      >
        <span className="text-white">About Us</span>
      </div>

      {/* Main content section */}
      <div
        ref={mainContentRef}
        className="flex flex-col md:flex-row items-stretch max-w-full px-8 gap-8"
      >
        {/* Image with animation */}
        <div
          className={`flex-1 min-h-[600px] rounded-2xl overflow-hidden ${
            visibleSections.mainContent ? "animate-swipe-up" : "opacity-0"
          }`}
        >
          <div className="w-full h-full bg-gradient-to-tr from-[#1E453E]/70 to-[#2D6B5D]/70 flex items-center justify-center">
            <img
              src={passportImage}
              alt="Passport"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text content with staggered animations */}
        <div className="flex-1 order-1 md:order-2">
          <h3
            className={`text-2xl md:text-3xl font-semibold mb-6 text-white ${
              visibleSections.mainContent ? "animate-swipe-up" : "opacity-0"
            }`}
          >
            Who We Are
          </h3>
          <p
            className={`text-base md:text-lg font-['Inter'] text-white leading-relaxed mb-6 ${
              visibleSections.mainContent
                ? "animate-swipe-up delay-100"
                : "opacity-0"
            }`}
          >
            North Vista Global was formed through a strategic alliance between
            North Vista Immigration (NVI) and Strategic Minds Global Consulting
            (SMGC). We enable investors, entrepreneurs, retirees, and digital
            nomads to embrace global mobility and unlock cross-border
            opportunities.
          </p>
          <div
            className={`flex items-center border border-white p-4 rounded-lg bg-[#2D6B5D]/10 ${
              visibleSections.mainContent
                ? "animate-swipe-up delay-200"
                : "opacity-0"
            }`}
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E2725B]/20 text-[#E2725B] font-bold text-xl mr-4">
              ✓
            </div>
            <div>
              <h4 className="font-semibold text-white">Strategic Alliance</h4>
              <p className="text-sm text-white">
                NVI + Strategic Minds Global Consulting (SMGC)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission and Vision with animations */}
      <div
        ref={missionVisionRef}
        className="grid md:grid-cols-2 gap-12 mb-28 py-10 px-10"
      >
        <div
          className={
            visibleSections.missionVision ? "animate-swipe-up" : "opacity-0"
          }
        >
          <h3 className="text-2xl md:text-3xl intersemibold text-white mb-4">
            Our Mission
          </h3>
          <p className="text-base md:text-lg font-['Inter'] text-white leading-relaxed">
            To empower individuals and families with freedom of movement, secure
            investments, and long-term global opportunities through expert
            guidance and personalized service.
          </p>
        </div>
        <div
          className={
            visibleSections.missionVision
              ? "animate-swipe-up delay-300"
              : "opacity-0"
          }
        >
          <h3 className="text-2xl md:text-3xl intersemibold text-white mb-4">
            Our Vision
          </h3>
          <p className="text-base md:text-lg font-['Inter'] text-white leading-relaxed">
            To be the world's most trusted partner for residency and citizenship
            planning, setting the global standard for excellence and innovation.
          </p>
        </div>
      </div>

      {/* Why Choose Us section */}
      <div ref={whyChooseUsRef} className="text-center mb-16">
        <h2
          className={`text-4xl md:text-5xl font-['Inter'] font-bold text-white mb-3 ${
            visibleSections.whyChooseUs ? "animate-swipe-up" : "opacity-0"
          }`}
        >
          Why Choose Us
        </h2>
        <p
          className={`text-lg font-['Inter'] text-white ${
            visibleSections.whyChooseUs
              ? "animate-swipe-up delay-100"
              : "opacity-0"
          }`}
        >
          What Sets Us Apart
        </p>
      </div>

      {/* Feature cards with staggered animations */}
      <div
        ref={featuresRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-28 px-8"
      >
        <div
          className={
            visibleSections.features
              ? "animate-swipe-up delay-200"
              : "opacity-0"
          }
        >
          <InfoHighlight
            icon={globeIcon}
            title="Global Expertise"
            text="Our worldwide network provides unmatched access to key immigration opportunities."
          />
        </div>
        <div
          className={
            visibleSections.features
              ? "animate-swipe-up delay-300"
              : "opacity-0"
          }
        >
          <InfoHighlight
            icon={personIcon}
            title="Personalized Service"
            text="Tailored solutions for high-net-worth individuals and family migration goals."
          />
        </div>
        <div
          className={
            visibleSections.features
              ? "animate-swipe-up delay-400"
              : "opacity-0"
          }
        >
          <InfoHighlight
            icon={documentIcon}
            title="End-to-End Guidance"
            text="We're with you from your first consultation to final approvals and beyond."
          />
        </div>
        <div
          className={
            visibleSections.features
              ? "animate-swipe-up delay-500"
              : "opacity-0"
          }
        >
          <InfoHighlight
            icon={bulbIcon}
            title="Technology Driven"
            text="Secure, transparent, and digital-first processes for a seamless experience."
          />
        </div>
      </div>

      {/* Final CTA with animation */}
      <div
        ref={ctaRef}
        className={`p-12 sm:p-16 rounded-xl text-center shadow-xl mx-8 ${
          visibleSections.cta ? "animate-swipe-up" : "opacity-0"
        }`}
      >
        <h3 className="text-3xl sm:text-4xl font-['Inter'] font-semibold text-white mb-6">
          Ready to Expand Beyond Borders?
        </h3>
        <p className="text-base md:text-lg font-['Inter'] text-white mb-8 max-w-2xl mx-auto leading-relaxed">
          At North Vista Global, we are more than advisors — we are partners in
          your global journey. Our commitment is to Deliver excellence with
          discretion. - Simplify complex immigration processes. - Empower
          families with secure and lasting opportunities abroad.
        </p>
        <p className="mb-4 intersemibold text-2xl">
          Your Global Journey Starts Here.
        </p>
        <div className="flex gap-4 items-center justify-center">
          <button className="bg-transparent border-2 text-white hover:bg-white hover:text-[#1E453E] text-base md:text-lg px-8 py-3 rounded-md font-medium transition-all duration-300">
            <Link to="/contact"> Book a Free Consultation</Link>
          </button>
          <a
            href="#programs"
            className="bg-transparent border-2 text-white hover:bg-white hover:text-[#1E453E] text-base md:text-lg px-8 py-3 rounded-md font-medium transition-all duration-300"
          >
            Explore Our Programs
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
