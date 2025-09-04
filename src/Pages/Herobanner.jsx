import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Topbar from "../Components/Topbar";
import HeroBannerImg from "../assets/Images/herobannerr.webp";

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
    <div
      className="relative w-full h-screen min-h-[600px] md:min-h-[700px] lg:min-h-[800px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${HeroBannerImg})`,
      }}
    >
      {/* Accessible alt text for background image */}
      <img
        src={HeroBannerImg}
        alt="Global map highlighting primary residency & citizenship corridors"
        className="sr-only"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Topbar and Navbar */}
      <div className="relative z-20">
        <div
          className={`transition-all duration-300 ${
            isTopbarVisible ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
          }`}
        >
          {/* Optional Topbar content */}
        </div>
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center pt-16 md:pt-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl space-y-4 md:space-y-6 text-left text-white">
            <h1 className="serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-left delay-100">
              Your Gateway to Global Residency & Citizenship
            </h1>

            <p className="sans text-base sm:text-lg md:text-xl leading-relaxed animate-fade-in-left delay-300">
              Tailored immigration and investment strategies for investors,
              entrepreneurs, retirees, and digital nomads—built for security,
              mobility, and long‑term opportunity.
            </p>

            <div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <a
                  href="#programs"
                  className="bg-[#1E453E] text-white hover:bg-[#16332B] intersemibold py-3 px-6 sm:px-8 rounded-sm text-sm sm:text-base transition-all btn-hover shadow-md animate-fade-in-left delay-500 text-center"
                >
                  Explore Programs
                </a>
                <a
                  href="/contact"
                  className="bg-[#1E453E] text-white hover:bg-[#16332B] intersemibold py-3 px-6 sm:px-8 rounded-sm text-sm sm:text-base transition-all btn-hover shadow-md animate-fade-in-left delay-700 text-center"
                >
                  Book a Free Consultation
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 md:pt-6 animate-fade-in-left delay-900">
                <p className="flex text-md text-white/90 mb-3 text-left font-medium tracking-wide">
                  Trusted by professionals worldwide
                </p>
                <div className="flex flex-wrap justify-start gap-4 md:gap-6">
                  {/* Legal Expertise */}
                  <div className="flex flex-col items-center group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center p-1 sm:p-2 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 122.88 104.6"
                        className="w-full h-full text-[#1E453E]"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M72.57,19.81c2.3,2.3,2.35,6.01,0.1,8.26l-1.21,1.21l9.75,9.59L56.55,62.64l-9.5-9.84L10.02,89.83
      c-2.24,2.24-5.96,2.2-8.26-0.1c-2.3-2.3-2.35-6.01-0.1-8.26l37.17-37.17l-7.44-7.73L54.7,12.79l8.35,8.19l1.28-1.28
      C66.56,17.46,70.27,17.51,72.57,19.81z M122.88,99.89c0,2.59-2.06,4.71-4.59,4.71l-53.01,0.01c-2.53,0-4.59-2.12-4.59-4.71
      c0-2.54,2.02-4.71,4.59-4.71h5.65c-1.42-0.8-2.39-2.35-2.39-4.13c0-2.54,2.02-4.71,4.59-4.71l37.3,0
      c2.53-0.01,4.6,2.11,4.6,4.7c0,1.78-0.98,3.34-2.41,4.14h5.66C120.82,95.18,122.88,97.3,122.88,99.89z M53.68,1.4
      c1.83,1.83,1.87,4.79,0.08,6.57l-27.2,27.2c-1.79,1.79-4.74,1.75-6.57-0.08c-1.83-1.83-1.87-4.79-0.08-6.57l27.2-27.2
      C48.9-0.47,51.85-0.43,53.68,1.4z M92.35,40.06c1.83,1.83,1.87,4.79,0.08,6.57l-27.2,27.2c-1.79,1.79-4.74,1.75-6.57-0.08
      c-1.83-1.83-1.87-4.79-0.08-6.57l27.2-27.2C87.56,38.19,90.51,38.23,92.35,40.06z"
                        />
                      </svg>
                    </div>
                    <span className="text-white text-xs font-medium group-hover:text-[#a8d5ba] transition-colors duration-300 text-center leading-tight">
                      Legal
                      <br />
                      Expertise
                    </span>
                  </div>

                  {/* Financial Services */}
                  <div className="flex flex-col items-center group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center p-1 sm:p-2 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 122.88 108.91"
                        className="w-full h-full text-[#1E453E]"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.79,41.59L61.44,0l58.95,41.59H2.79z M0,102.28h9.08v-6.33h1.32v-3.02l3.85,0V56.7H6.38v-8.68h110.11v8.68h-7.86v36.23h3.85v3.02l1.32,0v6.33h9.08v6.63H0V102.28z M32.59,95.95h4.44v-3.02l3.85,0V56.7H28.74v36.23h3.85V95.95z M59.22,95.95h4.45v-3.02l3.84,0V56.7H55.37v36.23h3.85V95.95z M85.85,95.95h4.45v-3.02l3.85,0V56.7H82v36.23h3.85V95.95z M41.69,31.1l19.84-15.22L81.48,31.1H41.69z"
                        />
                      </svg>
                    </div>
                    <span className="text-white text-xs font-medium group-hover:text-[#a8d5ba] transition-colors duration-300 text-center leading-tight">
                      Financial
                      <br />
                      Services
                    </span>
                  </div>

                  {/* Real Estate */}
                  <div className="flex flex-col items-center group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center p-1 sm:p-2 shadow-lg transform transition-all duration-300 group-hover:scale-110 group极速赛车开奖结果-hover:shadow-xl mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 122.88 112.07"
                        className="w-full h-full text-[#1E453E]"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M61.44,0L0,60.18l14.99,7.87L61.04,19.7l46.85,48.36l14.99-7.87L61.44,0z M18.26,69.63L61.5,26.38l43.11,43.25v42.43H73.12V82.09H49.49v29.97H18.26V69.63z"
                        />
                      </svg>
                    </div>
                    <span className="text-white text-xs font-medium group-hover:text-[#a8d5ba] transition-colors duration-300 text-center leading-tight">
                      Real
                      <br />
                      Estate
                    </span>
                  </div>

                  {/* Wealth Management */}
                  <div className="flex flex-col items-center group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center p-1 sm:p-2 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 122.88 96.2"
                        className="w-full h-full text-[#1E453E]"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0,42.92h24.83V87.1H0V42.92L0,42.92z M85.36,20.49c9.01,0,16.32,7.3,16.32,16.32 c0,9.01-7.3,16.32-16.32,16.32c-9.01,0-16.32-7.3-16.32-16.32C69.04,27.8,76.34,20.49,85.36,20.49L85.36,20.49z M56.72,0 C64.49,0,70.8,6.3,70.8,14.08c0,7.77-6.3,14.08-14.08,14.08c-7.77,0-14.08-6.3-14.08-14.08C42.64,6.31,48.94,0,56.72,0L56.72,0z M58.15,17.07c0-0.46-0.11-0.81-0.34-1.07c-0.23-0.26-0.62-0.5-1.18-0.73c-0.56-0.23-1.08-0.46-1.55-0.69 c-0.47-0.24-0.89-0.51-1.23-0.82c-0.35-0.31-0.61-0.67-0.79-1.07c-0.19-0.41-0.27-0.9-0.27-1.48c0-0.97,0.33-1.77,0.98-2.39 c0.65-0.62,1.52-1,2.61-1.1v-1.3h1.37v1.33c1.05,0.15,1.88,0.58,2.48,1.29c0.6,0.71,0.90,1.61,0.90,2.69H58.2 c0-0.6-0.12-1.06-0.35-1.38c-0.23-0.32-0.56-0.48-0.98-0.48c-0.38,0-0.68,0.12-0.88,0.35c-0.21,0.24-0.31,0.57-0.31,0.98 c0,0.42,0.12,0.76,0.36,1.01c0.25,0.25,0.63,0.49,1.16,0.72c0.53,0.23,1.04,0.46,1.51,0.7c0.47,0.25,0.88,0.52,1.22,0.83 c0.35,0.31,0.62,0.68,0.81,1.09c0.19,0.41,0.30,0.90,0.30,1.49c0,0.98-0.31,1.78-0.94,2.40c-0.63,0.62-1.47,0.98-2.54,1.08v1.22H56.2 v-1.22c-1.25-0.14-2.21-0.56-2.88-1.28c-0.67-0.73-1.01-1.68-1.01-2.87h2.91c0,0.66,0.14,1.15,0.43,1.50 c0.29,0.34,0.70,0.52,1.23,0.52c0.39,0,0.69-0.12,0.92-0.35C58.02,17.8,58.14,17.48,58.15,17.07L58.15,17.07L58.15,17.07z M87.01,40.27c0-0.53-0.13-0.94-0.39-1.24c-0.26-0.30-0.71-0.58-1.37-0.85c-0.65-0.26-1.25-0.54-1.80-0.80 c-0.55-0.27-1.03-0.59-1.43-0.95c-0.40-0.36-0.70-0.77-0.92-1.24c-0.22-0.47-0.31-1.04-0.31-1.71c0-1.13,0.38-2.05,1.14-2.77 c0.75-0.72,1.76-1.15,3.02-1.27v-1.51h1.59v1.55c1.21,0.18,2.17,0.68,2.87,1.50c0.70,0.82,1.05,1.86,1.05,3.12h-3.38 c0-0.70-0.14-1.22-0.40-1.60c-0.26-0.37-0.65-0.56-1.14-0.56c-0.44,0-0.78,0.14-1.02,0.41c-0.24,0.27-0.36,0.66-0.36,1.14 c0,0.49,0.14,0.88,0.42,1.17c0.28,0.29,0.72,0.57,1.34,0.83c0.62,0.26,1.20,0.54,1.75,0.81c0.55,0.28,1.02,0.61,1.42,0.96 c0.40,0.36,0.71,0.78,0.94,1.26c0.23,0.48,0.34,1.05,0.34,1.72c0,1.14-0.36,2.07-1.09,2.78c-0.72,0.71-1.70,1.14-2.95,1.25v1.41 h-1.59v-1.42c-1.45-0.16-2.56-0.65-3.34-1.49c-0.77-0.84-1.16-1.95-1.16-3.33h3.37c0,0.76,0.17,1.33,0.50,1.73 c0.33,0.39,0.81,0.60,1.43,0.60c0.45,0,0.80-0.14,1.07-0.40C86.87,41.11,87.00,40.74,87.01,40.27L87.01,40.27L87.01,40.27z M85.36,23.70 c7.23,0,13.10,5.86,13.10,13.10c0,7.23-5.86,13.10-13.10,13.10c-7.23,0-13.10-5.86-13.10-13.10C72.26,29.56,78.13,23.70,85.36,23.70 L85.36,23.70z M29.83,83.39V46.47h16.61c7.04,1.26,14.08,5.08,21.12,9.51h12.90c5.84,0.35,8.90,6.27,3.22,10.16 c-4.52,3.32-10.49,3.13-16.61,2.58c-4.22-0.21-4.40,5.46,0,5.48c1.53,0.12,3.19-0.24,4.64-0.24c7.64-0.01,13.92-1.47,17.77-7.50 l1.93-4.51l19.19-9.51c9.60-3.16,16.42,6.88,9.35,13.87c-13.90,10.11-28.15,18.43-42.73,25.15c-10.59,6.44-21.18,6.22-31.76,0 L29.83,83.39L29.83,83.39z"
                        />
                      </svg>
                    </div>
                    <span className="text-white text-xs font-medium group-hover:text-[#a8d5ba] transition-colors duration-300 text-center leading-tight">
                      Wealth
                      <br />
                      Management
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herobanner;
