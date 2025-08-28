import React, { useState } from "react";

const LeadershipSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

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

  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex items-center justify-center flex-col">
          <h1 className="font-playfair text-4xl md:text-5xl font-semibold mb-6 text-[#1E453E]">
            Leadership Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Meet the visionaries guiding North Vista Global
          </p>
        </div>

        {/* Team Member Cards Container */}
        <div className="flex flex-nowrap gap-6 overflow-visible">
          {teamMembers.map((member, index) => {
            const isSelected = selectedMember === member.id;
            const selectedIndex = selectedMember
              ? teamMembers.findIndex((m) => m.id === selectedMember)
              : -1;

            return (
              <div
                key={member.id}
                className="relative transition-all duration-500 ease-out"
                style={{
                  transform:
                    selectedMember && !isSelected && index > selectedIndex
                      ? "translateX(10px)"
                      : "translateX(0)",
                  zIndex: isSelected ? 20 : 10 - index,
                }}
                onMouseEnter={() => setSelectedMember(member.id)}
                onMouseLeave={() => setSelectedMember(null)}
              >
                {/* Main Card and Expanded Panel Container */}
                <div className="flex">
                  {/* Team Member Card */}
                  <div className="w-[380px] h-[450px] border border-gray-200 rounded-l-xl overflow-hidden shadow-md bg-white transition-all duration-300 hover:shadow-lg">
                    <div className="h-3/5 w-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-[#1E453E] font-playfair mb-2">
                        {member.name}
                      </h3>
                      <p className="text-md font-medium text-[#4B5563]">
                        {member.role}
                      </p>
                      <div
                        className={`mt-4 transition-all duration-300 ${
                          isSelected ? "opacity-0 h-0" : "opacity-100 h-auto"
                        }`}
                      >
                        <p className="text-sm text-gray-600">
                          Hover to learn more about {member.name.split(" ")[0]}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Description Card */}
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeadershipSection;
