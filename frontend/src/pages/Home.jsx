import React from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import About from "../components/About";
import ExpertiseSection from "../components/ExpertiseSection";
import WhyChooseSection from "../components/WhyChooseSection";
import RequestPickupSection from "../components/RequestPickupSection";
import ComplianceSection from "../components/ComplianceSection";
import RecyclingProcessSVG from "../components/RecyclingProcessSVG";
import WhatWeDoSection from "../components/WhatWeDoSection";
import IndustryGrid from "../components/IndustryGrid";
import ImpactSection from "../components/ImpactSection";
const Home = () => {
  return (
    <>
      
      <Hero />
      <Navbar />
        <About />
        <ExpertiseSection />
          <WhyChooseSection />   
          <ComplianceSection />
           <WhatWeDoSection />
           <RecyclingProcessSVG />
          <IndustryGrid />
           <ImpactSection />

      
    </>
  );
};

export default Home;
