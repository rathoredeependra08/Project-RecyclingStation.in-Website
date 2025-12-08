import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const ExpertiseSection = () => {
  const expertiseData = [
    {
      image: "https://as1.ftcdn.net/v2/jpg/05/54/18/68/1000_F_554186845_RxfPgAuCn0dhYbkBJFz8FkMTPjRxcK2A.jpg",
      title: "Smart Waste Segregation",
      description:
        "Our AI-powered sorting system ensures precise waste segregation, identifying recyclables with accuracy. We optimize recovery, reduce landfill pressure, and support circular sustainability for future generations.",
    },
    {
      image: "https://manvillerecycling.com/wp-content/uploads/2021/01/How-scrap-metal-recycling-reduces-environmental-pollution.jpg",
      title: "Industrial Scrap Recycling",
      description:
        "From metals and plastics to e-waste, our cutting-edge recycling plants transform industrial scrap into reusable materials — conserving resources and powering a greener industrial ecosystem.",
    },
    {
      image: "https://th.bing.com/th/id/OIP.CejYKvzYB-QX99VV_GJTBwHaD4?w=335&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      title: "Certified Compliance & Safety",
      description:
        "Being a GPCB-authorized recycler, we maintain 100% environmental compliance. Every process is documented and certified — ensuring transparency, safety, and environmental accountability.",
    },
    {
      image: "https://tse4.mm.bing.net/th/id/OIP.TPHlJt5IJQyCZyX7fx4BhwHaEO?rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "On-Time Pickup & Eco Logistics",
      description:
        "Our smart logistics fleet ensures timely, traceable pickups with minimal carbon impact. With GPS optimization, we deliver efficiency and sustainability in every mile.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 px-8 bg-gradient-to-br from-green-950 via-green-800 to-cyan-800 text-white">
      {/* Animated Aurora background */}
      <div className="absolute inset-0">
        <div className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.2),_transparent_70%)] animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.2),_transparent_70%)] animate-[spin_25s_linear_infinite_reverse]"></div>
      </div>

      {/* Header */}
      <div className="relative max-w-7xl mx-auto text-center mb-16 z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-cyan-400 drop-shadow-lg"
        >
          Our Expertise
        </motion.h2>
        <p className="text-gray-200 text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
          As a leader in eco-innovation, Recycling Station integrates technology and sustainability
          to redefine modern waste management — from intelligent segregation to certified recycling.
        </p>
      </div>

      {/* Expertise Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {expertiseData.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotateY: 3 }}
            transition={{ type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-cyan-500/30 transform-gpu transition-all duration-500"
          >
            {/* Top image */}
            <div className="h-52 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-green-100">
                {item.title}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Glow effect border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400/10 to-cyan-400/10 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
