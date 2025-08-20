import React from "react";

const NewsSection = () => {
  const articles = [
    {
      title: "Latest Blog",
      date: "22 July 2025",
      excerpt: "The Hidden Costs of Investment Immigration",
      category: "Blog",
    },
    {
      title: "Free Resource",
      date: "08 August 2025",
      excerpt: "Download our 2025 Global Residency Guide",
      category: "Resource",
    },
    {
      title: "Client Stories",
      date: "03 August 2025",
      excerpt: "Hear from investors who transformed their futuress.",
      category: "Stories",
    },
  ];

  return (
    <div className="w-full py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#C44D34]"></div>
            <span className="mainTxt text-[#C44D34] text-sm font-medium uppercase tracking-wide">
              Insights
            </span>
            <div className="w-12 h-0.5 bg-[#C44D34]"></div>
          </div>
          <h2 className="boldTxt text-3xl md:text-4xl text-[#2D3748] mb-4">
            Insights & Resources
          </h2>
          <p className="mainTxt text-[#6B7280]">
            Stay informed with the latest developments in North Vista Global
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-[#1E453E] flex items-center justify-center relative">
                <div className="absolute top-4 left-4 bg-[#C44D34] text-white text-xs font-medium px-3 py-1 rounded-sm">
                  {article.category}
                </div>
                <div className="text-white text-center p-4">
                  <svg
                    className="w-10 h-10 mx-auto opacity-80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <span className="mainTxt text-[#1E453E] text-sm font-medium">
                  {article.date}
                </span>
                <h3 className="boldTxt text-xl text-[#2D3748] my-3 leading-tight group-hover:text-[#1E453E] transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="mainTxt text-[#6B7280] mb-5 leading-relaxed">
                  {article.excerpt}
                </p>
                <button className="flex items-center text-[#1E453E] hover:text-[#2D3748] mainTxt font-medium group-hover:underline">
                  Read Analysis
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default NewsSection;
