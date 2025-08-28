<div className="bg-[#1e453e] py-20">
  <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
    {/* Title */}
    <div className="text-center mb-16 animate-fade-in">
      <h2 className="text-4xl md:text-5xl interbold text-olive mb-3">
        About North Vista Global
      </h2>
      <p className="text-lg sans text-sage">Empowering Global Citizens</p>
    </div>

    {/* Who We Are - UPDATED: Image on left, text on right */}
    <div className="grid md:grid-cols-2 gap-12 items-center mb-28">
      <div className="order-2 md:order-1 rounded-xl min-h-[600px] w-[700px] bg-red-500 flex items-center justify-center text-olive text-xl shadow-md animate-fade-in-left overflow-hidden">
        {/* Company Image - Made bigger */}
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-2xl">Company Image Placeholder</span>
        </div>
      </div>
      <div className="order-1 md:order-2 animate-fade-in-right">
        <h3 className="text-2xl md:text-3xl font-semibold serif text-olive mb-6">
          Who We Are
        </h3>
        <p className="text-base md:text-lg sans text-sage leading-relaxed mb-6">
          North Vista Global was formed through a strategic alliance between
          North Vista Immigration (NVI) and Strategic Minds Global Consulting
          (SMGC). We enable investors, entrepreneurs, retirees, and digital
          nomads to embrace global mobility and unlock cross-border
          opportunities.
        </p>
        <div className="flex items-center space-x-4 bg-beige/80 border border-sage p-4 rounded-lg">
          <div className="w-10 h-10 flex items-center justify-center bg-terracotta text-beige rounded-full font-bold text-xl">
            ✓
          </div>
          <div>
            <h4 className="font-semibold text-olive">Strategic Alliance</h4>
            <p className="text-sm text-sage">
              NVI + Strategic Minds Global Consulting (SMGC)
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Mission and Vision */}
    <div className="grid md:grid-cols-2 gap-12 mb-28">
      <div className="animate-slide-up">
        <h3 className="text-2xl md:text-3xl font-semibold serif text-olive mb-4">
          Our Mission
        </h3>
        <p className="text-base md:text-lg sans text-sage leading-relaxed">
          To empower individuals and families with freedom of movement, secure
          investments, and long-term global opportunities through expert
          guidance and personalized service.
        </p>
      </div>
      <div className="animate-slide-up delay-300">
        <h3 className="text-2xl md:text-3xl font-semibold serif text-olive mb-4">
          Our Vision
        </h3>
        <p className="text-base md:text-lg sans text-sage leading-relaxed">
          To be the world's most trusted partner for residency and citizenship
          planning, setting the global standard for excellence and innovation.
        </p>
      </div>
    </div>

    {/* Why Choose Us */}
    <div ref={sectionRef} className="text-center mb-16">
      <h2
        className={`text-4xl md:text-5xl interbold text-olive mb-3 ${
          isVisible ? "animate-fade-in" : "opacity-0"
        }`}
      >
        Why Choose Us
      </h2>
      <p
        className={`text-lg sans text-sage ${
          isVisible ? "animate-fade-in delay-100" : "opacity-0"
        }`}
      >
        What Sets Us Apart
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-28">
      <div className={isVisible ? "animate-swipe-left delay-200" : "opacity-0"}>
        <InfoHighlight
          icon="🌍"
          title="Global Expertise"
          text="Our worldwide network provides unmatched access to key immigration opportunities."
          direction="left"
        />
      </div>
      <div
        className={isVisible ? "animate-swipe-right delay-300" : "opacity-0"}
      >
        <InfoHighlight
          icon="👤"
          title="Personalized Service"
          text="Tailored solutions for high-net-worth individuals and family migration goals."
          direction="right"
        />
      </div>
      <div className={isVisible ? "animate-swipe-left delay-400" : "opacity-0"}>
        <InfoHighlight
          icon="📋"
          title="End-to-End Guidance"
          text="We're with you from your first consultation to final approvals and beyond."
          direction="left"
        />
      </div>
      <div
        className={isVisible ? "animate-swipe-right delay-500" : "opacity-0"}
      >
        <InfoHighlight
          icon="💡"
          title="Technology Driven"
          text="Secure, transparent, and digital-first processes for a seamless experience."
          direction="right"
        />
      </div>
    </div>

    {/* Final CTA */}
    <div className="bg-beige p-12 sm:p-16 rounded-xl text-center shadow-xl animate-fade-in">
      <h3 className="text-3xl sm:text-4xl intersemibold text-olive mb-6">
        Ready to Expand Beyond Borders?
      </h3>
      <p className="text-base md:text-lg sans text-sage mb-8 max-w-2xl mx-auto leading-relaxed">
        Reach out today to begin your personalized global mobility journey with
        North Vista Global.
      </p>
      <button className="bg-transparent border-2 border-[#1e453e] hover:bg-[#1e453e] text-[#1e453e] hover:text-white text-base md:text-lg px-8 py-3 rounded-md font-medium transition-all duration-300">
        Contact Us
      </button>
    </div>
  </div>
</div>;


// 