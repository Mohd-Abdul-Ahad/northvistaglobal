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
