import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#1E453E] to-[#2D3748] text-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            About North Vista Global
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Your trusted partner in global residency and citizenship planning
          </p>
        </div>
      </header>

      {/* Who We Are Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6 text-[#1E453E]">
                Who We Are
              </h2>
              <p className="text-lg text-[#6B7280] mb-6">
                At North Vista Global, we believe that global mobility is the new frontier of freedom. 
                Born from a strategic alliance between North Vista Immigration (NVI) and Strategic Minds 
                Global Consulting (SMGC), our firm empowers investors, entrepreneurs, retirees, and 
                digital nomads to expand their opportunities beyond borders.
              </p>
              <div className="flex items-center space-x-4 mt-8">
                <div className="w-12 h-12 bg-[#C44D34] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1E453E]">Strategic Alliance</h3>
                  <p className="text-[#6B7280]">NVI + SMGC</p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="bg-gray-100 rounded-lg overflow-hidden h-80 flex items-center justify-center">
                <svg className="w-40 h-40 text-[#C44D34]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-[#F8F9FA] px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-slide-in-up">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E5E7EB] h-full">
                <div className="w-16 h-16 bg-[#1E453E] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="font-playfair text-2xl font-semibold mb-4 text-[#1E453E]">Our Mission</h3>
                <p className="text-[#6B7280]">
                  To empower individuals and families with freedom of movement, secure investments, and long-term global opportunities.
                </p>
              </div>
            </div>
            <div className="animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E5E7EB] h-full">
                <div className="w-16 h-16 bg-[#C44D34] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="font-playfair text-2xl font-semibold mb-4 text-[#1E453E]">Our Vision</h3>
                <p className="text-[#6B7280]">
                  To be the world's most trusted partner for residency and citizenship planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-4 text-center text-[#1E453E]">
            Why North Vista Global?
          </h2>
          <p className="text-lg text-[#6B7280] text-center mb-12 max-w-3xl mx-auto">
            We combine global expertise with personalized service to help you achieve your international goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 bg-[#1E453E] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3 text-[#1E453E]">Global Reach, Local Expertise</h3>
              <p className="text-[#6B7280]">Worldwide network with deep local knowledge in key markets.</p>
            </div>

            <div className="text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 bg-[#C44D34] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2zm10-4a2 2 0 11-4 0 2 2 0 014 0zM6 20h4a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3 text-[#1E453E]">Tailored Solutions for HNWIs</h3>
              <p className="text-[#6B7280]">Customized strategies for high-net-worth individuals and families.</p>
            </div>

            <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-[#1E453E] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3 text-[#1E453E]">End-to-End Support</h3>
              <p className="text-[#6B7280]">Comprehensive guidance from initial consultation to successful relocation.</p>
            </div>

            <div className="text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="w-20 h-20 bg-[#C44D34] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3 text-[#1E453E]">Technology-Driven Service</h3>
              <p className="text-[#6B7280]">Advanced tools and platforms for seamless client experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1E453E] to-[#2D3748] text-white px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6">
            Begin Your Global Journey Today
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">
            Whether you're seeking a U.S. Green Card, Canadian residency, European mobility, 
            or a retirement lifestyle abroad — North Vista Global is your trusted partner.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <button className="bg-[#C44D34] hover:bg-[#b3452e] text-white font-medium py-3 px-8 rounded-md transition-all duration-300 btn-hover">
              Book a Free Consultation
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1E453E] text-white font-medium py-3 px-8 rounded-md transition-all duration-300 btn-hover">
              Download Global Residency Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;