import React from "react";

const ProgramsSection = () => {
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
    },
    {
      name: "Canada PNP",
      description: "Entrepreneurial PR pathways.",
      flag: "CANADA",
    },
    {
      name: "Europe Golden Visas",
      description: "Portugal, Greece, Malta.",
      flag: "EUROPE",
    },
    {
      name: "Caribbean CBI",
      description: "Fast-track passports.",
      flag: "CARIBBEAN",
    },
    {
      name: "UAE Golden Visa",
      description: "10-year renewable residency.",
      flag: "UAE",
    },
  ];

  const residencePrograms = [
    {
      name: "EB-5 Investor Visa",
      description:
        "Secure U.S. Green Cards through capital investment.",
      flag: "USA",
    },
    {
      name: "PNP Entrepreneur Streams",
      description:
        "Pathway to Canadian residency through business.",
      flag: "CANADA",
    },
    {
      name: "Portugal Golden Visa",
      description:
        "Residency with Schengen mobility.",
      flag: "PORTUGAL",
    },
    {
      name: "Caribbean Citizenship by Investment",
      description:
        "Fast-track passports with visa-free access.",
      flag: "CARIBBEAN",
    },
    {
      name: "Retiree Residency",
      description:
        "Premium retirement lifestyle abroad.",
      flag: "PANAMA",
    },
     {
      name: "Retiree Residency",
      description:
        "Premium retirement lifestyle abroad.",
      flag: "MAURITIUS",
    },
    {
      name: "Retiree Residency",
      description:
        "Premium retirement lifestyle abroad.",
      flag: "THAILAND",
    },
  ];

  const digitalNomadPrograms = [
    {
      name: "Portugal",

      benefits: "Legal residency, tax efficiency, global networking.",
      flag: "PORTUGAL",
    },
    {
      name: "Estonia",

      benefits: "Legal residency, tax efficiency, global networking.",
      flag: "ESTONIA",
    },
    {
      name: "Panama",

      benefits: "Legal residency, tax efficiency, global networking.",
      flag: "PANAMA",
    },
    {
      name: "Brazil",

      benefits: "Legal residency, tax efficiency, global networking.",
      flag: "BRAZIL",
    },
    {
      name: "Thailand",
      benefits: "Legal residency, tax efficiency, global networking.",
      flag: "THAILAND",
    },
    {
      name: "Indonesia",
      benefits: "Legal residency, tax efficiency, global networking.",
      flag: "INDONESIA",
    },
  ];

  const retireeResidencySolutions = [
    {
      name: "Panama Pensionado",
      description: "Pensionado Visa.",
      flag: "PANAMA",
    },
    {
      name: "Mauritius Retirement",
      description:
        "Retiree Residence Permit.",
      flag: "MAURITIUS",
    },
    {
      name: "Thailand Retirement",
      description:
        "O-A & O-X Retirement Visas.",
      flag: "THAILAND",
    },
  ];

  const businessExpansionSolutions = [
    {
      name: "Structuring investments",
      description:
        "International company formation and corporate structuring services.",
      icon: "🏢",
    },
    {
      name: "Executive Relocation",
      description:
        "Comprehensive relocation services for executives and key personnel.",
      icon: "✈️",
    },
    {
      name: "Cross-Border Expansion",
      description:
        "Market entry strategy and implementation across jurisdictions.",
      icon: "🌐",
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

  // Unified Card Component
  const ProgramCard = ({ program, type, showInvestment = true }) => (
    <div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 h-full flex flex-col group">
      <div className="flex-grow">
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl">
            {flagIcons[program.flag] || program.icon || program.flag}
          </div>
          {type && (
            <div className="bg-[#F8F9FA] text-[#1E453E] text-xs font-medium px-3 py-1 rounded-sm">
              {type}
            </div>
          )}
        </div>

        <h3 className="boldTxt text-xl text-[#2D3748] mb-3 group-hover:text-[#1E453E] transition-colors duration-300">
          {program.name}
        </h3>

        <p className="mainTxt text-[#6B7280] mb-4 leading-relaxed">
          {program.description}
        </p>

        {program.benefits && (
          <div className="mb-4">
            <p className="mainTxt text-[#1E453E] text-sm font-medium mb-1">
              Benefits:
            </p>
            <p className="mainTxt text-[#6B7280] text-sm">{program.benefits}</p>
          </div>
        )}
      </div>

      <div className="border-t border-gray-100 pt-4 mt-auto">
        <div className="flex justify-between items-center mb-4">
          {showInvestment && program.investment && (
            <div>
              <p className="mainTxt text-xs text-[#6B7280] uppercase tracking-wide">
                Investment
              </p>
              <p className="boldTxt text-[#1E453E] text-lg">
                {program.investment}
              </p>
            </div>
          )}

          {program.processing && (
            <div
              className={
                showInvestment && program.investment ? "text-right" : ""
              }
            >
              <p className="mainTxt text-xs text-[#6B7280] uppercase tracking-wide">
                Processing
              </p>
              <p className="mainTxt text-[#6B7280]">{program.processing}</p>
            </div>
          )}
        </div>

        <button className="w-full px-4 py-3 bg-[#1E453E] text-white hover:bg-[#2D3748] rounded-sm mainTxt font-medium transition-colors duration-300 btn-hover">
          Program Details
        </button>
      </div>
    </div>
  );

  // Section Header Component
  const SectionHeader = ({ title, description }) => (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-12 h-0.5 bg-[#C44D34]"></div>
        <span className="mainTxt text-[#C44D34] text-sm font-medium uppercase tracking-wide">
          Programs
        </span>
        <div className="w-12 h-0.5 bg-[#C44D34]"></div>
      </div>
      <h2 className="boldTxt text-3xl md:text-4xl text-[#2D3748] mb-4">
        {title}
      </h2>
      {description && (
        <p className="mainTxt text-[#6B7280] max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );

  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        {/* Residence Programs */}
        <div className="mb-16">
          <SectionHeader
            title="Featured Immigration Programs"
            description="Residence by Investment Programs for global mobility"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {residencePrograms.map((program, index) => (
              <ProgramCard
                key={index}
                program={program}
                type="Residency"
                showInvestment={true}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-[#1E453E] text-white hover:bg-[#2D3748] rounded-sm mainTxt font-medium transition-all duration-300 btn-hover">
              Explore All Programs
            </button>
          </div>
        </div>
        {/* Citizenship Programs */}
        <div className="mb-16">
          <SectionHeader
            title="Residency & Citizenship by Investment"
            description="Premium investment migration programs for global mobility"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {citizenshipPrograms.map((program, index) => (
              <ProgramCard
                key={index}
                program={program}
                type="Citizenship"
                showInvestment={true}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-[#1E453E] text-white hover:bg-[#2D3748] rounded-sm mainTxt font-medium transition-all duration-300 btn-hover">
              Explore Investment Residency Programs
            </button>
          </div>
        </div>

        {/* Digital Nomad Programs */}
        <div className="mb-16">
          <SectionHeader
            title="Digital Nomad Programs"
            description="Remote work visas for location-independent professionals"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalNomadPrograms.map((program, index) => (
              <ProgramCard
                key={index}
                program={program}
                type="Digital Nomad"
                showInvestment={false}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-[#1E453E] text-white hover:bg-[#2D3748] rounded-sm mainTxt font-medium transition-all duration-300 btn-hover">
              View Digital Nomad Options
            </button>
          </div>
        </div>

        {/* Retiree Residency Solutions */}
        <div className="mb-16">
          <SectionHeader
            title="Retiree Residency Solutions"
            description="Premium retirement lifestyle destinations worldwide"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {retireeResidencySolutions.map((program, index) => (
              <ProgramCard
                key={index}
                program={program}
                type="Retirement"
                showInvestment={false}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-[#1E453E] text-white hover:bg-[#2D3748] rounded-sm mainTxt font-medium transition-all duration-300 btn-hover">
              Plan Your Retirement Abroad
            </button>
          </div>
        </div>

        {/* Business Expansion Solutions */}
        <div className="mb-16">
          <SectionHeader
            title="Business Expansion & Global Mobility"
            description="Strategic solutions for international business growth"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessExpansionSolutions.map((program, index) => (
              <ProgramCard
                key={index}
                program={program}
                type="Business"
                showInvestment={false}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-[#1E453E] text-white hover:bg-[#2D3748] rounded-sm mainTxt font-medium transition-all duration-300 btn-hover">
              Expand Your Business Globally
            </button>
          </div>
        </div>

        {/* Legacy Planning Solutions */}
        <div>
          <SectionHeader
            title="Legacy Planning & Family Security"
            description="Comprehensive solutions for multi-generational wealth and security"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legacyPlanningSolutions.map((program, index) => (
              <ProgramCard
                key={index}
                program={program}
                type="Family"
                showInvestment={false}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-[#1E453E] text-white hover:bg-[#2D3748] rounded-sm mainTxt font-medium transition-all duration-300 btn-hover">
              Secure Your Family's Future
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsSection;
