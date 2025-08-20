import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is citizenship by investment?",
      answer: "Citizenship by investment programs allow qualified individuals to obtain citizenship in a country by making a significant economic contribution, typically through real estate investment, government donations, or business investments."
    },
    {
      question: "How long does the application process take?",
      answer: "Processing times vary by program but typically range from 3 to 12 months depending on the country and the complexity of the application."
    },
    {
      question: "Can my family be included in the application?",
      answer: "Most programs allow the inclusion of immediate family members such as spouses, children, and sometimes parents or siblings in the application."
    },
    {
      question: "What are the benefits of a second citizenship?",
      answer: "Benefits include visa-free travel, expanded business opportunities, tax planning advantages, political and economic stability, and better education and healthcare options for your family."
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#C44D34]"></div>
            <span className="mainTxt text-[#C44D34] text-sm font-medium uppercase tracking-wide">FAQ</span>
            <div className="w-12 h-0.5 bg-[#C44D34]"></div>
          </div>
          <h2 className="boldTxt text-3xl md:text-4xl text-[#2D3748] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="mainTxt text-[#6B7280] max-w-2xl mx-auto">
            Find answers to common questions about our investment programs and services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-sm bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left p-5 focus:outline-none"
              >
                <h3 className="boldTxt text-lg text-[#2D3748] pr-4">{faq.question}</h3>
                <span className="ml-4 text-[#1E453E] text-xl font-bold flex-shrink-0">
                  {activeIndex === index ? 
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg> : 
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  }
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-5 pb-5 mainTxt text-[#6B7280] border-t border-gray-100 pt-4 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#1E453E] text-white hover:bg-[#1f3f39] rounded-sm mainTxt font-medium transition-all duration-300 btn-hover">
             Contact Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;