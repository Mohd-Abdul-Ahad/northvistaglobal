import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-[#1E453E]"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <!-- Outer Circle --> */}
          <circle
            cx="32"
            cy="32"
            r="30"
            stroke="currentColor"
            strokeWidth="2"
          />

          {/* <!-- Vertical Meridians --> */}
          <ellipse
            cx="32"
            cy="32"
            rx="12"
            ry="30"
            stroke="currentColor"
            strokeWidth="2"
          />

          {/* <!-- Horizontal Parallels --> */}
          <path d="M2 32h60" stroke="currentColor" strokeWidth="2" />
          <path
            d="M10 20c7.5 3 20 4 44 0"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M10 44c7.5 -3 20 -4 44 0"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Global Coverage",
      description: "From the USA to the Caribbean, Europe, and Asia.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-[#1E453E]"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 4L8 14v18c0 15.464 12.536 28 28 28s28-12.536 28-28V14L32 4z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M23 35l5 5 13-13"
            stroke="#C44D34"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 30l9 9 6-6"
            stroke="#C44D34"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Trusted Expertise",
      description:
        "Powered by North Vista Immigration & SMGC's global consulting network.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 lg:w-12 lg:h-12"
          viewBox="0 0 64 64"
          fill="none"
        >
          <rect
            x="12"
            y="16"
            width="40"
            height="32"
            rx="4"
            stroke="#1E453E"
            strokeWidth="2"
          />
          <path
            d="M20 24H44M20 32H44M20 40H36"
            stroke="#1E453E"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="42" cy="40" r="2" fill="#C44D34" />
          <circle cx="46" cy="40" r="2" fill="#C44D34" />
          <circle cx="50" cy="40" r="2" fill="#C44D34" />
        </svg>
      ),
      title: "Tailored for HNWIs",
      description:
        "Customized pathways for investors, entrepreneurs & retirees.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 lg:w-12 lg:h-12"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M48 16H16C13.8 16 12 17.8 12 20V44C12 46.2 13.8 48 16 48H48C50.2 48 52 46.2 52 44V20C52 17.8 50.2 16 48 16Z"
            stroke="#1E453E"
            strokeWidth="2"
          />
          <path
            d="M12 28H52M28 12V16M36 12V16M20 36H44M20 40H36"
            stroke="#C44D34"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="44" cy="38" r="2" fill="#C44D34" />
        </svg>
      ),
      title: "Seamless Service",
      description: "AI-driven CRM and client support.",
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FEF2E8] px-6 py-2 rounded-full mb-4">
            <span className="text-[#C44D34] text-base font-medium uppercase tracking-wide">
              Our Advantages
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1E453E] leading-tight mb-4">
            Why Choose North Vista Global?
          </h2>
          <p className="text-xl text-[#4B5563] max-w-3xl mx-auto">
            With decades of combined experience and a global network of
            partners, we provide unparalleled investment migration solutions.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-8 bg-[#F8F9FA] rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-300 text-center"
            >
              <div className="flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-[#1E453E] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#4B5563] text-lg">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-10 py-4 bg-[#1E453E] text-white text-lg rounded-md font-medium hover:bg-[#2D3748] transition-all btn-hover">
            Start Your Journey Today
          </button>
          <p className="text-[#6B7280] text-base mt-4">
            Schedule a free consultation with our experts
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
