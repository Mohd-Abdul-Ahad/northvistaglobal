import React, { useState, useRef, useEffect } from "react";
import HeroBanner from "../assets/Images/shakinghands.webp";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef([]);
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Nabeel Khan",
      role: "Founder, North Vista Immigration",
      image: "/api/placeholder/200/200",
      fullBio:
        "With extensive experience in immigration consulting, Nabeel Khan founded North Vista Immigration with a vision to simplify global mobility. Nabeel has over 15 years of experience in immigration consulting and has helped thousands of clients achieve their dreams. He specializes in investor immigration programs and has built strong relationships with immigration authorities worldwide.",
    },
    {
      id: 2,
      name: "Sampann Malhotra",
      role: "Director, SMGC | Business Development Consultant at NVI",
      image: "/api/placeholder/200/200",
      fullBio:
        "Sampann Malhotra brings strategic vision and business development expertise to the partnership, driving growth initiatives. With a background in international business development, Sampann Malhotra has successfully expanded operations across multiple continents. His strategic insights have been instrumental in developing innovative immigration solutions for high-net-worth individuals.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      title: "Excellence",
      description: "Highest standards in service and outcomes.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Integrity",
      description: "Transparent, ethical guidance at every step.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Confidentiality",
      description: "Your privacy is paramount.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description: "AI‑powered, data‑driven client service.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Legacy",
      description: "Multigenerational planning for family security.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-4 0H9m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v12m4 0h-2m2 0v-4m0 4v-4m0 4v-4m0 4v-4m0 4v-4m0 4v-4m0 4v-4m0 4v-4m0 4v-极"
          />
        </svg>
      ),
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discover",
      description: "Clarify goals, timelines, and constraints.",
    },
    {
      step: "2",
      title: "Design",
      description:
        "Build a tailored program shortlist with budget and eligibility.",
    },
    {
      step: "3",
      title: "Execute",
      description: "Coordinate with licensed attorneys and regulated partners.",
    },
    {
      step: "4",
      title: "Settle",
      description:
        "Set up banking, schooling, and relocation support as needed.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Banner Section - Fixed */}
        <section
          className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroBanner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%'
            }}
          ></div>
          <div
            className={`text-center text-white max-w-4xl mx-auto px-4 opacity-0 relative z-10 ${
              isVisible ? "animate-fade-in" : ""
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 serif">
              Your Global Mobility Partner
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              North Vista Global is a premier residency and citizenship
              consulting firm formed through the strategic alliance of North
              Vista Immigration and Strategic Minds Global Consulting. We
              empower investors, entrepreneurs, retirees, and global
              professionals to unlock opportunity beyond borders through
              tailored strategies and a trusted partner network.
            </p>
            <button className="bg-[#1E453E] hover:bg-[#2a5c52] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1">
              Book a Free Consultation
            </button>
          </div>
        </section>

        {/* Who We Are Section */}
        <section
          className="py-16 px-4 md:px-8 bg-white"
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <div className="max-w-4xl mx-auto">
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 opacity-0 ${
                isVisible ? "animate-fade-in" : ""
              }`}
            >
              Who We Are
            </h2>
            <div
              className={`bg-gray-50 rounded-xl p-6 md:p-8 shadow-lg opacity-0 ${
                isVisible ? "animate-slide-up delay-100" : ""
              }`}
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                We specialize in investment migration, retiree residency,
                digital nomad visas, and cross‑border business expansion. With a
                footprint across North America and South Asia—and partners
                spanning law, finance, and real estate—we deliver seamless,
                premium pathways to residency, citizenship, and global mobility.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section
          className="py-16 px-4 md:px-8 bg-gray-100"
          ref={(el) => (sectionRefs.current[2] = el)}
        >
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div
              className={`bg-white rounded-xl p-6 md:p-8 shadow-lg opacity-0 ${
                isVisible ? "animate-slide-up delay-200" : ""
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Mission</h3>
              <p className="text-lg text-gray-700">
                Empower individuals and families with secure, compliant, and
                strategic pathways that create long‑term freedom and resilience.
              </p>
            </div>
            <div
              className={`bg-white rounded-xl p-6 md:p-8 shadow-lg opacity-0 ${
                isVisible ? "animate-slide-up delay-300" : ""
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Vision</h3>
              <p className="text-lg text-gray-700">
                To be the world's most trusted partner for residency and
                citizenship planning.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section
          className="py-16 px-4 md:px-8 bg-white"
          ref={(el) => (sectionRefs.current[3] = el)}
        >
          <div className="max-w-4xl mx-auto">
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 opacity-0 ${
                isVisible ? "animate-fade-in" : ""
              }`}
            >
              Leadership
            </h2>
            <div className="flex flex-col md:flex-row flex-nowrap gap-6 overflow-visible items-center justify-center">
              {teamMembers.map((member, index) => {
                const isSelected = selectedMember === member.id;
                const selectedIndex = selectedMember
                  ? teamMembers.findIndex((m) => m.id === selectedMember)
                  : -1;

                return (
                  <div
                    key={member.id}
                    className="relative transition-all duration-500 ease-out w-full md:w-auto"
                    style={{
                      transform:
                        selectedMember && !isSelected && index > selectedIndex
                          ? "translateX(10px)"
                          : "translateX(0)",
                      zIndex: isSelected ? 20 : 10 - index,
                    }}
                    onMouseEnter={() => setSelectedMember(member.id)}
                    onMouseLeave={() => setSelectedMember(null)}
                  >
                    {/* Main Card and Expanded Panel Container */}
                    <div className="flex flex-col md:flex-row">
                      {/* Team Member Card */}
                      <div className="w-full md:w-[380px] h-[450px] border border-gray-200 rounded-t-xl md:rounded-l-xl md:rounded-r-none overflow-hidden shadow-md bg-white transition-all duration-300 hover:shadow-lg">
                        <div className="h-3/5 w-full overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-2xl font-semibold text-[#1E453E] font-playfair mb-2">
                            {member.name}
                          </h3>
                          <p className="text-md font-medium text-[#4B5563]">
                            {member.role}
                          </p>
                          <div
                            className={`mt-4 transition-all duration-300 ${
                              isSelected
                                ? "opacity-0 h-0"
                                : "opacity-100 h-auto"
                            }`}
                          >
                            <p className="text-sm text-gray-600">
                              Hover to learn more about{" "}
                              {member.name.split(" ")[0]}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Expanded Description Card */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-out ${
                          isSelected
                            ? "w-full md:w-[380px] h-auto opacity-100"
                            : "w-0 h-0 opacity-0"
                        }`}
                      >
                        <div className="w-full md:w-[380px] h-[450px] border border-gray-200 border-t-0 md:border-t md:border-l-0 rounded-b-xl md:rounded-r-xl bg-white shadow-md p-6 flex flex-col">
                          <h3 className="text-2xl font-semibold text-[#1E453E] font-playfair mb-2">
                            About {member.name}
                          </h3>
                          <p className="text-md font-medium text-[#4B5563] mb-4">
                            {member.role}
                          </p>
                          <div className="flex-grow overflow-y-auto pr-2">
                            <p className="text-[#6B7280] text-base leading-relaxed mb-4">
                              {member.fullBio}
                            </p>
                          </div>
                          <div className="bg-[#F0F7EE] p-4 rounded-lg border-l-4 border-[#1E453E] mt-4">
                            <p className="text-[#1E453E] italic text-sm">
                              "Our mission is to make global mobility accessible
                              and seamless."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section
          className="py-16 px-4 md:px-8 bg-gray-50"
          ref={(el) => (sectionRefs.current[4] = el)}
        >
          <div className="max-w-6xl mx-auto">
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16 opacity-0 ${
                isVisible ? "animate-fade-in" : ""
              }`}
            >
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 opacity-0 ${
                    isVisible ? "animate-slide-up" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#F0F7EE] flex items-center justify-center text-[#1E453E]">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1E453E] mb-3 font-playfair">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - Vertical Design */}
        <section
          className="py-16 px-4 md:px-8 bg-white"
          ref={(el) => (sectionRefs.current[5] = el)}
        >
          <div className="max-w-4xl mx-auto">
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 opacity-0 ${
                isVisible ? "animate-fade-in" : ""
              }`}
            >
              Our Process
            </h2>

            <div className="relative">
              {/* Vertical connecting line - positioned closer to content */}
              <div className="absolute left-4 md:left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#1E453E] to-[#87a96b] hidden md:block"></div>

              <div className="space-y-8 md:space-y-10 relative">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-start opacity-0 ${
                      isVisible ? "animate-slide-up" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.15 + 0.1}s` }}
                  >
                    {/* Step number indicator */}
                    <div className="flex-shrink-0 relative mr-4 md:mr-6">
                      <div className="w-12 h-12 rounded-full bg-[#1E453E] flex items-center justify-center text-white text-lg font-bold font-playfair z-10 relative shadow-md">
                        {step.step}
                      </div>

                      {/* Connector for mobile */}
                      {index < processSteps.length - 1 && (
                        <div className="absolute -bottom-6 left-1/2 h-6 w-0.5 bg-gradient-to-b from-[#1E453E] to-[#87a96b] transform -translate-x-1/2 md:hidden"></div>
                      )}
                    </div>

                    {/* Content - Compact card design */}
                    <div className="flex-1 bg-[#F0F7EE] rounded-xl p-5 shadow-md border-l-4 border-[#1E453E]">
                      <h3 className="text-xl font-bold text-[#1E453E] mb-2 font-playfair">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Credibility Section */}
        <section
          className="py-16 px-4 md:px-8 bg-gray-100"
          ref={(el) => (sectionRefs.current[6] = el)}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`bg-white rounded-xl p-8 shadow-lg opacity-0 ${
                isVisible ? "animate-fade-in" : ""
              }`}
            >
              <p className="text-lg text-gray-700 mb-6">
                Our alliance brings together immigration leadership and business
                expansion expertise, backed by a global network of vetted,
                licensed partners.
              </p>
              <button className="bg-[#1E453E] hover:bg-[#2a5c52] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                Book a Free Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;