import { Helmet } from "react-helmet";


const SEO = () => {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "North Vista Global",
      "url": "https://www.northvistaglobal.com/",
      "logo": "https://www.northvistaglobal.com/assets/logo.png",
      "email": "info@northvistaglobal.com",
      "telephone": "+1-437-837-INFO",
      "sameAs": [
        "https://www.linkedin.com/company/north-vista-global"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "North Vista Global",
      "url": "https://www.northvistaglobal.com/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.northvistaglobal.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.northvistaglobal.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://www.northvistaglobal.com/about"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Services",
          "item": "https://www.northvistaglobal.com/services"
        }
      ]
    }
  ];

  return (
    <Helmet>
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </Helmet>
  );
};

export default SEO;
