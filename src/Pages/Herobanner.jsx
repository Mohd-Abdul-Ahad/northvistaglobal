import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Topbar from "../Components/Topbar";
import HeroBannerImg from "../assets/Images/herobannerimgggg.png";

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
    <div className="relative w-full h-screen min-h-[800px] bg-white">
    

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

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center pt-20">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl space-y-6 text-left">
            <h1 className="serif text-4xl sm:text-5xl md:text-6xl text-[#1E453E] font-bold leading-tight animate-fade-in-left delay-100">
              Your Gateway to Global Residency & Citizenship
            </h1>

            <p className="sans text-lg md:text-xl text-[#1E453E] leading-relaxed animate-fade-in-left delay-300">
              At North Vista Global, we empower investors, entrepreneurs, and retirees to transcend borders. Through strategic investment immigration, retiree residency, and digital nomad programs, we create seamless pathways to new markets, enhanced mobility, and a secure future for your family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="bg-[#1E453E] text-white hover:bg-[#16332B] serif py-3 px-8 rounded-sm text-base transition-all btn-hover shadow-md animate-fade-in-left delay-500">
                Explore Programs
              </button>
             <button className="bg-[#1E453E] text-white hover:bg-[#16332B] serif py-3 px-8 rounded-sm text-base transition-all btn-hover shadow-md animate-fade-in-left delay-700">
                Book a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herobanner;