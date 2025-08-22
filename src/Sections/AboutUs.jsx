import React from "react";

const InfoHighlight = ({ icon, title, text }) => (
  <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all group animate-slide-in-up">
    <div className="mb-4 text-3xl text-[#C44D34]">{icon}</div>
    <h4 className="text-2xl font-semibold text-[#1E453E] mb-2">{title}</h4>
    <p className="text-lg text-[#4B5563]">{text}</p>
  </div>
);

const AboutUs = () => {
  return (
    <div className="bg-[#F8F9FA] py-20">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-[#1E453E] leading-tight mb-4">About North Vista Global</h2>
          <p className="text-xl text-[#6B7280]">Empowering Global Citizens</p>
        </div>

        {/* Who We Are */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-28">
          <div className="animate-fade-in-left">
            <h3 className="text-3xl font-semibold text-[#1E453E] mb-6">Who We Are</h3>
            <p className="text-xl text-[#4B5563] leading-relaxed mb-6">
              North Vista Global was formed through a strategic alliance between North Vista Immigration (NVI) and Strategic Minds Global Consulting (SMGC). We enable investors, entrepreneurs, retirees, and digital nomads to embrace global mobility and unlock cross-border opportunities.
            </p>
            <div className="flex items-center space-x-4 bg-white border border-gray-200 p-4 rounded-lg">
              <div className="w-10 h-10 flex items-center justify-center bg-[#1E453E] text-white rounded-full">✓</div>
              <div>
                <h4 className="font-semibold text-[#1E453E]">Strategic Alliance</h4>
                <p className="text-sm text-[#6B7280]">NVI + Strategic Minds Global Consulting (SMGC)</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-[#E5E7EB] min-h-[300px] flex items-center justify-center text-[#6B7280] text-xl font-medium">
            Company Image Placeholder
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-28">
          <div className="animate-slide-in-up">
            <h3 className="text-3xl font-semibold text-[#1E453E] mb-4">Our Mission</h3>
            <p className="text-xl text-[#4B5563] leading-relaxed">
              To empower individuals and families with freedom of movement, secure investments, and long-term global opportunities through expert guidance and personalized service.
            </p>
          </div>
          <div className="animate-slide-in-up delay-1">
            <h3 className="text-3xl font-semibold text-[#1E453E] mb-4">Our Vision</h3>
            <p className="text-xl text-[#4B5563] leading-relaxed">
              To be the world's most trusted partner for residency and citizenship planning, setting the global standard for excellence and innovation.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-[#1E453E] mb-4">Why Choose Us</h2>
          <p className="text-xl text-[#6B7280]">What Sets Us Apart</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-28">
          <InfoHighlight icon="🌍" title="Global Expertise" text="Our worldwide network provides unmatched access to key immigration opportunities." />
          <InfoHighlight icon="👤" title="Personalized Service" text="Tailored solutions for high-net-worth individuals and family migration goals." />
          <InfoHighlight icon="📋" title="End-to-End Guidance" text="We’re with you from your first consultation to final approvals and beyond." />
          <InfoHighlight icon="💡" title="Technology Driven" text="Secure, transparent, and digital-first processes for a seamless experience." />
        </div>

        {/* Final CTA */}
        <div className="bg-white border border-gray-200 p-16 rounded-xl text-center shadow-xl animate-fade-in">
          <h3 className="text-4xl sm:text-5xl font-semibold text-[#1E453E] mb-6">
            Ready to Expand Beyond Borders?
          </h3>
          <p className="text-xl text-[#4B5563] mb-10 max-w-2xl mx-auto leading-relaxed">
            Reach out today to begin your personalized global mobility journey with North Vista Global.
          </p>
          <button className="bg-[#C44D34] hover:bg-[#a23a27] text-white text-lg px-10 py-4 rounded-md font-medium transition btn-hover">
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
