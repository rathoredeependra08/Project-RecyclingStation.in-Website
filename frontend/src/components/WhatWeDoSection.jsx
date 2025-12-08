import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/Gemini_Generated_Image_8zbrto8zbrto8zbr.png"; // <-- your uploaded image

const WhatWeDoSection = () => {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax & Overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Subtle eco shimmer animation */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.1),transparent_60%)]"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />



      {/* Centered Text Content */}
      <div className="relative z-10 text-center text-white px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold tracking-wide drop-shadow-lg"
        >
          What We Do?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-20 text-xl sm:text-2xl font-medium text-white drop-shadow-md"
        >
          Recycling Station's Process
        </motion.p>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
