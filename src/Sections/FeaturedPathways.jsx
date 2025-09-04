import React from "react";
import usaFlag from "../assets/Images/countries/usa.webp";
import canadaFlag from "../assets/Images/countries/canada.webp";
import panamaFlag from "../assets/Images/countries/panama.webp";

const FeaturedPathways = () => {
  const featuredPrograms = [
    {
      name: "EB-5 Investor Visa (USA)",
      description:
        "Green Card via $800K+ investment through approved channels.",
      investment: "$800,000+",
      flag: "USA",
      processing:
        "24–36 months for I-526E adjudication; concurrent AOS filing possible",
      bullets: [
        "Family coverage",
        "Job-creation compliance",
        "Access to U.S. education & markets",
      ],
      cta: "Explore EB-5",
    },
    {
      name: "New Brunswick PNP Entrepreneur Streams",
      description: "Build or acquire a business for pathways to Canadian PR.",
      investment: "CAD $150K–$600K",
      flag: "CANADA",
      processing: "12–18 months for PR nomination and approval",
      bullets: [
        "CAD $150K–$600K investments",
        "Job creation",
        "Provincial nomination",
      ],
      cta: "Explore Canada PNP",
    },
    {
      name: "Panama Pensionado (Retiree)",
      description: "Permanent residency with pension-based eligibility.",
      investment: "Contact for Details",
      flag: "PANAMA",
      processing: "3–4 months for permanent residency approval  ",
      bullets: [
        "Lifestyle discounts",
        "No tax on foreign income",
        "Friendly expat communities",
      ],
      cta: "Explore Pensionado",
    },
  ];

  const flagImages = {
    USA: usaFlag,
    CANADA: canadaFlag,
    PANAMA: panamaFlag,
  };

  const ProgramCard = ({ program }) => (
    <div className="bg-white rounded-lg border border-[#1E453E]/20 h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden">
      {/* Image at the top of the card */}
      <div className="w-full h-80 overflow-hidden">
        {flagImages[program.flag] && (
          <img
            src={flagImages[program.flag]}
            loading="lazy"
            alt={`${program.name} flag`}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-[#1E453E] text-white text-xs font-medium px-2 py-1 rounded">
              Featured
            </div>
          </div>

          <h3 className="text-lg text-[#1E453E] font-bold mb-2">
            {program.name}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            {program.description}
          </p>

          {/* Bullet points */}
          {program.bullets && (
            <div className="mb-3">
              <ul className="text-xs text-gray-600 space-y-1">
                {program.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#1E453E] mr-2">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="border-t border-[#1E453E]/20 pt-3 mt-auto">
          <div className="flex justify-between items-center mb-3 text-xs text-gray-600">
            {program.investment && (
              <div>
                <p className="uppercase mb-1 font-semibold">Investment</p>
                <p className="font-bold text-[#1E453E]">{program.investment}</p>
              </div>
            )}
            {program.processing && (
              <div className="text-right">
                <p className="uppercase mb-1 font-semibold">Processing</p>
                <p className="w-60">{program.processing}</p>
              </div>
            )}
          </div>
          <div className="border-t border-[#1E453E]/20 pt-3 mt-auto">
            <div className="flex justify-between items-center mb-3 text-xs text-gray-600 italic">
              <p>
                Processing times are averages and subject to change based on
                applicant profile and government processing.
              </p>
            </div>
          </div>
          <button className="w-full px-4 py-2.5 bg-[#1E453E] text-white hover:bg-[#2a5c52] rounded text-sm font-medium transition-colors">
            {program.cta || "Learn More"}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-2 px-4 py-1 bg-[#1E453E] rounded-full">
            <span className="text-white text-xs font-medium uppercase tracking-wide">
              Featured
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl text-[#1E453E] font-bold mb-3">
            Featured Programs
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our most popular immigration and investment pathways
            tailored to your needs.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPrograms.map((program, idx) => (
            <ProgramCard key={idx} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPathways;
