import React, { useState, useMemo, useEffect } from "react";
import usaImage from "../assets/Images/countries/usa.webp";
import canadaImage from "../assets/Images/countries/canada.webp";
import portugalImage from "../assets/Images/countries/portugal.webp";
import uaeImage from "../assets/Images/countries/uae.webp";
import panamaImage from "../assets/Images/countries/panama.webp";
import mauritiusImage from "../assets/Images/countries/mauritius.webp";
import thailandImage from "../assets/Images/countries/Thailand.webp";
import estoniaImage from "../assets/Images/countries/estonia.webp";
import brazilImage from "../assets/Images/countries/Brazil.webp";
import indonesiaImage from "../assets/Images/countries/Indonesia.webp";
import caribbeanImage from "../assets/Images/countries/caribbean.webp";
import europeImage from "../assets/Images/countries/europe.webp";
import ColombiaImage from "../assets/Images/countries/Colombia.jpg";

// Import images for business and legacy sections
import structuringInvestmentsImg from "../assets/Images/countries/structuringinvestments.webp";
import executiveRelocationImg from "../assets/Images/countries/businessrelocation.webp";
import crossBorderExpansionImg from "../assets/Images/countries/crossborderexpansion.webp";
import educationImg from "../assets/Images/countries/education.webp";
import healthcareImg from "../assets/Images/countries/healthcare.webp";
import wealthDiversificationImg from "../assets/Images/countries/wealthdiversification.webp";
import successionPlanningImg from "../assets/Images/countries/successionplanning.webp";
import SEO from "../Components/Seo";

import { Link } from "react-router-dom";

const ProgramsSection = () => {
  const [activeTab, setActiveTab] = useState("residence");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get("tab");

    if (tab && sections.some((section) => section.id === tab)) {
      setActiveTab(tab);

      // Optional: Scroll to section
      const section = document.getElementById("programs");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const countryImages = {
    USA: usaImage,
    CANADA: canadaImage,
    PORTUGAL: portugalImage,
    UAE: uaeImage,
    PANAMA: panamaImage,
    MAURITIUS: mauritiusImage,
    THAILAND: thailandImage,
    ESTONIA: estoniaImage,
    BRAZIL: brazilImage,
    INDONESIA: indonesiaImage,
    CARIBBEAN: caribbeanImage,
    EUROPE: europeImage,
    COLOMBIA: ColombiaImage,
  };

  const citizenshipPrograms = [
    {
      name: "EB-5 Investor Visa",
      description:
        "Green Card via $800K+ investment through approved channels.",
      investment: "$800,000+",
      flag: "USA",
      processing: "24-36 months",
      bullets: [
        "Family coverage",
        "Job-creation compliance",
        "Access to U.S. education & markets",
      ],
      cta: "Explore EB-5",
    },
    {
      name: "Newbrunswick PNP Entrepreneur Streams",
      description: "Build or acquire a business for pathways to Canadian PR.",
      investment: "$150,000 - $600,000 CAD",
      flag: "CANADA",
      processing: "12–18 months ",
      bullets: ["Job creation, Provincial nomination"],
      cta: "Explore Canada PNP",
    },
    {
      name: "Europe – Golden Visas (Portugal, Greece, Malta)",
      description:
        "Residency with Schengen mobility and future EU citizenship.",
      investment: "Contact For Details.",
      flag: "EUROPE",
      processing: "Contact For Details.",
    },
    {
      name: "Caribbean Citizenship by Investment",
      description: "Fast-track passports with visa-free access.",
      investment: "Contact For Details",
      flag: "CARIBBEAN",
      processing: "Contact For Details.",
    },
    {
      name: "UAE Golden Visa",
      description: "Renewable 10-year residency in a tax-free hub.",
      investment: "Contact For Details.",
      flag: "UAE",
      processing: "Contact For Details.",
    },
  ];

  const residencePrograms = [
    {
      name: "EB-5 Investor Visa",
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
      name: "Newbrunswick PNP Entrepreneur Streams",
      description: "Build or acquire a business for pathways to Canadian PR.",
      investment: "$150,000 - $600,000 CAD",
      flag: "CANADA",
      processing: "12–18 months for PR nomination and approval",
      bullets: ["Job creation, Provincial nomination"],
      cta: "Explore Canada PNP",
    },
    {
      name: "Europe – Golden Visas (Portugal, Greece, Malta)",
      description:
        "Residency with Schengen mobility and future EU citizenship.",
      investment: "Contact For Details.",
      flag: "EUROPE",
      processing: "Contact For Details.",
    },
    {
      name: "Caribbean Citizenship by Investment",
      description: "Fast-track passports with visa-free access.",
      investment: "Contact For Details",
      flag: "CARIBBEAN",
      processing: "Contact For Details.",
    },
    {
      name: "UAE Golden Visa",
      description: "Renewable 10-year residency in a tax-free hub.",
      investment: "Contact For Details.",
      flag: "UAE",
      processing: "Contact For Details.",
    },
  ];

  const digitalNomadPrograms = [
    {
      name: "Portugal",
      description:
        "Flexible legal residency for remote professionals seeking mobility and tax advantages.",
      investment: "Contact For Details.",
      flag: "PORTUGAL",
      processing: "Contact For Details.",
    },
    {
      name: "Estonia",
      description:
        "Flexible legal residency for remote professionals seeking mobility and tax advantages.",
      investment: "Contact For Details",
      flag: "ESTONIA",
      processing: "6–12 weeks depending on country",
    },
    {
      name: "Panama",
      description:
        "Flexible legal residency for remote professionals seeking mobility and tax advantages.",
      investment: "Contact For Details",
      flag: "PANAMA",
      processing: "6–12 weeks depending on country",
    },
    {
      name: "Colombia",
      description:
        "Flexible legal residency for remote professionals seeking mobility and tax advantages.",
      investment: "Contact For Details",
      flag: "COLOMBIA",
      processing: "Contact For Details.",
    },
    {
      name: "Thailand",
      description:
        "Flexible legal residency for remote professionals seeking mobility and tax advantages.",
      investment: "Contact For Details",
      flag: "THAILAND",
      processing: "Contact For Details.",
    },
    {
      name: "Indonesia",
      description:
        "Flexible legal residency for remote professionals seeking mobility and tax advantages.",
      investment: "Contact For Details",
      flag: "INDONESIA",
      processing: "Contact For Details.",
    },
  ];

  const retireeResidencySolutions = [
    {
      name: "Panama Pensionado",
      description: "Permanent residency with pension‑based eligibility.",
      investment: "Contact for Details.",
      flag: "PANAMA",
      processing: "3–4 months for permanent residency approval",
      bullets: [
        "Lifestyle discounts, No tax on foreign income, Friendly expat communities ",
      ],
      cta: "Explore Pensionado",
    },
    {
      name: "Mauritius Retirement",
      description:
        "Affordable, secure, and lifestyle-driven retirement destinations.",
      investment: "Contact For Details.",
      flag: "MAURITIUS",
      processing: "	4–6 weeks",
    },
    {
      name: "Thailand Retirement",
      description:
        "Affordable, secure, and lifestyle-driven retirement destinations.",
      investment: "Contact For Details.",
      flag: "THAILAND",
      processing: "6–8 weeks",
    },
  ];

  const businessExpansionSolutions = [
    {
      name: "Structuring investments",
      description:
        "International company formation and corporate structuring services.",
      image: structuringInvestmentsImg,
      benefits: "Tax optimization, liability protection, global expansion",
    },
    {
      name: "Executive Relocation",
      description:
        "Comprehensive relocation services for executives and key personnel.",
      image: executiveRelocationImg,
      benefits: "Visa assistance, housing, cultural integration",
    },
    {
      name: "Cross-Border Expansion",
      description:
        "Market entry strategy and implementation across jurisdictions.",
      image: crossBorderExpansionImg,
      benefits: "Market research, legal compliance, local partnerships",
    },
  ];

  const legacyPlanningSolutions = [
    {
      name: "Education",
      description:
        "Global education planning and school placement services for families.",
      benefits: "Top schools, cultural adaptation, visa support",
      image: educationImg,
    },
    {
      name: "Healthcare",
      description:
        "Access to world-class healthcare systems and medical facilities.",
      benefits: "Premium healthcare, medical tourism, insurance",
      image: healthcareImg,
    },
    {
      name: "Wealth Diversification",
      description: "International investment and asset protection strategies.",
      benefits:
        "Currency diversification, risk management, growth opportunities",
      image: wealthDiversificationImg,
    },
    {
      name: "Succession Planning",
      description: "Multi-generational wealth transfer and legacy planning.",
      benefits: "Tax efficiency, continuity planning, family governance",
      image: successionPlanningImg,
    },
  ];

  const sections = [
    { id: "residence", label: "Residence Programs", data: residencePrograms },
    { id: "citizenship", label: "Citizenship", data: citizenshipPrograms },
    { id: "digital", label: "Digital Nomad", data: digitalNomadPrograms },
    { id: "retirement", label: "Retirement", data: retireeResidencySolutions },
    { id: "business", label: "Business", data: businessExpansionSolutions },
    { id: "legacy", label: "Legacy Planning", data: legacyPlanningSolutions },
  ];

  const TabNavigation = () => (
    <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10 animate-fade-in overflow-x-auto py-2 px-1">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setActiveTab(id)}
          className={`px-3 py-1.5 md:px-5 md:py-2 rounded-full font-semibold transition-all text-sm md:text-base whitespace-nowrap ${
            activeTab === id
              ? "bg-[#1E453E] text-white"
              : "bg-white text-[#1E453E] border border-[#1E453E] hover:bg-[#1E453E] hover:text-white"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );

  const ProgramCard = React.memo(({ program, type }) => (
    <div className="bg-white rounded-lg border border-[#1E453E]/20 h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden">
      {/* Image at the top of the card */}
      <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
        {countryImages[program.flag] ? (
          <img
            src={countryImages[program.flag]}
            loading="lazy"
            alt={`${program.name} flag`}
            className="w-full h-full object-cover"
          />
        ) : program.image ? (
          <img
            src={program.image}
            loading="lazy"
            alt={program.name}
            className="w-full h-full object-cover"
          />
        ) : null}
      </div>

      <div className="p-4 md:p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-2 md:mb-3">
            <div className="bg-[#1E453E] text-white text-xs font-medium px-2 py-1 rounded">
              {type}
            </div>
          </div>

          <h3 className="text-base md:text-lg text-[#1E453E] font-bold mb-2">
            {program.name}
          </h3>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
            {program.description}
          </p>

          {/* Bullet points for EB-5 */}
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

          {program.benefits && (
            <div className="mb-3">
              <p className="text-xs font-semibold text-[#1E453E] mb-1">
                Benefits:
              </p>
              <p className="text-xs text-gray-600">{program.benefits}</p>
            </div>
          )}
        </div>

        <div className="border-t border-[#1E453E]/20 pt-3 mt-auto">
          <div className="flex flex-col sm:flex-row justify-between gap-2 mb-3 text-xs text-gray-600">
            {program.investment && (
              <div className="flex-1">
                <p className="uppercase mb-1 font-semibold">Investment</p>
                <p className="font-bold text-[#1E453E] break-words">
                  {program.investment}
                </p>
              </div>
            )}
            {program.processing && (
              <div className="flex-1 sm:text-right">
                <p className="uppercase mb-1 font-semibold">Processing</p>
                <p className="break-words">{program.processing}</p>
              </div>
            )}
          </div>
          <div className="border-t border-[#1E453E]/20 pt-3 mt-auto">
            <div className="flex justify-between items-center mb-3 text-xs text-gray-600 italic">
              <p className="text-xs">
                Processing times are averages and subject to change based on
                applicant profile and government processing.
              </p>
            </div>
          </div>
          <Link to="/contact">
            <button className="w-full px-3 py-2 md:px-4 md:py-2.5 bg-[#1E453E] text-white hover:bg-[#2a5c52] rounded text-sm font-medium transition-colors">
              {program.cta || "Learn More"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  ));

  const SectionHeader = ({ title, description }) => (
    <div className="text-center mb-6 md:mb-8">
      <div className="inline-flex items-center justify-center gap-2 mb-2 px-3 py-1 md:px-4 md:py-1 bg-[#1E453E] rounded-full">
        <span className="text-white text-xs font-medium uppercase tracking-wide">
          Programs
        </span>
      </div>
      <h2 className="text-xl md:text-2xl lg:text-3xl text-[#1E453E] font-bold mb-2">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 max-w-2xl mx-auto text-sm px-2">
          {description}
        </p>
      )}
    </div>
  );

  const activeData = useMemo(() => {
    return sections.find((s) => s.id === activeTab);
  }, [activeTab]);

  return (
    <>
      <SEO />
      <div id="programs" className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Page Header */}
          <div className="text-center mb-8 md:mb-10 animate-fade-in">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#1E453E] font-bold mb-3">
              Our Services
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto px-2 text-sm md:text-base">
              Discover our comprehensive range of global immigration and
              investment programs tailored to your needs.
            </p>
          </div>

          {/* Tabs */}
          <TabNavigation />

          {/* Content */}
          <div className="mb-10 md:mb-12">
            <SectionHeader
              title={activeData.label}
              description={`Explore opportunities for ${activeData.label.toLowerCase()} around the world.`}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {activeData.data.map((program, idx) => (
                <ProgramCard
                  key={idx}
                  program={program}
                  type={activeData.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramsSection;
