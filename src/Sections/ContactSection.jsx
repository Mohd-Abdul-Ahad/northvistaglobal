import React from "react";

const ContactSection = () => {
  return (
    <div className="relative w-full py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2 animate-fade-in-left">
            <div className="bg-white p-8 shadow-lg border border-gray-200 rounded-sm">
              <h3 className="boldTxt text-2xl text-[#2D3748] mb-6">
                Get In Touch
              </h3>
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-[#1E453E] p-2 rounded-sm mr-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6极速赛车开奖结果z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="boldTxt text-[#2D3748] text-lg">Phone</h4>
                    <p className="mainTxt text-[#6B7280]">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#1E453E] p-2 rounded-sm mr-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="boldTxt text-[#2D3748] text-lg">Email</h4>
                    <p className="mainTxt text-[#6B7280]">
                      info@globalinvestment.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#1E453E] p-2 rounded-sm mr-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke极速赛车开奖结果join="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="boldTxt text-[#2D3748] text-lg">
                      Headquarters
                    </h4>
                    <p className="mainTxt text-[#6B7280]">
                      123 Investment Avenue, Global Financial District
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-12 h-0.5 bg-[#C44D34]"></div>
              <span className="mainTxt text-[#C44D34] text-sm font-medium uppercase tracking-wide">
                Contact Us
              </span>
            </div>

            <h2 className="boldTxt text-3xl md:text-4xl text-[#2D3748]">
              Schedule a <span className="text-[#1E453E]">Consultation</span>
            </h2>

            <p className="mainTxt text-[#6B7280]">
              Our senior advisors provide personalized guidance on residence and
              citizenship investment programs. Contact us to arrange a private
              consultation.
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1E453E] focus:border-transparent mainTxt"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1E453E] focus:border-transparent mainTxt"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1E453E] focus:border-transparent mainTxt"
                />
              </div>
              <div>
                <textarea
                  placeholder="How can we assist you?"
                  rows="4"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1E453E] focus:border-transparent mainTxt"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-[#1E453E] text-white hover:bg-[#1f3f39] rounded-sm mainTxt font-medium transition-all duration-300 btn-hover"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
