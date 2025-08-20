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
    <div className={`w-full bg-white border-b border-gray-200 transition-all duration-300 ${isScrolled ? 'sticky-nav py-3' : 'py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-6">
        <div>
          <span className="text-xl font-bold text-[#1E453E] boldTxt tracking-tight">North Vista Global</span>
        </div>

        <ul className="hidden md:flex gap-8 items-center">
          {['Citizenship', 'Residence', 'Countries', 'Services', 'About'].map((item) => (
            <li key={item} className="group relative">
              <span className="cursor-pointer text-gray-700 hover:text-[#1E453E] mainTxt text-sm font-medium transition-all duration-300 py-2 relative">
                {item}
                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1E453E] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </li>
          ))}
          <button className="ml-4 px-5 py-2 bg-[#1E453E] text-white hover:bg-[#1f3f39] rounded-sm mainTxt text-sm font-medium transition-all duration-300 btn-hover shadow-md">
            Contact
          </button>
        </ul>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700"
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
                <span className="cursor-pointer text-gray-700 hover:text-[#1E453E] mainTxt text-base font-medium block py-2 border-b border-gray-100 relative">
                  {item}
                  {/* Mobile underline animation */}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#1E453E] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
            ))}
            <li>
              <button className="w-full mt-2 px-5 py-2 bg-[#1E453E] text-white hover:bg-[#2D3748] rounded-sm mainTxt font-medium transition-all duration-300">
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;