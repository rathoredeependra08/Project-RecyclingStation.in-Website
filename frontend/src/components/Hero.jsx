import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import recyclingBg from "../assets/recycling-bg.gif";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-[120vh] md:h-screen-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background GIF */}
      <div className="absolute inset-0 -z-10">
        <img
          src={recyclingBg}
          alt="Recycling animation background"
          className="w-full h-full object-cover md:object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-green-950/70"></div>
      </div>

      {/* Hero Content */}
      <div className="text-center px-4 sm:px-6 md:px-16 text-white z-10">
        
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4"
        >
          Let’s Make Recycling{" "}
          <span className="text-green-400">Easy</span> and{" "}
          <span className="text-emerald-400">Rewarding!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-base sm:text-lg md:text-2xl max-w-xl sm:max-w-2xl mx-auto mb-8"
        >
          Join us in turning waste into value — book your recycling pickup today
          and contribute to a cleaner, greener planet 🌍
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => navigate("/request-pickup")}
            className="bg-lime-400 text-green-900 px-6 py-3 rounded-full font-bold text-sm sm:text-base hover:bg-lime-300 transition duration-300"
          >
            Book Pickup
          </button>

          <button
            onClick={() => navigate("/about")}
            className="border-2 border-white px-6 py-3 rounded-full font-bold text-sm sm:text-base hover:bg-white hover:text-green-900 transition duration-300"
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
