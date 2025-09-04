import { useState } from "react";
import "./App.css";
import Herobanner from "./Pages/Herobanner";
import AboutSection from "./Sections/AboutUs";
import ContactSection from "./Sections/ContactSection";
import NewsSection from "./Sections/NewsSection";
import Footer from "./Components/Footer";
import TrustedPartners from "./Sections/TrustedBy";
import WhyChooseUs from "./Sections/WhyChooseUs";
import LeadershipSection from "./Sections/LeadershipSection";
import WhyWorkWithUs from "./Sections/WhyWorkWithUs";
import ProgramsSection from "./Sections/ProgramsSection";
import ServicesSection from "./Sections/ServicesSection";
import FeaturedPathways from "./Sections/FeaturedPathways";
import FAQs from "./Sections/FAQs";

function App() {
  return (
    <>
      <Herobanner />
      <TrustedPartners />
      <ServicesSection />
      <FeaturedPathways />
      <ProgramsSection />
      <WhyChooseUs />
      <AboutSection />
      <LeadershipSection />
      <WhyWorkWithUs />
      <FAQs />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
