import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ComplianceSection from "./ComplianceSection";

const Services = () => {
  return (
    <>
      <Header />
      <ComplianceSection />
      
      <div className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Recycling Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">E-Waste Recycling</h3>
            <p>Dispose of your old electronics safely and responsibly.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Plastic Recycling</h3>
            <p>Reduce pollution by recycling plastic materials efficiently.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Paper & Cardboard</h3>
            <p>We collect and recycle all paper and packaging waste.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
