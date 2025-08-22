import React from 'react';

const FinalCTABanner = () => {
  return (
    <section className="bg-[#1E453E]  py-16 px-4 md:px-8 lg:px-16 text-white">
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
          Begin Your Global Journey Today
        </h2>
        
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90">
          Whether you're seeking a U.S. Green Card, Canadian residency, European mobility, 
          or a retirement lifestyle abroad — North Vista Global is your trusted partner.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          <button className="bg-[#C44D34] hover:bg-[#b3452e] text-white font-medium py-3 px-8 rounded-md transition-all duration-300 btn-hover">
            Book a Free Consultation
          </button>
          
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1E453E] text-white font-medium py-3 px-8 rounded-md transition-all duration-300 btn-hover">
            Download Global Residency Guide
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTABanner;