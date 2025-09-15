import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div
      className={`w-full transition-all duration-300 ${
        isScrolled ? "sticky top-0 z-50 py-3" : "py-4"
      } bg-[#1E453E]`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div>
          <Link to="/" className="text-white tracking-tight">
            <div className="h-10 md:h-14 flex items-center">
              <img
                src={Logo}
                alt="North Vista Global — Global Residency & Citizenship Advisory"
                className="max-h-full w-auto"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-5 items-center justify-center intersemibold">
          <li className="cursor-pointer">
            <Link
              to="/"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="/about"
              className="text-white hover:text-gray-200 transition-colors"
            >
              About
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="/services"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <button className="bg-white/10 text-white backdrop-blur-sm py-2 px-5 rounded-md border border-white/20 hover:bg-white/20 transition duration-200">
                Book a Free Consultation
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#1E453E] overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 space-y-4">
          <Link
            to="/"
            className="block text-white py-2 px-4 hover:bg-white/10 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-white py-2 px-4 hover:bg-white/10 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block text-white py-2 px-4 hover:bg-white/10 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block bg-white/10 text-white backdrop-blur-sm py-3 px-5 rounded-md border border-white/20 hover:bg-white/20 transition duration-200 text-center mt-4"
            onClick={() => setIsOpen(false)}
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
