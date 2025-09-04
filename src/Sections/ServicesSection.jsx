import React from "react";

const ServicesSection = () => {
  const PassportIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      xmlSpace="preserve"
      width={46}
      height={46}
      {...props}
      aria-hidden="true"
    >
      <path
        d="M13.675 0h-11.35C1.9 0 1.55 0.35 1.55 0.775v14.45C1.55 15.65 1.9 16 2.325 16h11.35c0.425 0 0.775 -0.35 0.775 -0.775V0.775C14.45 0.35 14.1 0 13.675 0M8 10.063c-2.275 0 -4.125 -1.85 -4.125 -4.125S5.725 1.813 8 1.813s4.125 1.85 4.125 4.125S10.275 10.063 8 10.063m-1.612 -2.65h1.488v-1.337h-1.6c0.012 0.5 0.05 0.937 0.112 1.337m-1.55 0.263a3.596 3.596 0 0 0 1.9 1.637c-0.188 -0.337 -0.425 -0.875 -0.575 -1.637zM6.275 5.8h1.612v-1.337h-1.5c-0.063 0.388 -0.1 0.837 -0.112 1.337m-0.263 0.275h-1.625c0.012 0.475 0.137 0.925 0.325 1.337h1.413c-0.063 -0.4 -0.112 -0.837 -0.112 -1.337m0.712 -3.525a3.596 3.596 0 0 0 -1.9 1.637h1.337c0.15 -0.75 0.375 -1.288 0.563 -1.637m-0.288 1.637h1.45v-1.875c-0.288 0.012 -0.563 0.05 -0.825 0.125 -0.2 0.35 -0.463 0.912 -0.625 1.75m-0.325 0.275h-1.413c-0.188 0.412 -0.288 0.863 -0.312 1.337h1.625c0 -0.5 0.037 -0.95 0.1 -1.337m0.95 4.963c0.263 0.075 0.537 0.112 0.812 0.125v-1.875h-1.438c0.163 0.85 0.425 1.425 0.625 1.75M10.025 5.8h1.588a3.44 3.44 0 0 0 -0.312 -1.337h-1.388c0.063 0.388 0.112 0.837 0.112 1.337m-0.725 3.512c0.8 -0.313 1.45 -0.888 1.863 -1.638h-1.3c-0.137 0.763 -0.375 1.3 -0.563 1.637m0.612 -1.9h1.375a3.68 3.68 0 0 0 0.325 -1.337h-1.588c-0.012 0.5 -0.05 0.937 -0.112 1.337m-0.6 -4.85c0.188 0.35 0.412 0.875 0.563 1.625h1.3c-0.425 -0.737 -1.075 -1.312 -1.863 -1.625m-1.163 5.112v1.863c0.288 -0.012 0.563 -0.05 0.812 -0.125 0.2 -0.337 0.463 -0.9 0.625 -1.737zm0.825 -5.225a3.56 3.56 0 0 0 -0.825 -0.137v1.875H9.6c-0.163 -0.837 -0.425 -1.4 -0.625 -1.737m0.675 2.012h-1.5v1.337h1.612c-0.012 -0.5 -0.05 -0.95 -0.112 -1.337m0.1 1.612h-1.6v1.337h1.488c0.063 -0.4 0.112 -0.837 0.112 -1.337"
        style={{
          fill: "#fff",
        }}
      />
      <path
        d="M5.6 11.875c-0.125 -0.112 -0.312 -0.175 -0.525 -0.175h-0.963v2.225h0.463v-0.8h0.463c0.237 0 0.425 -0.05 0.563 -0.163 0.125 -0.112 0.2 -0.3 0.2 -0.563 0 -0.225 -0.063 -0.4 -0.2 -0.525m-0.35 0.8c-0.063 0.05 -0.137 0.075 -0.25 0.075h-0.425v-0.65h0.425c0.1 0 0.188 0.025 0.25 0.075s0.088 0.137 0.088 0.25 -0.025 0.188 -0.088 0.25m1.337 -0.963 -0.8 2.225h0.488l0.15 -0.463h0.825l0.15 0.463h0.5l-0.788 -2.225zm-0.037 1.375 0.288 -0.875 0.288 0.875zm2.788 -0.425 -0.388 -0.088c-0.15 -0.037 -0.25 -0.063 -0.3 -0.088 -0.075 -0.037 -0.112 -0.1 -0.112 -0.175 0 -0.088 0.037 -0.15 0.112 -0.2q0.112 -0.075 0.3 -0.075c0.112 0 0.2 0.012 0.275 0.05 0.112 0.063 0.175 0.15 0.175 0.288h0.45c-0.012 -0.237 -0.1 -0.412 -0.263 -0.537s-0.375 -0.188 -0.612 -0.188c-0.288 0 -0.5 0.063 -0.65 0.2s-0.225 0.3 -0.225 0.5c0 0.225 0.075 0.375 0.225 0.488 0.088 0.063 0.25 0.112 0.488 0.175l0.237 0.05c0.137 0.025 0.25 0.063 0.312 0.1s0.1 0.1 0.1 0.175c0 0.125 -0.063 0.212 -0.2 0.263 -0.075 0.025 -0.163 0.037 -0.275 0.037 -0.188 0 -0.325 -0.05 -0.4 -0.137a0.472 0.472 0 0 1 -0.088 -0.225h-0.45c0 0.237 0.088 0.412 0.25 0.55s0.4 0.2 0.688 0.2 0.512 -0.063 0.663 -0.2c0.163 -0.137 0.237 -0.3 0.237 -0.512 0 -0.2 -0.063 -0.35 -0.2 -0.45 -0.05 -0.1 -0.188 -0.15 -0.35 -0.2m2.45 0.163c-0.088 -0.063 -0.212 -0.125 -0.388 -0.163l-0.388 -0.088c-0.15 -0.037 -0.25 -0.063 -0.3 -0.088 -0.075 -0.037 -0.112 -0.1 -0.112 -0.175 0 -0.088 0.037 -0.15 0.112 -0.2q0.112 -0.075 0.3 -0.075c0.112 0 0.2 0.012 0.275 0.05 0.112 0.063 0.175 0.15 0.175 0.288h0.45c-0.012 -0.237 -0.1 -0.412 -0.263 -0.537s-0.375 -0.188 -0.612 -0.188c-0.288 0 -0.5 0.063 -0.65 0.2s-0.225 0.3 -0.225 0.5c0 0.225 0.075 0.375 0.225 0.488 0.088 0.063 0.25 0.112 0.488 0.175l0.237 0.05c0.137 0.025 0.25 0.063 0.312 0.1s0.1 0.1 0.1 0.175c0 0.125 -0.063 0.212 -0.2 0.263 -0.075 0.025 -0.163 0.037 -0.275 0.037 -0.188 0 -0.325 -0.05 -0.4 -0.137a0.472 0.472 0 0 1 -0.088 -0.225h-0.45c0 0.237 0.088 0.412 0.25 0.55s0.4 0.2 0.688 0.2 0.512 -0.063 0.663 -0.2c0.163 -0.137 0.237 -0.3 0.237 -0.512 0.037 -0.225 -0.037 -0.375 -0.163 -0.488"
        style={{
          fill: "#444",
        }}
      />
    </svg>
  );

  const AirplaneIcon = (props) => (
    <svg
      id="airlines_1_"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 46 46"
      style={{
        enableBackground: "new 0 0 128 128",
      }}
      xmlSpace="preserve"
      width={46}
      height={46}
      {...props}
      aria-hidden="true"
    >
      <style>
        {".st0{fill:#444}.st0,.st1{display:none}.st3{display:inline;fill:#444}"}
      </style>
      <g id="row1_1_">
        <path
          id="XMLID_1_"
          d="M20.772 21.131 13.081 28.858l-7.188 -0.216 -3.234 3.234L10.314 35.578l0.252 0.252 3.702 7.727 3.234 -3.234 -0.216 -7.223 7.691 -7.727 4.420 8.625 -1.366 1.689c-1.042 1.042 -1.509 2.228 -0.503 3.234 1.006 1.042 2.192 0.539 3.234 -0.503l0.611 -0.611L35.578 46l3.989 -3.989 -2.372 -9.344 3.055 -2.731c1.042 -1.042 1.042 -2.695 0 -3.738 -1.006 -1.042 -2.695 -1.042 -3.702 0l-0.647 0.611L33.422 16.855l11.428 -11.5s2.408 -2.084 0.252 -4.241c-2.552 -2.552 -4.456 0 -4.456 0l-11.428 11.5L19.047 9.919l0.611 -0.647c1.042 -1.042 1.042 -2.695 0 -3.738 -1.006 -1.042 -2.695 -1.006 -3.702 0L13.261 8.625 3.953 6.217 0 10.242l8.158 4.205 -0.611 0.611c-1.042 1.042 -1.509 2.228 -0.503 3.234 1.006 1.042 2.192 0.539 3.234 -0.503l1.689 -1.366z"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "#fff",
          }}
        />
      </g>
    </svg>
  );

  const HomeIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 46 46"
      width={46}
      height={46}
      {...props}
      aria-hidden="true"
    >
      <defs>
        <style>{".cls-1{fill:#ffffff}"}</style>
      </defs>
      <g id="icons_without_caption" data-name="icons without caption">
        <g id="HOME_LOAN" data-name="HOME LOAN">
          <path
            className="cls-1"
            d="M12.578 21.844h-0.719v5.543a4.313 4.313 0 0 1 0.719 0.19zm21.025 0v14.453H12.578v-0.221a4.313 4.313 0 0 1 -0.719 0.19v0.75h22.462V21.844z"
          />
          <path
            className="cls-1"
            d="M19.832 29.742v7.274h6.828v-7.274zm6.109 6.558H20.55v-5.839h5.391zm7.202 -19.768 -0.719 -0.54 -3.427 -2.587 -0.719 -0.54 -5.184 -3.924 -17.072 12.903H40.164zM23.095 9.844l5.184 3.919 4.864 3.677 4.876 3.686H8.171zM12.578 26.821a5.75 5.75 0 0 0 -0.719 -0.164 5.75 5.75 0 0 0 -0.796 -0.60 5.23 5.23 0 1 0 0 10.462 5.75 5.75 0 0 0 0.796 -0.60 5.232 5.232 0 0 0 4.433 -5.169 5.232 5.232 0 0 0 -3.715 -5.008m0 9.255a4.6 4.6 0 0 1 -1.515 0.262 4.511 4.511 0 1 1 0 -9.025 4.6 4.6 0 0 1 1.515 0.262 4.511 4.511 0 0 1 0 8.498"
          />
          <path
            className="cls-1"
            d="M12.578 32.404a1.236 1.236 0 0 0 -0.719 -0.655 5.75 5.75 0 0 0 -0.684 -0.247c-0.572 -0.181 -0.989 -0.345 -0.989 -0.773 0 -0.4 0.336 -0.624 0.816 -0.624a2.012 2.012 0 0 1 0.857 0.227 2.875 2.875 0 0 1 0.296 0.181l0.345 -0.425a2.587 2.587 0 0 0 -0.641 -0.351 2.875 2.875 0 0 0 -0.529 -0.149v-0.9h-0.451v0.868c-0.837 0.04 -1.305 0.54 -1.305 1.213 0 0.816 0.684 1.052 1.438 1.294 0.385 0.121 0.684 0.227 0.857 0.405a0.65 0.65 0 0 1 0 0.883 0.978 0.978 0 0 1 -0.71 0.25 1.955 1.955 0 0 1 -1.325 -0.569l-0.359 0.428a2.386 2.386 0 0 0 1.406 0.681v0.837h0.457v-0.837a2.012 2.012 0 0 0 0.529 -0.115 1.179 1.179 0 0 0 0.719 -0.687 1.15 1.15 0 0 0 0.081 -0.457 1.438 1.438 0 0 0 -0.089 -0.477m15.7 -22.483v3.841l4.864 3.677V9.922zm0.719 3.484v-2.766h3.427v5.353z"
          />
        </g>
      </g>
    </svg>
  );
  const ChartIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={46}
      height={46}
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "optimizeQuality",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      viewBox="0 0 46 46"
      {...props}
      aria-hidden="true"
    >
      <defs>
        <style>{".fil0{fill:#ffffff;fill-rule:nonzero}"}</style>
      </defs>
      <g id="Layer_x0020_1">
        <path
          className="fil0"
          d="M6.828 6.289V39.174l32.883 0v1.074H5.75V6.289z"
        />
        <g id="_475116192">
          <path
            id="_475116504"
            className="fil0"
            d="M9.883 39.711v-10.13h1.078v10.13z"
          />
          <path
            id="_475116312"
            className="fil0"
            d="M14.914 39.711v-13.836h1.078v13.836z"
          />
          <path
            id="_475115880"
            className="fil0"
            d="M19.945 39.711V17.969h1.078v21.742z"
          />
          <path
            id="_475116216"
            className="fil0"
            d="M24.977 39.711V21.645h1.078V39.711z"
          />
          <path
            id="_475116000"
            className="fil0"
            d="M30.008 39.711V21.682h1.078V39.711z"
          />
          <path
            id="_475116096"
            className="fil0"
            d="M35.039 39.711V17.134h1.078V39.711z"
          />
        </g>
        <path
          style={{
            fill: "#66bb6a",
            fillRule: "nonzero",
          }}
          d="m8.364 26.843 6.329 -3.516 5.181 -9.786 0.327 -0.617 0.514 0.471 7.345 6.743 8.901 -7.023 0.665 0.842 -9.261 7.307 -0.36 0.284 -0.337 -0.309 -7.168 -6.58 -4.929 9.310 -0.215 0.219 -6.469 3.594z"
        />
      </g>
      <path
        style={{
          fill: "none",
        }}
        d="M0 0h46v46H0z"
      />
    </svg>
  );

  const services = [
    {
      title: "Investment Residency & Citizenship",
      description:
        "Secure permanent residency or a second passport through compliant investments in the USA, Canada, Europe, the Caribbean, and the UAE.",
      icon: PassportIcon,
      linkText: "Learn More →",
      targetTab: "residence",
    },
    {
      title: "Digital Nomad Visas",
      description:
        "Work remotely with legal residency options in Portugal, Estonia, Panama, Brazil, Thailand, and Indonesia.",
      icon: AirplaneIcon,
      linkText: "Learn More →",
      targetTab: "digital",
    },
    {
      title: "Retire Abroad",
      description:
        "Lifestyle-driven retiree programs in Panama, Mauritius, and Thailand—healthcare access, tax efficiency, and community.",
      icon: HomeIcon,
      linkText: "Learn More →",
      targetTab: "retirement",
    },
    {
      title: "Business Expansion & Mobility",
      description:
        "Market entry, corporate structuring, relocation, and executive mobility solutions.",
      icon: ChartIcon,
      linkText: "Learn More →",
      targetTab: "business",
    },
  ];

  return (
    <section
      className="w-full py-16 bg-[#F8F9FA]"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="text-center mb-12">
          <h2
            id="services-heading"
            className="interbold text-3xl md:text-4xl text-[#2D3748] mb-4"
          >
            Choose Your Global Pathway
          </h2>
          <p className="mainTxt text-[#4B5563] max-w-2xl mx-auto">
            Whether you're planning a second residency, a strategic passport,
            remote-work flexibility, or cross-border expansion, NVG guides you
            end-to-end.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 group"
            >
              <div
                className="bg-[#1E453E] w-16 h-16 rounded-sm flex items-center justify-center mb-6 text-white"
                aria-hidden="true"
              >
                <service.icon />
              </div>
              <h3 className="boldTxt text-xl text-[#2D3748] mb-4 group-hover:text-[#1E453E] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="mainTxt text-[#4B5563] mb-6 leading-relaxed">
                {service.description}
              </p>
              <a
                href={`?tab=${service.targetTab}#programs`}
                className="flex items-center text-[#1E453E] hover:text-[#C44D34] mainTxt font-medium underline hover:no-underline focus:underline focus:outline-none focus:ring-2 focus:ring-[#1E453E] focus:ring-offset-2 rounded-sm px-2 -ml-2"
              >
                Learn More →
              </a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
