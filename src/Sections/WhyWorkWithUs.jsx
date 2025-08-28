import React, { useEffect, useRef } from "react";

const WhyWorkWithUs = () => {
  const reasons = [
    {
      icon: (
        <img
          src="/src/assets/icons/strategicexpertise.svg"
          alt="Strategic Expertise"
          className="w-16 h-16"
        />
      ),
      title: "Strategic Expertise",
      description:
        "With the combined power of NVI and SMGC, we deliver unparalleled strategic insight into global mobility, investments, and immigration.",
    },
    {
      icon: (
        <img
          src="/src/assets/icons/user.svg"
          alt="Client-Centric Approach"
          className="w-16 h-16"
        />
      ),
      title: "Client-Centric Approach",
      description:
        "We prioritize your needs, tailoring our solutions to empower your unique global journey.",
    },
    {
      icon: (
        <img
          src="/src/assets/icons/global.svg"
          alt="Global Network"
          className="w-16 h-16"
        />
      ),
      title: "Global Network",
      description:
        "Our reach spans continents, ensuring you access to the best opportunities across borders.",
    },
    {
      icon: (
        <img
          src="/src/assets/icons/trustedexpertise.svg"
          alt="Trusted Professionals"
          className="w-16 h-16"
        />
      ),
      title: "Trusted Professionals",
      description:
        "Our seasoned team brings integrity, precision, and care to every interaction.",
    },
  ];

  const sectionRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when element is fully in view
            if (entry.target === sectionRef.current) {
              entry.target.classList.add("animate-fade-in");
              const benefitItems = entry.target.querySelectorAll(".benefit-item");
              benefitItems.forEach((item, index) => {
                item.style.animationDelay = `${0.1 * (index + 1)}s`;
                item.classList.add("animate-slide-in-up");
              });
            }
            
            if (entry.target === ctaRef.current) {
              entry.target.classList.add("animate-fade-in");
            }
          }
        });
      },
      { threshold: 0.8 } // Trigger when 80% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  return (
    <section className="why-work-with-us bg-[#1E453E] py-20 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="wwu-header text-center mb-16">
          <h2 className="wwu-title text-4xl sm:text-5xl font-semibold font-playfair text-white mb-6">
            Why Work With Us
          </h2>
          <p className="wwu-subtitle text-lg md:text-xl text-[#6B7280] max-w-3xl mx-auto">
            At North Vista Global, we blend strategic insight with personalized service to help you
            achieve freedom and opportunity across borders.
          </p>
        </div>

        {/* Benefits Grid */}
        <div ref={sectionRef} className="wwu-benefits grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="benefit-item bg-white p-8 rounded-xl border border-gray-200 opacity-0 transition-all duration-300 hover:shadow-lg hover:border-[#1E453E]/20 group"
            >
              <div className="benefit-icon flex justify-center mb-6 bg-[#F0F7EE] p-3 rounded-lg w-20 h-20 mx-auto group-hover:bg-[#E4F2E1] transition-colors duration-300">
                {reason.icon}
              </div>
              <h3 className="benefit-title text-xl font-semibold text-[#1E453E] mb-4 text-center">
                {reason.title}
              </h3>
              <p className="benefit-description text-[#4B5563] text-base text-center leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div ref={ctaRef} className="wwu-cta-banner bg-white text-[#1E453E] p-12 rounded-xl opacity-0">
          <div className="cta-content text-center max-w-3xl mx-auto">
            <h3 className="cta-title text-3xl font-playfair font-semibold mb-4">
              Ready to Begin Your Global Journey?
            </h3>
            <p className="cta-subtitle text-lg opacity-90 mb-8">
              Connect with our experts for personalized guidance and solutions tailored to your aspirations.
            </p>
            <div className="cta-buttons flex flex-wrap gap-4 justify-center">
              <button className="cta-btn primary bg-[#1E453E]  px-8 py-3 rounded-md text-white font-medium transition-all duration-300 transform hover:-translate-y-1">
                Schedule Consultation
              </button>
              <button className="cta-btn secondary text-white bg-[#1E453E] px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:-translate-y-1">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .why-work-with-us {
            padding: 3rem 1rem;
          }
          
          .wwu-title {
            font-size: 2rem;
          }
          
          .wwu-subtitle {
            font-size: 1.125rem;
          }
          
          .cta-title {
            font-size: 1.75rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyWorkWithUs;
