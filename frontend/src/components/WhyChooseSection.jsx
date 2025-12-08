import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    "Best Price for Scrap Materials",
    "Email & SMS Notifications for Collections",
    "Vehicles with 100% Valid Documents",
    "Trained & PPE-compliant Workforce",
    "GPCB-authorized & Documented Compliance",
    "GPS-mounted Fleet & Real-time Tracking",
    "Waste Assessment & Reporting",
    "Hassle-free Scheduling & Pickup",
    "Technology-driven Transparent Process",
    "Local & Industrial-scale Solutions",
  ];

  const descriptions = {
    "Best Price for Scrap Materials":
      "Transparent valuation and fair pay for all material types.",
    "Email & SMS Notifications for Collections":
      "Receive instant confirmations and receipts for every pickup.",
    "Vehicles with 100% Valid Documents":
      "All our vehicles are documented, insured, and compliant.",
    "Trained & PPE-compliant Workforce":
      "Skilled teams following safety protocols and trained handling.",
    "GPCB-authorized & Documented Compliance":
      "Certified processes with full documentation for audits.",
    "GPS-mounted Fleet & Real-time Tracking":
      "Track pickups live — from scheduling to handover.",
    "Waste Assessment & Reporting":
      "We audit, classify and report your waste streams professionally.",
    "Hassle-free Scheduling & Pickup":
      "Easy booking, punctual pickup and accountable processing.",
    "Technology-driven Transparent Process":
      "AI-enabled sorting and digital logs for full traceability.",
    "Local & Industrial-scale Solutions":
      "From household collections to industrial recycling operations.",
  };

  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://tcitransportation.com/wp-content/uploads/Eco-Friendly-Logistics-Paving-the-Way-for-a-Sustainable-Tomorrow-TCI_Transportation.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-green-900/60 to-black/90 backdrop-blur-sm animate-gradient-move"></div>

      {/* Floating Eco Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-green-400/40 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative max-w-6xl mx-auto text-center text-white">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-lime-400 drop-shadow-lg mb-8"
        >
          Why Choose Recycling Station?
        </motion.h2>
      </div>

      {/* Subtle animated gradient background for content */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.15),_transparent_60%)]"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10 text-white">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-200 mb-12 max-w-3xl mx-auto"
        >
          We are not just a recycler — we are your compliance partner, ensuring
          efficiency, transparency, and sustainability in every recycling
          operation.
        </motion.p>

        {/* Checklist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <CheckCircle className="w-7 h-7 text-green-300 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {feature}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {descriptions[feature]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
