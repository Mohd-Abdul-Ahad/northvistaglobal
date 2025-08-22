import React from "react";

const partners = [
  {
    name: "Global Partners in Law",
    icon: (
      <svg
        className="w-10 h-10 text-[#1E453E]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M8 21h8M12 3v18M5 7h14M5 12h14"
        />
      </svg>
    ),
  },
  {
    name: "Global Partners in Finance",
    icon: (
      <svg
        className="w-10 h-10 text-[#1E453E]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M3 10h18M12 3v18m-6 0h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "Global Partners in Real Estate",
    icon: (
      <svg
        className="w-10 h-10 text-[#1E453E]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M3 10l9-6 9 6M4 10v10h16V10M9 21V9h6v12"
        />
      </svg>
    ),
  },
  {
    name: "Global Partners in Wealth",
    icon: (
      <svg
        className="w-10 h-10 text-[#1E453E]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M11 11V7a4 4 0 018 0v4m-5 6v2m-4 0h8M5 20h.01M5 16h.01M5 12h.01M5 8h.01"
        />
      </svg>
    ),
  },
];

const TrustedBy = () => {
  return (
    <section className="bg-[#F8F9FA] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold boldTxt text-[#1E453E] mb-16 leading-tight">
          Trusted by Global Citizens Worldwide
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#E5E7EB] p-8 w-full max-w-xs shadow-sm hover:shadow-md transition-all text-center"
            >
              <div className="mb-4 flex items-center justify-center">
                {partner.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#1E453E]">{partner.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
