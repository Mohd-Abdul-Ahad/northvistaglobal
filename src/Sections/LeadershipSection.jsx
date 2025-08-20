import React from 'react';

const LeadershipSection = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-playfair text-4xl md:text-5xl font-semibold mb-6 text-[#1E453E]">
            Leadership
          </h1>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Meet the visionaries guiding North Vista Global towards empowering global mobility
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Leadership Cards */}
          <div className="space-y-12">
            {/* Nabeel Khan */}
            <div className="animate-fade-in-left">
              <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] p-8 h-full transition-all duration-300 hover:shadow-md">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-24 h-24 bg-[#1E453E] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-semibold mb-2 text-[#1E453E]">Nabeel Khan</h3>
                    <p className="text-[#C44D34] font-medium mb-4">Founder, North Vista Immigration</p>
                    <p className="text-[#6B7280]">
                      With extensive experience in immigration consulting, Nabeel Khan founded North Vista Immigration 
                      with a vision to simplify global mobility for individuals and families seeking new opportunities abroad.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sampann Malhotra */}
            <div className="animate-fade-in-left" style={{animationDelay: '0.1s'}}>
              <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] p-8 h-full transition-all duration-300 hover:shadow-md">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-24 h-24 bg-[#C44D34] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-semibold mb-2 text-[#1E453E]">Sampann Malhotra</h3>
                    <p className="text-[#C44D34] font-medium mb-4">Director, SMGC | Business Development Consultant at NVI</p>
                    <p className="text-[#6B7280]">
                      Sampann Malhotra brings strategic vision and business development expertise to the partnership, 
                      driving growth initiatives and fostering international relationships that benefit our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-[#1E453E] to-[#2D3748] text-white rounded-xl p-8 h-full">
              <h2 className="font-playfair text-3xl font-semibold mb-8 text-center">Our Values</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#C44D34] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Excellence</h3>
                    <p className="opacity-90">We strive for the highest standards in all our services and client interactions.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#C44D34] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Integrity</h3>
                    <p className="opacity-90">We maintain honesty and strong moral principles in all our business dealings.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#C44D34] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Confidentiality</h3>
                    <p className="opacity-90">We protect our clients' privacy and handle all information with utmost discretion.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#C44D34] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Innovation</h3>
                    <p className="opacity-90">We continuously evolve our approaches to provide cutting-edge solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#C44D34] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Legacy</h3>
                    <p className="opacity-90">We help clients build lasting foundations for future generations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E5E7EB] my-16"></div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6 text-[#1E453E]">
            Your Global Journey Starts Here
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto mb-10">
            Begin your path to global residency and citizenship with our expert guidance
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <button className="bg-[#C44D34] hover:bg-[#b3452e] text-white font-medium py-3 px-8 rounded-md transition-all duration-300 btn-hover">
              Book a Free Consultation
            </button>
            <button className="bg-transparent border-2 border-[#1E453E] hover:bg-[#1E453E] hover:text-white text-[#1E453E] font-medium py-3 px-8 rounded-md transition-all duration-300 btn-hover">
              Explore Our Programs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipSection;