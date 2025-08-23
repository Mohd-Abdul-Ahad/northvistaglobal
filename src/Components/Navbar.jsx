import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`w-full transition-all duration-300 ${isScrolled ? 'sticky-nav py-3' : 'py-4'} bg-[#1E453E]`}>
      <div className="container mx-auto flex justify-between items-center px-6">
        <div>
          <span className="text-xl font-bold text-white tracking-tight">North Vista Global</span>
        </div>

        <ul className="hidden md:flex gap-8 items-center">
          {['Citizenship', 'Residence', 'Countries', 'Services', 'About'].map((item) => (
            <li key={item} className="group relative">
              <span className="cursor-pointer text-white text-sm font-medium transition-all duration-300 py-2 relative">
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </li>
          ))}

          {/* Contact as white text link */}
          <li>
            <span className="cursor-pointer text-white text-sm font-medium hover:underline transition-all duration-300">
              Contact
            </span>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 px-6 py-4 animate-fade-in">
          <ul className="space-y-3">
            {['Citizenship', 'Residence', 'Real Estate', 'Countries', 'Services', 'About'].map((item) => (
              <li key={item} className="group">
                <span className="cursor-pointer text-[#1E453E] hover:text-[#D4AF37] text-base font-medium block py-2 border-b border-gray-100 relative">
                  {item}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#1E453E] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
            ))}
            <li>
              <span className="block text-[#1E453E] font-medium mt-2 hover:underline">
                Contact
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
