import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, FileText, ShieldCheck } from "lucide-react";

const certifications = [
  "100% GPCB and CPCB Compliance",
  "GPCB Approved",
  "Regulatory Updates on GPCB and CPCB",
  '"Zero Landfills" Certificate for Industrial Garbage',
  "Certificate of Waste Diversion Towards Recycling",
  '"End Usage Certificate" for All Scrap Material',
  "Labor Training Certificate",
  "Manifest for Hazardous Waste",
  "Manifest for E-Waste",
  "Manifest for Plastic Waste",
];

const ComplianceSection = () => {
  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://tcitransportation.com/wp-content/uploads/Eco-Friendly-Logistics-Paving-the-Way-for-a-Sustainable-Tomorrow-TCI_Transportation.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay for Blur and Transparency */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-lg"></div>

      {/* Animated background blur effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-green-300/30 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-green-400/20 rounded-full blur-3xl"
          animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Certifications for Compliance
          </h2>
          <p className="text-white mb-10 leading-relaxed">
            With <span className="font-semibold text-green-600">Recycling Station’s</span> waste recycling in Ahmedabad,
            you get top-notch waste management services with genuine certifications and reports,
            ensuring full adherence to Government regulations.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ delay: i * 0.05, duration: 0.5, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-white cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                </motion.div>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Illustration Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative bg-white shadow-2xl rounded-3xl border border-green-100 p-8 w-[90%] sm:w-[80%] max-w-md transform-gpu"
          >
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="w-14 h-14 text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Certified Excellence
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We proudly maintain full regulatory compliance with GPCB and CPCB standards for sustainable waste management.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <FileText className="w-6 h-6 text-green-500" />
                <span className="text-green-700 font-medium">
                  Official Certifications Verified
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default ComplianceSection;
