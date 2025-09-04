import React, { useState, useEffect } from "react";

const LeadershipSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Nabeel Khan",
      role: "Founder, North Vista Immigration",
      image: "/api/placeholder/200/200",
      fullBio:
        "With extensive experience in immigration consulting, Nabeel Khan founded North Vista Immigration with a vision to simplify global mobility. Nabeel has over 15 years of experience in immigration consulting and has helped thousands of clients achieve their dreams. He specializes in investor immigration programs and has built strong relationships with immigration authorities worldwide.",
    },
    {
      id: 2,
      name: "Sampann Malhotra",
      role: "Director, SMGC | Business Development Consultant at NVI",
      image: "/api/placeholder/200/200",
      fullBio:
        "Sampann Malhotra brings strategic vision and business development expertise to the partnership, driving growth initiatives. With a background in international business development, Sampann Malhotra has successfully expanded operations across multiple continents. His strategic insights have been instrumental in developing innovative immigration solutions for high-net-worth individuals.",
    },
  ];

  const toggleMemberSelection = (memberId) => {
    if (selectedMember === memberId) {
      setSelectedMember(null);
    } else {
      setSelectedMember(memberId);
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16 flex items-center justify-center flex-col">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 md:mb-6 text-[#1E453E]">
            Leadership Team
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
            Meet the visionaries guiding North Vista Global
          </p>
        </div>

        {/* Team Member Cards Container */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-6 md:gap-8 overflow-visible">
          {teamMembers.map((member, index) => {
            const isSelected = selectedMember === member.id;
            
            return (
              <div
                key={member.id}
                className={`w-full max-w-md lg:max-w-none lg:w-auto transition-all duration-300 ${
                  isSelected && !isMobile ? "lg:flex-grow" : ""
                }`}
              >
                {/* Main Card and Expanded Panel Container */}
                <div className="flex flex-col lg:flex-row">
                  {/* Team Member Card */}
                  <div 
                    className={`w-full lg:w-[300px] xl:w-[380px] h-[400px] sm:h-[450px] border border-gray-200 rounded-t-xl lg:rounded-l-xl lg:rounded-r-none overflow-hidden shadow-md bg-white transition-all duration-300 hover:shadow-lg ${
                      isSelected && !isMobile ? "lg:rounded-bl-xl" : "lg:rounded-xl"
                    } ${isMobile && isSelected ? "rounded-b-none" : ""}`}
                    onClick={() => isMobile && toggleMemberSelection(member.id)}
                    onMouseEnter={() => !isMobile && setSelectedMember(member.id)}
                    onMouseLeave={() => !isMobile && setSelectedMember(null)}
                  >
                    <div className="h-3/5 w-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4 md:p-6">
                      <h3 className="text-xl md:text-2xl font-semibold text-[#1E453E] font-playfair mb-2">
                        {member.name}
                      </h3>
                      <p className="text-sm md:text-md font-medium text-[#4B5563]">
                        {member.role}
                      </p>
                      <div
                        className={`mt-4 transition-all duration-300 ${
                          (isSelected && !isMobile) || (isMobile && !isSelected) 
                            ? "opacity-0 h-0" 
                            : "opacity-100 h-auto"
                        }`}
                      >
                        <p className="text-sm text-gray-600">
                          {isMobile ? "Tap" : "Hover"} to learn more about {member.name.split(" ")[0]}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Description Card - Desktop */}
                  {!isMobile && (
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-out ${
                        isSelected ? "w-[380px] opacity-100" : "w-0 opacity-0"
                      }`}
                    >
                      <div className="w-[380px] h-[450px] border border-gray-200 border-l-0 rounded-r-xl bg-white shadow-md p-6 flex flex-col">
                        <h3 className="text-2xl font-semibold text-[#1E453E] font-playfair mb-2">
                          About {member.name}
                        </h3>
                        <p className="text-md font-medium text-[#4B5563] mb-4">
                          {member.role}
                        </p>
                        <div className="flex-grow overflow-y-auto pr-2">
                          <p className="text-[#6B7280] text-base leading-relaxed mb-4">
                            {member.fullBio}
                          </p>
                        </div>
                        <div className="bg-[#F0F7EE] p-4 rounded-lg border-l-4 border-[#1E453E] mt-4">
                          <p className="text-[#1E453E] italic text-sm">
                            "Our mission is to make global mobility accessible and
                            seamless."
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Expanded Description Card - Mobile */}
                  {isMobile && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        isSelected ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="w-full border border-gray-200 border-t-0 rounded-b-xl bg-white shadow-md p-4 md:p-6 flex flex-col">
                        <h3 className="text-xl md:text-2xl font-semibold text-[#1E453E] font-playfair mb-2">
                          About {member.name}
                        </h3>
                        <p className="text-sm md:text-md font-medium text-[#4B5563] mb-4">
                          {member.role}
                        </p>
                        <div className="flex-grow overflow-y-auto pr-2">
                          <p className="text-[#6B7280] text-sm md:text-base leading-relaxed mb-4">
                            {member.fullBio}
                          </p>
                        </div>
                        <div className="bg-[#F0F7EE] p-3 md:p-4 rounded-lg border-l-4 border-[#1E453E] mt-4">
                          <p className="text-[#1E453E] italic text-xs md:text-sm">
                            "Our mission is to make global mobility accessible and
                            seamless."
                          </p>
                        </div>
                        <button 
                          className="mt-4 text-[#1E453E] font-medium self-end"
                          onClick={() => setSelectedMember(null)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Instructions */}
        {isMobile && selectedMember && (
          <div className="text-center mt-6 text-sm text-gray-500">
            <p>Tap anywhere outside the card to close</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadershipSection;