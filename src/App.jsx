import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";
import Herobanner from "./Pages/Herobanner";
import AboutSection from "./Sections/AboutUs";
import ServicesSection from "./Sections/ServicesSection";
import JourneySection from "./Sections/JourneySection";
import FAQSection from "./Sections/FAQSection";
import ContactSection from "./Sections/ContactSection";
import NewsSection from "./Sections/NewsSection";
import Footer from "./Components/Footer";
import TrustedPartners from "./Sections/TrustedBy";
import WhyChooseUs from "./Sections/WhyChooseUs";
import FinalCTABanner from "./Sections/FinalCtaBanner";
import LeadershipSection from "./Sections/LeadershipSection";
import WhyWorkWithUs from "./Sections/WhyWorkWithUs";
import ProgramsSection from "./Sections/ProgramsSection";

function App() {
  return (
    <>
      <Herobanner />
      <TrustedPartners />
      <ProgramsSection />
      <WhyChooseUs />
      <AboutSection />
      <LeadershipSection />
      <WhyWorkWithUs />
      <NewsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
