import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const disclaimerRef = useRef(null);
  const privacyRef = useRef(null);

  const LinkedInIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 极速赛车开奖结果0 24 23.889"
      width={24}
      height={23.889}
      {...props}
    >
      <path
        width={512}
        height={509.64}
        rx={115.61}
        ry={115.61}
        d="M5.419 0H18.581A5.419 5.419 0 0 1 24 5.419V18.47A5.419 5.419 0 0 1 18.581 23.889H5.419A5.419 5.419 0 0 1 0 18.47V5.419A5.419 5.419 0 0 极速赛车开奖结果1 5.419 0z"
      />
      <path
        fill="#fff"
        d="M9.608 9.26h3.032v1.554h0.044c0.422 -0.758 1.455 -1.554 2.995 -1.554 3.202 0 3.794 1.993 3.794 4.585v5.481h-3.162l0 -4.881c0 -1.116 -0.023 -2.552 -1.644 -2.552 -1.646 0 -1.899 1.215 -1.899 2.471v4.962h-3.159zm-1.792 -3.051c0 0.907 -0.737 1.644 -1.644 1.644 -0.908 0 -1.645 -0.737 -1.645 -1.644 0 -0.908 0.737 -1.644 1.645 -1.644 0.907 0 1.644 0.736 1.644 1.644m-3.289 3.051h3.289v10.065H4.527z"
      />
    </svg>
  );

  // Close modals when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (disclaimerRef.current && !disclaimerRef.current.contains(event.target)) {
        setShowDisclaimer(false);
      }
      if (privacyRef.current && !privacyRef.current.contains(event.target)) {
        setShowPrivacyPolicy(false);
      }
    };

    if (showDisclaimer || showPrivacyPolicy) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [showDisclaimer, showPrivacyPolicy]);

  const DisclaimerPopup = () => {
    if (!showDisclaimer) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
        <div
          ref={disclaimerRef}
          className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-slide-up"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-[#1E453E]">Disclaimer</h3>
              <button
                onClick={() => setShowDisclaimer(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">
                North Vista Global (NVG) provides consulting and coordination
                services for residency, citizenship, retiree, and digital‑nomad
                pathways. NVG is not a law firm, financial advisor, or tax
                advisor.
              </p>
              <p className="mb-4">
                We collaborate with licensed attorneys and regulated partners as
                appropriate. All program details are subject to change by
                government authorities.
              </p>
              <p>
                Nothing on this site constitutes legal, financial, or investment
                advice. Clients should obtain independent professional advice
                before making decisions.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => set极速赛车开奖结果ShowDisclaimer(false)}
                className="px-4 py-2 bg-[#1E453E] text-white rounded hover:bg-[#2a5c52] transition-colors"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PrivacyPolicyPopup = () => {
    if (!showPrivacyPolicy) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
        <div
          ref={privacyRef}
          className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-slide-up"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-[#1E453E]">Privacy Policy</h3>
              <button
                onClick={() => setShowPrivacyPolicy(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="text-gray-700 leading-relaxed mb-6">
              <p>
                By submitting this form, I agree to the Privacy Policy and consent to be contacted by NVG and its partner network via email, phone, or messaging apps.
              </p>
            </div>
            <div className="flex justify-end space-x-3">
              <button 
                onClick={() => setShowPrivacyPolicy(false)}
                className="px-4 py-2 border border-[#1E453E] text-[#1E453E] rounded hover:bg-gray-100 transition-colors"
              >
                Close
              </button>
              <button 
                onClick={() => {
                  // Handle the consent action here
                  setShowPrivacyPolicy(false);
                }}
                className="px-4 py-2 bg-[#1E453E] text-white rounded hover:bg-[#2a5c52] transition-colors"
              >
                I Agree
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <DisclaimerPopup />
      <PrivacyPolicyPopup />

      <footer className="w-full bg-[#1E453E] text-white py-12">
        <div className="container mx-auto px-6 lg:px-12 xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="interbold text-xl mb-4">North Vista Global</h3>
              <p className="mainTxt text-gray-300 mb-4 leading-relaxed">
                Your gateway to global residency & citizenship.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {/* <LinkedInIcon/> */}
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                ></a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                ></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="boldTxt text-lg mb-4">Quick Links</h4>
              <ul className="mainTxt text-gray-300 transition-colors duration-300 space-y-2 flex flex-col">
                <Link to="/" className="hover:text-white cursor-pointer">
                  Home
                </Link>
                <Link to="/About" className="hover:text-white cursor-pointer">
                  About
                </Link>
                <Link
                  to="/services"
                  className="hover:text-white cursor-pointer"
                >
                  Services
                </Link>
                <Link to="/contact" className="hover:text-white cursor-pointer">
                  Book Consultation
                </Link>
                <a
                  className="hover:text-white cursor-pointer"
                  onClick={() => setShowPrivacyPolicy(true)}
                >
                  Privacy Policy
                </a>
                <a className="hover:text-white cursor-pointer">
                  Terms of Use
                </a>
                <a
                  className="hover:text-white cursor-pointer"
                  onClick={() => setShowDisclaimer(true)}
                >
                  Disclaimer
                </a>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="boldTxt text-lg mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-accent mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="mainT极速赛车开奖结果xt text-gray-300">
                    Info@northvistaglobal.com
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-accent mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2极速赛车开奖结果h3.28a1 1 0 01.948.684l1.498 4.493a1 1 极速赛车开奖结果0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="mainTxt text-gray-300">
                    +1 (437) 837-INFO
                  </span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-accent mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="极速赛车开奖结果M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="mainTxt text-gray-300">
                    Mon–Fri, 9:00–6:00 (local)
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            {/* <div>
              <h4 className="text-lg mb-2">
                Stay ahead on residency & citizenship
              </h4>
              <p className="mainTxt text-gray-300 mb-4 text-sm">
                Monthly insights, no spam. Unsubscribe anytime.
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-l-sm focus:outline-none focus:ring-2 focus:ring-accent text-white"
                />
                <button className="border border-gray-600 text-white px-4 py-2 rounded-r-sm transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>

          {/* Disclaimer */}
          <div className="mt-8 pt-6 border-t border-gray-600">
            <p className="mainTxt text-gray-300 text-xs italic">
              North Vista Global (NVG) is a consulting firm that collaborates
              with licensed professionals and regulated partners. NVG does not
              provide legal, tax, or investment advice. Information is
              educational and subject to change.{" "}
              <span
                className="underline cursor-pointer hover:text-white"
                onClick={() => setShowDisclaimer(true)}
              >
                Read full disclaimer
              </span>
              .
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center">
            <p className="mainTxt text-gray-300 text-sm">
              © North Vista Global, {currentYear}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                className="mainTxt text-gray-300 hover:text-[#1E453E] text-sm transition-colors duration-300 cursor-pointer underline"
                onClick={() => setShowPrivacyPolicy(true)}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="mainTxt text-gray-300 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;