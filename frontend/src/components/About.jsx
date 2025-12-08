import React from "react";
import { motion } from "framer-motion";
import { Recycle, ShieldCheck, Award, ClipboardCheck } from "lucide-react";


const About = () => {
  return (
      
     
   
    
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-green-50 py-28">
      {/* Animated Background Symbol */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/2933/2933245.png"
        alt="Recycling Symbol"
        className="absolute w-96 opacity-10 bottom-0 right-0 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-green-700 mb-6">
            About <span className="text-emerald-500">Recycling Station</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            “We do not inherit the Earth from our ancestors, we borrow it from our children.”  
            At <strong>Recycling Station</strong>, we are redefining waste management for a sustainable tomorrow.  
            As a <strong>GPCB-authorized</strong> waste management company in Ahmedabad, we deliver
            certified, compliant, and efficient recycling solutions for industries and communities.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
           Building upon <strong>25 years of established expertise</strong> , we proudly represent the <strong> second generation</strong>  of leadership in this industry With advanced disposal infrastructure, a skilled workforce, and transparent systems,
            we ensure a full-circle recycling process—from source collection to safe, eco-friendly disposal.
            Join us in transforming waste into worth while protecting our planet.
          </p>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mt-10">
            {/* Recycle Smart */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="bg-white shadow-md rounded-xl p-6 border-l-4 border-green-500"
            >
              <Recycle className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="font-semibold text-lg text-gray-800">Recycle Smart</h3>
              <p className="text-sm text-gray-600 mt-1">
                Smarter recycling methods that prioritize sustainability and innovation.
              </p>
            </motion.div>

            {/* Quality Service */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="bg-white shadow-md rounded-xl p-6 border-l-4 border-emerald-500"
            >
              <Award className="w-10 h-10 text-emerald-600 mb-3" />
              <h3 className="font-semibold text-lg text-gray-800">Quality Service</h3>
              <p className="text-sm text-gray-600 mt-1">
                Reliable pickups, transparent processes, and eco-conscious handling—every time.
              </p>
            </motion.div>

            {/* 100% PCB Compliance */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="bg-white shadow-md rounded-xl p-6 border-l-4 border-teal-500"
            >
              <ClipboardCheck className="w-10 h-10 text-teal-600 mb-3" />
              <h3 className="font-semibold text-lg text-gray-800">100% PCB Compliance</h3>
              <p className="text-sm text-gray-600 mt-1">
                We strictly adhere to Pollution Control Board standards ensuring lawful recycling.
              </p>
            </motion.div>

            {/* GPCB Authorized */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="bg-white shadow-md rounded-xl p-6 border-l-4 border-lime-500"
            >
              <ShieldCheck className="w-10 h-10 text-lime-600 mb-3" />
              <h3 className="font-semibold text-lg text-gray-800">GPCB Authorized</h3>
              <p className="text-sm text-gray-600 mt-1">
                Certified and approved recycler recognized by the Gujarat Pollution Control Board.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

    
  );
};

export default About;
