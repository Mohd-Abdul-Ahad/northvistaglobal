import React, { useEffect, useRef, useState } from "react";

const partners = [
  {
    name: "Global Partners in Law",
    icon: (
      <svg
        className="w-12 h-12 text-[#1E453E]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 21h8M12 3v18M5 7h14M5 12h14"
        />
      </svg>
    ),
  },
  {
    name: "Finance",
    icon: (
      <svg
        className="w-12 h-12 text-[#1E453E]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M12 3v18m-6 0h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "Real Estate",
    icon: (
      <svg
        className="w-12 h-12 text-[#1E453E]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10l9-6 9 6M4 10v10h16V10M9 21V9h6v12"
        />
      </svg>
    ),
  },
  {
    name: "Wealth",
    icon: (
      <svg
        className="w-12 h-12 text-[#1E453E]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 11V7a4 4 0 018 0v4m-5 6v2m-4 0h8M5 20h.01M5 16h.01M5 12h.01M5 8h.01"
        />
      </svg>
    ),
  },
];

const TrustedBy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-10xl mx-auto">
        <div className="flex flex-wrap justify-center gap-16 items-center">
          {partners.map((partner, idx) => (
            <div 
              key={idx} 
              className={`flex items-center gap-4 animate-swipe-in ${isVisible ? 'animate-swipe-in' : 'opacity-0'}`}
              style={{ animationDelay: isVisible ? `${idx * 0.2}s` : '0s' }}
            >
              <div>{partner.icon}</div>
              <span className="text-4xl md:text-4xl bold text-[#1E453E]">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;


