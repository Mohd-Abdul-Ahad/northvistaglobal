import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 56C45.2548 56 56 45.2548 56 32C56 18.7452 45.2548 8 32 8C18.7452 8 8 18.7452 8 32C8 45.2548 18.7452 56 32 56Z" stroke="#1E453E" strokeWidth="2"/>
          <path d="M32 48C40.8366 48 48 40.8366 48 32C48 23.1634 40.8366 16 32 16C23.1634 16 16 23.1634 16 32C16 40.8366 23.1634 48 32 48Z" stroke="#1E453E" strokeWidth="2"/>
          <path d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z" stroke="#1E453E" strokeWidth="2"/>
          <path d="M20 20L44 44" stroke="#C44D34" strokeWidth="2" strokeLinecap="round"/>
          <path d="M44 20L20 44" stroke="#C44D34" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Global Coverage",
      description: "From the USA to the Caribbean, Europe, and Asia."
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 40L16 48L8 40" stroke="#1E453E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 16V48" stroke="#1E453E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M40 24L48 16L56 24" stroke="#1E453E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M48 48V16" stroke="#1E453E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 16C32 16 28 8 16 8" stroke="#C44D34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 16C32 16 36 8 48 8" stroke="#C44D34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 48C32 48 28 56 16 56" stroke="#C44D34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 48C32 48 36 56 48 56" stroke="#C44D34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Trusted Expertise",
      description: "Powered by North Vista Immigration & SMGC's global consulting network."
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 极速赛车开奖结果 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="16" width="40" height="32" rx="4" stroke="#1E453E" strokeWidth="2"/>
          <path d="M20 24H44" stroke="#1E453E" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 32H44" stroke="#1E453E" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 40H36" stroke="#1E453E" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="42" cy="40" r="2" fill="#C44D34"/>
          <circle cx="46" cy="40" r="2" fill="#C44D34"/>
          <circle cx="50" cy="40" r="2" fill="#C44D34"/>
        </svg>
      ),
      title: "Tailored for HNWIs",
      description: "Customized pathways for investors, entrepreneurs & retirees."
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48 16H16C13.7909 16 12 17.7909 12 20V44C12 46.2091 13.7909 48 16 48H48C50.2091 48 52 46.2091 52 44V20C52 17.7909 50.2091 16 48 16Z" stroke="#1E453E" strokeWidth="2"/>
          <path d="M12 28H52" stroke="#1E453E" strokeWidth="2"/>
          <path d="M28 12V16" stroke="#1E453E" strokeWidth="2"/>
          <path d="M36 12V16" stroke="#1E453E" strokeWidth="2"/>
          <path d="M20 36H44" stroke="#C44D34" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 40H36" stroke="#C44D34" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="44" cy="38" r="2" fill="#C44D34"/>
        </svg>
      ),
      title: "Seamless Service",
      description: "AI-driven CRM and client support."
    }
  ];

  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#C44D34]"></div>
            <span className="mainTxt text-[#C44D34] text-sm font-medium uppercase tracking-wide">Our Advantages</span>
            <div className="w-12 h-0.5 bg-[#C44D34]"></div>
          </div>
          <h2 className="boldTxt text-3xl md:text-4xl text-[#2D3748] mb-4">
            Why Choose <span className="text-[#1E453E]">North Vista Global</span>?
          </h2>
          <p className="mainTxt text-[#6B7280] max-w-2xl mx-auto">
            With decades of combined experience and a global network of partners, we provide unparalleled investment migration solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-[#F8F9FA] rounded-sm border border-gray-200 group hover:shadow-md transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-[#1E453E] bg-opacity-10 p-4 rounded-full mb-5 group-hover:bg-opacity-20 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="boldTxt text-xl text-[#2D3748] mb-3 group-hover:text-[#1E453E] transition-colors duration-300">{feature.title}</h3>
              <p className="mainTxt text-[#6B7280] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="px-8 py-4 bg-[#1E453E] text-white hover:bg-[#2D3748] rounded-sm mainTxt font-medium transition-all duration-300 btn-hover">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;