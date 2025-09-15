import React, { useState, useRef, useEffect } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set up intersection observer to trigger animations when section comes into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (faqRefs.current[0]) {
      observer.observe(faqRefs.current[0]);
    }

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How soon can I get started?",
      answer:
        "Today. Book a free consultation, and we'll pre‑qualify your options on the first call.",
    },
    {
      question: "Do you work with licensed attorneys?",
      answer:
        "Yes. We collaborate with vetted, licensed attorneys and regulated partners across jurisdictions.",
    },
    {
      question: "What budgets do I need?",
      answer:
        "Investment programs generally start at $150k and go higher for residency routes like EB‑5 and Golden Visas.",
    },
    {
      question: "Do you serve clients outside North America?",
      answer:
        "Yes. We serve clients globally and tailor plans to your nationality and goals.",
    },
    {
      question: "Is my information private?",
      answer:
        "Absolutely. We protect your data with strict confidentiality and secure processes.",
    },
  ];

  return (
    <section
      className="py-16 px-4 md:px-8 bg-white"
      ref={(el) => (faqRefs.current[0] = el)}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold text-white serif text-center mb-12 opacity-0 ${
            isVisible ? "animate-fade-in" : ""
          }`}
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-lg opacity-0 ${
                isVisible ? "animate-slide-up" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              ref={(el) => (faqRefs.current[index + 1] = el)}
            >
              <button
                className="w-full text-left p-5 md:p-6 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="text-lg md:text-xl font-semibold text-primary interbold pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 ml-2">
                  <svg
                    className={`w-6 h-6 text-black transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 md:p-6 pt-0 mt-5 md:pt-0">
                  <p className="text-primary inter">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center opacity-0 ${
            isVisible ? "animate-fade-in delay-500" : ""
          }`}
        >
          <p className="text-white inter mb-6">
            Still have questions? We're here to help.
          </p>
          <a
            href="/contact"
            className="bg-[#1E453E] hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
