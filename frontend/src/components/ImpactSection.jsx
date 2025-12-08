import React from "react";
import { motion } from "framer-motion";

const impactData = [
  {
    img: "https://www.undp.org/sites/g/files/zskgke326/files/styles/scaled_image_large/public/migration/in/UNDP-India-2021-waste-pickers-3.jpg?itok=ddQSBZk4",
    title: (
      <>
        Empowered <span className="font-semibold text-green-600">1200+</span> Waste<br />Pickers
      </>
    ),
  },
  {
    img: "https://assets.weforum.org/article/image/vpgU8LqOf263zmgUPYF3k1b2gNnJcsSfdbXnUQol840.jpg",
    title: (
      <>
        Recycling Station Handles<br />
        <span className="font-semibold text-green-600">2,00,000+ Tonnes</span> Of Dry<br />Waste
      </>
    ),
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/022/448/238/large_2x/save-earth-day-poster-environment-day-nature-green-ai-generative-glossy-background-images-tree-and-water-free-photo.jpg",
    title: (
      <>
        Diverts <span className="font-semibold text-green-600">3,50,000+ </span> Tonnes Of<br />
        <span className="font-semibold text-green-600">CO₂</span> Equivalent Emissions
      </>
    ),
  },
];

const ImpactSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100 py-24 px-4 md:px-16 lg:px-32">
      
      {/* Eco shimmer animated background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.10),_transparent_70%)]"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10">
        
        {/* Top Label */}
        <p className="text-center text-[#009688] font-medium tracking-wide text-lg mb-2">
          Recycling Station's Impact
        </p>

        {/* Main Title */}
        <h2 className="text-center text-[#12213A] font-bold text-3xl md:text-4xl mb-20 leading-snug">
          Driving integrated Social, Economic, and Environmental transformation
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 place-items-center">
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="w-40 h-40 rounded-full overflow-hidden border-[6px] border-[#E8F2EE] shadow-md hover:shadow-xl transition-all">
                <img src={item.img} alt="impact" className="w-full h-full object-cover" />
              </div>

              {/* Text */}
              <p className="mt-6 text-[20px] text-[#3D4A54] leading-relaxed font-medium">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
