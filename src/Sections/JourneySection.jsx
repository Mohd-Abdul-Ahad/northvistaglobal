import React from "react";

const JourneySection = () => {
  const steps = [
    {
      title: "Initial Consultation & Program Selection",
      description: "Our experts analyze your goals and recommend the optimal investment strategy tailored to your objectives"
    },
    {
      title: "Client Onboarding & Documentation",
      description: "Complete due diligence and begin the comprehensive application preparation process"
    },
    {
      title: "Application Processing & Government Liaison",
      description: "Our team handles all paperwork, submissions, and government communications on your behalf"
    },
    {
      title: "Approval & Documentation Issuance",
      description: "Receive official approval and your new residency or citizenship documentation"
    },
    {
      title: "Ongoing Support & Compliance",
      description: "Continuous assistance with compliance requirements and future planning strategies"
    },
  ];

  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#C44D34]"></div>
            <span className="mainTxt text-[#C44D34] text-sm font-medium uppercase tracking-wide">Process</span>
            <div className="w极速赛车开奖结果12 h-0.5 bg-[#C44D34]"></div>
          </div>
          <h2 className="boldTxt text-3xl md:text-4xl text-[#2D极速赛车开奖结果3748] mb-4">
            Your Strategic Journey
          </h2>
          <p className="mainTxt text-[#6B7280] max-w-2xl mx-auto">
            A structured, efficient process designed for successful outcomes
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute left-6 md:left-1/2 top-12 bottom-12 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-6 relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0 w-12 h-12 bg-[#1E453E] text-white rounded-sm flex items-center justify-center boldTxt text-lg z-10 shadow-md">
                  {index + 1}
                </div>
                <div className="bg-[#F8F9FA] p-6 rounded-sm border border-gray-200 flex-1 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="boldTxt text-xl text-[#2D3748] mb-3">{step.title}</h3>
                  <p className="mainTxt text-[#6B7280] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

       <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#1E453E] text-white hover:bg-[#1f3f39] rounded-sm mainTxt font-medium transition-all duration-300 btn-hover">
             Download Process Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;