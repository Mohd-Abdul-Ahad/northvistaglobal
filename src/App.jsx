import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";
import Herobanner from "./Pages/Herobanner";
import AboutSection from "./Sections/AboutUs";
import ServicesSection from "./Sections/ServicesSection";
import ProgramsSection from "./Sections/ProgramsSection";
import JourneySection from "./Sections/JourneySection";
import FAQSection from "./Sections/FAQSection";
import ContactSection from "./Sections/ContactSection";
import NewsSection from "./Sections/NewsSection";
import Footer from "./Components/Footer";
import TrustedPartners from "./Sections/Trustedpartners";
import WhyChooseUs from "./Sections/WhyChooseUs";
import FinalCTABanner from "./Sections/FinalCtaBanner";
import LeadershipSection from "./Sections/LeadershipSection";
import WhyWorkWithUs from "./Sections/WhyWorkWithUs";

function App() {
  return (
    <>
      <Herobanner/>
      <TrustedPartners/>
      <AboutSection/>
      <ServicesSection/>
      <WhyChooseUs/>
      <LeadershipSection/>
      <ProgramsSection/>
      <NewsSection/>
      <WhyWorkWithUs/>
      <ContactSection/>
      <Footer/>
    </>
  );
}

export default App;
