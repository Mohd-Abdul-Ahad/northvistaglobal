import React from "react";
import { Link } from "react-router-dom";
import globalIcon from "../assets/icons/global.svg";
import trustedIcon from "../assets/icons/trustedexpertise.svg";
import briefcaseIcon from "../assets/icons/briefcase.svg";
import handshakeIcon from "../assets/icons/handshake.svg";

const WhyChooseUs = () => {
  const features = [
    {
      icon: globalIcon,
      title: "Global Reach",
      description: "Expertise across 25+ countries.",
    },
    {
      icon: trustedIcon,
      title: "Trusted Expertise",
      description:
        "Alliance between North Vista Immigration & SMGC with vetted partner network.",
    },
    {
      icon: briefcaseIcon,
      title: "HNWI Focus",
      description:
        "Bespoke strategies for investors, entrepreneurs, and families.",
    },
    {
      icon: handshakeIcon,
      title: "AI-Powered Service",
      description: "Streamlined onboarding, private & efficient support.",
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Content */}
          <div className="lg:w-2/5">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1E453E] leading-tight mb-6">
              Why Choose North Vista Global?
            </h2>
            <p className="text-xl text-[#4B5563] mb-8">
              With decades of combined experience and a global network of
              partners, we provide unparalleled investment migration solutions.
            </p>

            {/* CTA */}
            <div className="text-left">
              <button className="px-10 py-4 bg-[#1E453E] text-white text-lg rounded-md font-medium transition-all duration-300 transform hover:-translate-y-1">
                <Link to="/contact"> Book a Free Consultation</Link>
              </button>
              <p className="text-[#6B7280] text-base mt-4"  >
                Schedule a free consultation with our experts
              </p>
            </div>
          </div>

          {/* Right Content - 2x2 Feature Grid */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="p-8 bg-[#F8F9FA] rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-[#1E453E]/20 group"
                >
                  <div className="flex items-center justify-center mb-5 bg-[#F0F7EE] p-3 rounded-lg w-20 h-20 mx-auto group-hover:bg-[#E4F2E1] transition-colors duration-300">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E453E] mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-[#4B5563] text-base text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
