import React, { useState } from "react";

const ProgramsSection = () => {
  const [activeTab, setActiveTab] = useState("residence");

  // Flag mapping for country codes
  const flagIcons = {
    USA: "🇺🇸",
    CANADA: "🇨🇦",
    PORTUGAL: "🇵🇹",
    GREECE: "🇬🇷",
    MALTA: "🇲🇹",
    UAE: "🇦🇪",
    PANAMA: "🇵🇦",
    MAURITIUS: "🇲🇺",
    THAILAND: "🇹🇭",
    ESTONIA: "🇪🇪",
    BRAZIL: "🇧🇷",
    COLOMBIA: "🇨🇴",
    INDONESIA: "🇮🇩",
    CARIBBEAN: "🌴",
    EUROPE: "🇪🇺",
  };

  const citizenshipPrograms = [
    {
      name: "USA EB-5",
      description: "Green Card through $800,000+ investment.",
      investment: "From $800,000",
      flag: "USA",
      processing: "24-36 months",
    },
    {
      name: "Canada PNP",
      description: "Entrepreneurial PR pathways.",
      investment: "Contact For Details",
      flag: "CANADA",
      processing: "12-24 months",
    },
    {
      name: "Europe Golden Visas",
      description: "Portugal, Greece, Malta.",
      investment: "Contact For Details",
      flag: "EUROPE",
      processing: "6-12 months",
    },
    {
      name: "Caribbean CBI",
      description: "Fast-track passports.",
      investment: "Contact For Details",
      flag: "CARIBBEAN",
      processing: "3-6 months",
    },
    {
      name: "UAE Golden Visa",
      description: "10-year renewable residency.",
      investment: "Contact For Details",
      flag: "UAE",
      processing: "2-4 months",
    },
  ];

  const residencePrograms = [
    {
      name: "EB-5 Investor Visa",
      description: "Secure U.S. Green Cards through capital investment.",
      investment: "Contact For Details",
      flag: "USA",
      processing: "24-36 months",
    },
    {
      name: "PNP Entrepreneur Streams",
      description: "Pathway to Canadian residency through business.",
      investment: "Contact For Details",
      flag: "CANADA",
      processing: "12-24 months",
    },
    {
      name: "Portugal Golden Visa",
      description: "Residency with Schengen mobility.",
      investment: "Contact For Details",
      flag: "PORTUGAL",
      processing: "6-12 months",
    },
    {
      name: "Caribbean Citizenship by Investment",
      description: "Fast-track passports with visa-free access.",
      investment: "Contact For Details",
      flag: "CARIBBEAN",
      processing: "3-6 months",
    },
    {
      name: "Panama Retiree Residency",
      description: "Premium retirement lifestyle abroad.",
      investment: "Contact For Details",
      flag: "PANAMA",
      processing: "2-4 months",
    },
    {
      name: "Mauritius Retiree Residency",
      description: "Premium retirement lifestyle abroad.",
      investment: "Contact For Details",
      flag: "MAURITIUS",
      processing: "2-3 months",
    },
    {
      name: "Thailand Retiree Residency",
      description: "Premium retirement lifestyle abroad.",
      investment: "Contact For Details",
      flag: "THAILAND",
      processing: "2-3 months",
    },
  ];

  const digitalNomadPrograms = [
    {
      name: "Portugal",
      description: "Digital Nomad Visa for remote workers.",
      benefits: "Legal residency, tax efficiency, global networking.",
      investment: "Contact For Details",
      flag: "PORTUGAL",
      processing: "4-6 weeks",
    },
    {
      name: "Estonia",
      description: "Digital Nomad Visa for location-independent professionals.",
      benefits: "Legal residency, tax efficiency, global networking.",
      investment: "Contact For Details",
      flag: "ESTONIA",
      processing: "3-4 weeks",
    },
    {
      name: "Panama",
      description: "Remote Worker Visa program.",
      benefits: "Legal residency, tax efficiency, global networking.",
      investment: "Contact For Details",
      flag: "PANAMA",
      processing: "4-6 weeks",
    },
    {
      name: "Brazil",
      description: "Digital Nomad Visa for remote professionals.",
      benefits: "Legal residency, tax efficiency, global networking.",
      investment: "Contact For Details",
      flag: "BRAZIL",
      processing: "4-8 weeks",
    },
    {
      name: "Thailand",
      description: "Long-Term Resident Visa for remote workers.",
      benefits: "Legal residency, tax efficiency, global networking.",
      investment: "Contact For Details",
      flag: "THAILAND",
      processing: "6-8 weeks",
    },
    {
      name: "Indonesia",
      description: "B211A Visa for digital nomads.",
      benefits: "Legal residency, tax efficiency, global networking.",
      investment: "Contact For Details",
      flag: "INDONESIA",
      processing: "4-6 weeks",
    },
  ];

  const retireeResidencySolutions = [
    {
      name: "Panama Pensionado",
      description: "Pensionado Visa for retirees with guaranteed income.",
      investment: "Contact For Details",
      flag: "PANAMA",
      processing: "2-3 months",
    },
    {
      name: "Mauritius Retirement",
      description:
        "Retiree Residence Permit for those seeking tropical retirement.",
      investment: "Contact For Details",
      flag: "MAURITIUS",
      processing: "2-3 months",
    },
    {
      name: "Thailand Retirement",
      description: "O-A & O-X Retirement Visas for long-term stays.",
      investment: "Contact For Details",
      flag: "THAILAND",
      processing: "1-2 months",
    },
  ];

  const businessExpansionSolutions = [
    {
      name: "Structuring investments",
      description:
        "International company formation and corporate structuring services.",
      icon: "🏢",
      benefits: "Tax optimization, liability protection, global expansion",
    },
    {
      name: "Executive Relocation",
      description:
        "Comprehensive relocation services for executives and key personnel.",
      icon: "✈️",
      benefits: "Visa assistance, housing, cultural integration",
    },
    {
      name: "Cross-Border Expansion",
      description:
        "Market entry strategy and implementation across jurisdictions.",
      icon: "🌐",
      benefits: "Market research, legal compliance, local partnerships",
    },
  ];

  const legacyPlanningSolutions = [
    {
      name: "Education",
      description:
        "Global education planning and school placement services for families.",
      benefits: "Top schools, cultural adaptation, visa support",
      icon: "🎓",
    },
    {
      name: "Healthcare",
      description:
        "Access to world-class healthcare systems and medical facilities.",
      benefits: "Premium healthcare, medical tourism, insurance",
      icon: "🏥",
    },
    {
      name: "Wealth Diversification",
      description: "International investment and asset protection strategies.",
      benefits:
        "Currency diversification, risk management, growth opportunities",
      icon: "📊",
    },
    {
      name: "Succession Planning",
      description: "Multi-generational wealth transfer and legacy planning.",
      benefits: "Tax efficiency, continuity planning, family governance",
      icon: "👨‍👩‍👧‍👦",
    },
  ];

  // Tab navigation component
  const TabNavigation = () => (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      <button
        className={`px-5 py-2 rounded-full font-medium transition-all ${
          activeTab === "residence"
            ? "bg-[#1E453E] text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
        onClick={() => setActiveTab("residence")}
      >
        Residence Programs
      </button>
      <button
        className={`px-5 py-2 rounded-full font-medium transition-all ${
          activeTab === "citizenship"
            ? "bg-[#1E453E] text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
        onClick={() => setActiveTab("citizenship")}
      >
        Citizenship
      </button>
      <button
        className={`px-5 py-2 rounded-full font-medium transition-all ${
          activeTab === "digital"
            ? "bg-[#1E453E] text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
        onClick={() => setActiveTab("digital")}
      >
        Digital Nomad
      </button>
      <button
        className={`px-5 py-2 rounded-full font-medium transition-all ${
          activeTab === "retirement"
            ? "bg-[#1E453E] text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
        onClick={() => setActiveTab("retirement")}
      >
        Retirement
      </button>
      <button
        className={`px-5 py-2 rounded-full font-medium transition-all ${
          activeTab === "business"
            ? "bg-[#1E453E] text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
        onClick={() => setActiveTab("business")}
      >
        Business
      </button>
      <button
        className={`px-5 py-2 rounded-full font-medium transition-all ${
          activeTab === "legacy"
            ? "bg-[#1E453E] text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
        onClick={() => setActiveTab("legacy")}
      >
        Legacy Planning
      </button>
    </div>
  );

  // Program Card Component
  const ProgramCard = ({ program, type }) => (
    <div className="bg-white p-5 rounded-lg border border-gray-200 h-full flex flex-col transition-all duration-300 hover:shadow-md">
      <div className="flex-grow">
        <div className="flex items-center justify-between mb-3">
          <div className="text-2xl">
            {flagIcons[program.flag] || program.icon}
          </div>
          <div className="bg-[#F0F7F4] text-[#1E453E] text-xs font-medium px-2 py-1 rounded">
            {type}
          </div>
        </div>

        <h3 className="font-bold text-lg text-[#2D3748] mb-2">
          {program.name}
        </h3>

        <p className="text-[#4B5563] text-sm mb-3 leading-relaxed">
          {program.description}
        </p>

        {program.benefits && (
          <div className="mb-3">
            <p className="text-[#1E453E] text-xs font-medium mb-1">Benefits:</p>
            <p className="text-[#4B5563] text-xs">{program.benefits}</p>
          </div>
        )}
      </div>

      <div className="border-t border-gray-100 pt-3 mt-auto">
        <div className="flex justify-between items-center mb-3">
          {program.investment && (
            <div>
              <p className="text-xs text-[#6B7280] uppercase tracking-wide mb-1">
                Investment
              </p>
              <p className="font-semibold text-[#1E453E]">
                {program.investment}
              </p>
            </div>
          )}

          {program.processing && (
            <div className="text-right">
              <p className="text-xs text-[#6B7280] uppercase tracking-wide mb-1">
                Processing
              </p>
              <p className="text-[#4B5563] text-sm">{program.processing}</p>
            </div>
          )}
        </div>

        <button className="w-full px-4 py-2.5 bg-[#1E453E] text-white hover:bg-[#2D3748] rounded text-sm font-medium transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );

  // Section Header Component
  const SectionHeader = ({ title, description }) => (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center gap-2 mb-2 px-4 py-1 bg-[#FEF2E8] rounded-full">
        <span className="text-[#C44D34] text-xs font-medium uppercase tracking-wide">
          Programs
        </span>
      </div>
      <h2 className="font-bold text-2xl text-[#2D3748] mb-2">{title}</h2>
      {description && (
        <p className="text-[#4B5563] max-w-2xl mx-auto text-sm">
          {description}
        </p>
      )}
    </div>
  );

  return (
    <div className="w-full py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="font-bold text-2xl md:text-3xl text-[#2D3748] mb-3">
            Featured Immigration Programs
          </h1>
        </div>

        {/* Tab Navigation */}
        <TabNavigation />

        {/* Tab Content */}
        <div className="mb-12">
          {activeTab === "residence" && (
            <>
              <SectionHeader
                title="Residence by Investment Programs"
                description="Secure residency through investment in countries worldwide"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {residencePrograms.map((program, index) => (
                  <ProgramCard key={index} program={program} type="Residency" />
                ))}
              </div>
            </>
          )}

          {activeTab === "citizenship" && (
            <>
              <SectionHeader
                title="Citizenship by Investment Programs"
                description="Obtain second citizenship through investment"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {citizenshipPrograms.map((program, index) => (
                  <ProgramCard
                    key={index}
                    program={program}
                    type="Citizenship"
                  />
                ))}
              </div>
            </>
          )}

          {activeTab === "digital" && (
            <>
              <SectionHeader
                title="Digital Nomad Programs"
                description="Legal residency options for remote workers"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {digitalNomadPrograms.map((program, index) => (
                  <ProgramCard
                    key={index}
                    program={program}
                    type="Digital Nomad"
                  />
                ))}
              </div>
            </>
          )}

          {activeTab === "retirement" && (
            <>
              <SectionHeader
                title="Retiree Residency Solutions"
                description
                Premium
                retirement
                lifestyle
                destinations
                worldwide
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {retireeResidencySolutions.map((program, index) => (
                  <ProgramCard
                    key={index}
                    program={program}
                    type="Retirement"
                  />
                ))}
              </div>
            </>
          )}

          {activeTab === "business" && (
            <>
              <SectionHeader
                title="Business Expansion Solutions"
                description="Strategic solutions for international business growth"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {businessExpansionSolutions.map((program, index) => (
                  <ProgramCard key={index} program={program} type="Business" />
                ))}
              </div>
            </>
          )}

          {activeTab === "legacy" && (
            <>
              <SectionHeader
                title="Legacy Planning Solutions"
                description="Comprehensive solutions for multi-generational wealth and security"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {legacyPlanningSolutions.map((program, index) => (
                  <ProgramCard
                    key={index}
                    program={program}
                    type="Legacy Planning"
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Consultation CTA Section */}
        <div className="bg-[#F0F7F4] rounded-lg p-6 md:p-8 text-center">
          <h2 className="font-bold text-xl md:text-2xl text-[#2D3748] mb-3">
            Need Personalized Guidance?
          </h2>
          <p className="text-[#4B5563] max-w-2xl mx-auto mb-5">
            Our immigration experts are ready to help you find the perfect
            program for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-2.5 bg-[#1E453E] text-white hover:bg-[#2D3748] rounded font-medium transition-colors duration-300">
              Schedule a Free Consultation
            </button>
            <button className="px-6 py-2.5 bg-white text-[#1E453E] border border-[#1E453E] hover:bg-gray-50 rounded font-medium transition-colors duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsSection;
