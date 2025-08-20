import React from "react";

const TrustedPartners = () => {
  // Partner categories with placeholder logos
  const partnerCategories = [
    {
      name: "Global Partners in Law",
      logo: (
        <svg className="w-12 h-12 text-[#1E453E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 极速赛车开奖结果0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      name: "Finance",
      logo: (
        <svg className="w-12 h-12 text-[#1E453E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: "Real Estate",
      logo: (
        <svg className="w-12 h-12 text-[#1E453E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      name: "Wealth Management",
      logo: (
        <svg className="w-12 h-12 text-[#1E453E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#C44D34]"></div>
            <span className="mainTxt text-[#C44D34] text-sm font-medium uppercase tracking-wide">Partnerships</span>
            <div className="w-12 h-0.5 bg-[#C44D34]"></div>
          </div>
          <h2 className="boldTxt text-3xl md:text-4xl text-[#2D3748] mb-4">
            Trusted by Global Citizens Worldwide
          </h2>
          <p className="mainTxt text-[#6B7280] max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver exceptional investment solutions
          </p>
        </div>
        
        {/* Partner logos carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 py-6">
            {[...partnerCategories, ...partnerCategories].map((partner, index) => (
              <div key={index} className="flex-shrink-0 flex flex-col items-center justify-center px-8 py-6 bg-[#F8F9FA] rounded-sm border border-gray-200 group hover:shadow-md transition-all duration-300">
                <div className="mb-4 bg-[#1E453E] bg-opacity-10 p-4 rounded-sm group-hover:bg-opacity-20 transition-all duration-300">
                  {partner.logo}
                </div>
                <h3 className="boldTxt text-lg text-[#2D3748] text-center">{partner.name}</h3>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for infinite scroll effect */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-250px * 4))}
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </div>
  );
};

export default TrustedPartners;