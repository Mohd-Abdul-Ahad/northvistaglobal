import React from 'react';

const reasons = [
  {
    title: 'Strategic Expertise',
    description:
      'With the combined power of NVI and SMGC, we deliver unparalleled strategic insight into global mobility, investments, and immigration.',
  },
  {
    title: 'Client-Centric Approach',
    description:
      'We prioritize your needs, tailoring our solutions to empower your unique global journey.',
  },
  {
    title: 'Global Network',
    description:
      'Our reach spans continents, ensuring you access to the best opportunities across borders.',
  },
  {
    title: 'Trusted Professionals',
    description:
      'Our seasoned team brings integrity, precision, and care to every interaction.',
  },
];

const WhyWorkWithUs = () => {
  return (
    <section className="bg-[#F8F9FA] py-20 px-4 sm:px-8 md:px-16 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        {/* Big heading */}
        <h2 className="text-4xl sm:text-5xl font-semibold boldTxt text-[#1E453E] mb-6 leading-tight">
          Why Work With Us
        </h2>

        {/* Medium subtitle */}
        <p className="text-lg md:text-xl secTxt mb-12 max-w-3xl">
          At North Vista Global, we blend strategic insight with personalized service to help you
          achieve freedom and opportunity across borders.
        </p>

        {/* Smaller feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-md shadow-md card-shadow transition-all duration-300 group hover:shadow-lg"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#1E453E] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#6B7280]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
