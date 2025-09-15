import { useState } from "react";
import "./App.css";
import Herobanner from "./Pages/Herobanner";
import Footer from "./Components/Footer";
import TrustedPartners from "./Sections/TrustedBy";
import WhyChooseUs from "./Sections/WhyChooseUs";
import WhyWorkWithUs from "./Sections/WhyWorkWithUs";
import ProgramsSection from "./Sections/ProgramsSection";
import ServicesSection from "./Sections/ServicesSection";
import FeaturedPathways from "./Sections/FeaturedPathways";
import FAQs from "./Sections/FAQs";


function App() {
  return (
    <>
      <Herobanner />
      <ServicesSection />
      <FeaturedPathways />
      <ProgramsSection />
      <WhyChooseUs />
      <WhyWorkWithUs />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
