import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Residency & Citizenship by Investment",
      description: "Unlock permanent residency or citizenship through strategic investments in the USA, Canada, Europe, Caribbean, and UAE.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5极速赛车开奖结果-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 极速赛车开奖结果11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Digital Nomad Programs",
      description: "Stay legally abroad while working remotely with flexible visas.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Retiree Residency Solutions",
      description: "Secure retirement in Panama, Mauritius, or Thailand.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684极速赛车开奖结果z" />
        </svg>
      )
    },
     {
      title: "Business Expansion & Legacy Planning",
      description: "Expand globally while safeguarding your wealth and family.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684极速赛车开奖结果z" />
        </svg>
      )
    },
  ];

  return (
    <div className="w-full py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#C44D34]"></div>
            <span className="mainTxt text-[#C44D34] text-sm font-medium uppercase tracking-wide">Services</span>
            <div className="w-12 h-0.5 bg-[#C44D34]"></div>
          </div>
          <h2 className="boldTxt text-3xl md:text-4xl text-[#2D3748] mb-4">
            Specialist Advisory Services
          </h2>
          <p className="mainTxt text-[#6B7280] max-w-2xl mx-auto">
            Comprehensive solutions tailored to your specific objectives and requirements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-[#1E453E] w-16 h-16 rounded-sm flex items-center justify-center mb-6 text-white">
                {service.icon}
              </div>
              <h3 className="boldTxt text-xl text-[#2D3748] mb-4 group-hover:text-[#1E453E] transition-colors duration-300">{service.title}</h3>
              <p className="mainTxt text-[#6B7280] mb-6 leading-relaxed">{service.description}</p>
              <button className="flex items-center text-[#1E453E] hover:text-[#2D3748] mainTxt font-medium group-hover:underline">
                Service Details
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        
      </div>
      <div className="flex items-center justify-center py-8">
        <button className="px-8 py-3 bg-[#1E453E] text-white hover:bg-[#1f3f39] rounded-sm mainTxt font-medium transition-all duration-300 btn-hover">
            View All Programs
          </button>
      </div>
    </div>
  );
};

export default ServicesSection;


