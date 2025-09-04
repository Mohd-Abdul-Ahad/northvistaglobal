import React, { useState, useRef, useEffect } from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

// Import country flags
import usaFlag from "../assets/Images/countries/usa.webp";
import canadaFlag from "../assets/Images/countries/canada.webp";
import portugalFlag from "../assets/Images/countries/portugal.webp";
import uaeFlag from "../assets/Images/countries/uae.webp";
import panamaFlag from "../assets/Images/countries/panama.webp";
import mauritiusFlag from "../assets/Images/countries/mauritius.webp";
import thailandFlag from "../assets/Images/countries/Thailand.webp";
import estoniaFlag from "../assets/Images/countries/estonia.webp";
import brazilFlag from "../assets/Images/countries/Brazil.webp";
import europeFlag from "../assets/Images/countries/europe.webp";
import caribbeanFlag from "../assets/Images/countries/caribbean.webp";

// Import images for business and legacy sections
import structuringInvestmentsImg from "../assets/Images/countries/structuringinvestments.webp";
import executiveRelocationImg from "../assets/Images/countries/businessrelocation.webp";
import crossBorderExpansionImg from "../assets/Images/countries/crossborderexpansion.webp";

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const flagImages = {
    USA: usaFlag,
    CANADA: canadaFlag,
    PORTUGAL: portugalFlag,
    UAE: uaeFlag,
    PANAMA: panamaFlag,
    MAURITIUS: mauritiusFlag,
    THAILAND: thailandFlag,
    ESTONIA: estoniaFlag,
    BRAZIL: brazilFlag,
    EUROPE: europeFlag,
    CARIBBEAN: caribbeanFlag,
    executiveRelocationImg: executiveRelocationImg,
    structuringInvestmentsImg:structuringInvestmentsImg
  };

  const serviceCards = [
    {
      id: "investment",
      title: "Residency & Citizenship by Investment",
      description:
        "Secure residency or a second passport through compliant investments across the USA, Canada, Europe, the Caribbean, and the UAE—delivered with transparent guidance and partner accountability.",
      programs: [
        "EB‑5 (USA): Green Card eligibility via qualified investment and job creation.",
        "Canada PNP (Entrepreneur Streams): Build or acquire a business for PR pathways.",
        "Panama Business Investment Visa",
      ],
      cta: "Explore Investment Programs",
      flag: "USA",
    },
    {
      id: "digital",
      title: "Digital Nomad Visas",
      description:
        "Legally live and work abroad with flexible visas in thriving global hubs.",
      programs: ["Canada", "Estonia", "Panama", "Brazil", "Thailand"],
      cta: "View Digital Nomad Options",
      flag: "PANAMA",
    },
    {
      id: "retirement",
      title: "Retire Abroad",
      description:
        "Lifestyle‑forward retiree programs balancing healthcare access, cost of living, and community.",
      programs: [
        "Panama Pensionado: Permanent residency and lifestyle discounts.",
        "Mauritius Retiree Permit: Stability, banking, and healthcare access.",
        "Thailand: Long‑term residency options with premium healthcare.",
      ],
      cta: "Plan Your Retirement Abroad",
      flag: "executiveRelocationImg",
    },
    {
      id: "business",
      title: "Business Expansion & Mobility",
      description:
        "Market entry strategies, investor structuring, corporate relocation, and executive mobility services.",
      programs: [],
      cta: "Expand Your Business Globally",
      flag: "structuringInvestmentsImg",
    },
  ];

  const faqs = [
    {
      question: "Which path is fastest?",
      answer:
        "Panama is typically the fastest for Residency; many residency options can be initiated within weeks.",
    },
    {
      question:
        "Can I combine options (e.g., EU residency + Secondary passport)?",
      answer:
        "Yes. Many clients build layered strategies for mobility and tax planning.",
    },
    {
      question: "What documents do I need?",
      answer:
        "Passports, proof of funds/income, clean police record, and civil documents; specifics vary by program.",
    },
  ];

  const ServiceCard = ({ service }) => (
    <div className="bg-white rounded-lg border border-[#1E453E]/20 h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden opacity-0 animate-slide-up">
      {/* Image at the top of the card */}
      <div className="w-full h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
        <img
          src={flagImages[service.flag]}
          alt={`${service.flag} flag`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl text-[#1E453E] font-bold mb-3">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            {service.description}
          </p>

          {/* Program list */}
          {service.programs.length > 0 && (
            <div className="mb-4">
              <ul className="text-sm text-gray-600 space-y-2">
                {service.programs.map((program, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#1E453E] mr-2">•</span>
                    {program}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="pt-4 mt-auto border-t border-[#1E453E]/20">
          <button className="w-full px-4 py-3 bg-[#1E453E] text-white hover:bg-[#2a5c52] rounded text-sm font-medium transition-colors">
            {service.cta}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Banner Section */}
        <section
          className="relative h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          }}
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <div
            className={`text-center text-white max-w-4xl mx-auto px-4 opacity-0 ${
              isVisible ? "animate-fade-in" : ""
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 serif">
              Choose Your Global Pathway
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              From investment residency and second citizenship to digital‑first
              visas and retirement abroad, NVG provides structured, compliant
              solutions tailored to your profile.
            </p>
            <button className="bg-[#1E453E] hover:bg-[#2a5c52] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1">
              Book a Free Consultation
            </button>
          </div>
        </section>

        {/* Services Section with Cards */}
        <section
          className="py-16 px-4 md:px-8 bg-gray-50"
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <div className="max-w-6xl mx-auto">
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 opacity-0 ${
                isVisible ? "animate-fade-in" : ""
              }`}
            >
              Our Global Pathways
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCards.map((service, index) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className="py-16 px-4 md:px-8 bg-white"
          ref={(el) => (sectionRefs.current[2] = el)}
        >
          <div className="max-w-4xl mx-auto">
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 opacity-0 ${
                isVisible ? "animate-fade-in" : ""
              }`}
            >
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 shadow-lg border border-[#1E453E]/20 opacity-0 ${
                    isVisible ? "animate-slide-up" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
                >
                  <h3 className="text-xl font-bold text-[#1E453E] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-16 px-4 md:px-8 bg-[#1E453E]"
          ref={(el) => (sectionRefs.current[3] = el)}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className={`opacity-0 ${isVisible ? "animate-fade-in" : ""}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Begin Your Global Journey?
              </h2>
              <p className="text-xl text-gray-100 mb-8">
                Contact us today to discuss your options and start planning your
                pathway to global mobility.
              </p>
              <button className="bg-white hover:bg-gray-100 text-[#1E453E] font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
