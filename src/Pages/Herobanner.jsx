import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Topbar from "../Components/Topbar";

const Herobanner = () => {
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTopbarVisible(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen min-h-[800px]">
      {/* Background Image - Professional corporate image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1770&q=80')`,
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Topbar and Navbar */}
      <div className="relative z-20">
        <div
          className={`transition-all duration-300 ${
            isTopbarVisible ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
          }`}
        >
          <Topbar />
        </div>
        <Navbar />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center pt-16">
        <div className="container mx-auto px-6 lg:px-12 xl:px-24">
          <div className="max-w-2xl space-y-6 animate-fade-in-left">
            <h1 className="boldTxt text-white text-4xl sm:text-5xl md:text-6xl leading-tight">
              Your Gateway to Global Residency & Citizenship
              <br />
              {/* <span className="text-[#C44D34]">Investment</span> Solutions */}
            </h1>

            <p className="mainTxt text-gray-200 text-lg md:text-xl leading-relaxed">
              At North Vista Global, we empower investors, entrepreneurs, and retirees to transcend borders. Through strategic investment immigration, retiree residency, and digital nomad programs, we create seamless pathways to new markets, enhanced mobility, and a secure future for your family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="bg-[#1E453E] hover:bg-[#1f3f39] text-white boldTxt py-3 px-8 rounded-sm text-base transition-all duration-300 btn-hover shadow-lg">
                EXPLORE PROGRAMS
              </button>
              <button className="border border-white hover:bg-white/10 text-white boldTxt py-3 px-8 rounded-sm text-base transition-all duration-300">
                Book a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Herobanner;
