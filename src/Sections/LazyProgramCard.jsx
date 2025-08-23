import React, { useState } from "react";
import usaFlag from "../assets/Images/countries/usa.webp";
import canadaFlag from "../assets/Images/countries/canada.webp";
import portugalFlag from "../assets/Images/countries/portugal.webp";
import uaeFlag from "../assets/Images/countries/uae.webp";
import panamaFlag from "../assets/Images/countries/panama.webp";
import mauritiusFlag from "../assets/Images/countries/mauritius.webp";
import thailandFlag from "../assets/Images/countries/thailand.webp";
import estoniaFlag from "../assets/Images/countries/estonia.webp";
import brazilFlag from "../assets/Images/countries/brazil.webp";
import indonesiaFlag from "../assets/Images/countries/indonesia.webp";
import caribbeanFlag from "../assets/Images/countries/caribbean.webp";
import europeFlag from "../assets/Images/countries/europe.webp";

import structuringInvestmentsImg from "../assets/Images/countries/structuringinvestments.webp";
import executiveRelocationImg from "../assets/Images/countries/businessrelocation.webp";
import crossBorderExpansionImg from "../assets/Images/countries/crossborderexpansion.webp";
import educationImg from "../assets/Images/countries/education.webp";
import healthcareImg from "../assets/Images/countries/healthcare.webp";
import wealthDiversificationImg from "../assets/Images/countries/wealthdiversification.webp";
import successionPlanningImg from "../assets/Images/countries/successionplanning.webp";

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
  INDONESIA: indonesiaFlag,
  CARIBBEAN: caribbeanFlag,
  EUROPE: europeFlag,
};

const LazyProgramCard = ({ program, type }) => {
  return (
    <div className="bg-white rounded-lg border border-[#1E453E]/20 h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden">
      <div className="w-full h-80 overflow-hidden">
        {flagImages[program.flag] ? (
          <img
            src={flagImages[program.flag]}
            alt={`${program.name} flag`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : program.image ? (
          <img
            src={program.image}
            alt={program.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : null}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-[#1E453E] text-white text-xs font-medium px-2 py-1 rounded">
              {type}
            </div>
          </div>

          <h3 className="text-lg text-[#1E453E] font-bold mb-2">
            {program.name}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            {program.description}
          </p>

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
                <p>{program.processing}</p>
              </div>
            )}
          </div>
          <button className="w-full px-4 py-2.5 bg-[#1E453E] text-white hover:bg-[#2a5c52] rounded text-sm font-medium transition-colors">
            Learn More
          </button>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-[#1E453E] text-white text-xs font-medium px-2 py-1 rounded">
              {type}
            </div>
          </div>

          <h3 className="text-lg text-[#1E453E] font-bold mb-2">
            {program.name}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            {program.description}
          </p>

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
                <p>{program.processing}</p>
              </div>
            )}
          </div>
          <button className="w-full px-4 py-2.5 bg-[#1E453E] text-white hover:bg-[#2a5c52] rounded text-sm font-medium transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LazyProgramCard;
