import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ComplianceSection from "../components/ComplianceSection";

const Consulting = () => {
  return (
    <>
      <Header />
      <ComplianceSection />

      <div className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Consulting & Compliance Services</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-6">
            Our expert consulting team provides comprehensive support for waste management compliance, EPR (Extended Producer Responsibility) audits, and regulatory guidance.
            We help businesses navigate complex environmental regulations and optimize their waste management strategies.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">EPR Compliance</h3>
              <p>Guidance on Extended Producer Responsibility regulations and compliance requirements.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">Waste Audits</h3>
              <p>Comprehensive waste stream audits to identify optimization opportunities.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">Regulatory Support</h3>
              <p>Assistance with environmental permits, licenses, and regulatory filings.</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">Sustainability Consulting</h3>
              <p>Strategic planning for sustainable waste management and circular economy initiatives.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Consulting;
