// app/about/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RecyclingProcessSVG from "../components/RecyclingProcessSVG";
import IndustryGrid from "../components/IndustryGrid";
import ImpactSection from "../components/ImpactSection";
import Footer from "../components/Footer";
import recyclingLogo from "../assets/recycling-station-logo.jpg";

/**
 * Combined About page for 'Recycling Station'.
 * Features: 4 Hero variants, Framer Motion, Stats, Timeline, Testimonials, Detailed Content.
 * Content is enriched with specific waste streams, compliance details, and digital platform features.
 */

/* -------------------------
 * Content Arrays from 1st Code
---------------------------*/

// Detailed Waste Stream Expertise
const expertise = [
  { title: "Plastic Waste (Certified)", icon: "🧴", description: "End-to-end management of PET, HDPE, LDPE, PP and mixed plastics with certified recycling and traceable documentation." },
  { title: "E-Waste (WEEE Compliant)", icon: "💻", description: "Secure collection, dismantling and recovery of electronics, ensuring safe handling of hazardous components and reuse of valuable metals." },
  { title: "Hazardous Waste", icon: "⚠️", description: "Compliant storage, transportation and treatment of industrial chemicals and by-products as per GPCB and CPCB guidelines." },
  { title: "Industrial Scrap & Metal", icon: "🔩", description: "Systematic handling of ferrous, non-ferrous and mixed metal scrap generated across industrial operations." },
  { title: "Organic & Biodegradable", icon: "🌱", description: "Responsible conversion of organic waste—food, garden and agro waste—into compost, biogas and reusable earth-friendly outputs." },
  { title: "Construction & Demolition", icon: "🧱", description: "Recycling of concrete, bricks, tiles and debris to minimize landfill dependency and promote sustainable construction cycles." },
];

// Digital Platform Features
const platformFeatures = [
  { title: "Pickup Scheduling", icon: "📅", description: "Book doorstep waste pickups instantly or plan scheduled collections tailored to your operational needs." },
  { title: "Compliance Check", icon: "✅", description: "Stay audit-ready with easy access to certificates, manifests and regulator-approved compliance documents." },
  { title: "GPS Tracking", icon: "📍", description: "Track your waste movement in real-time and monitor the recycling trail with transparency." },
  { title: "Digital Documentation", icon: "📄", description: "Access digital records including E-Certificates, Impact Reports and trackable service logs." },
];

/* -------------------------
 * Small Helper Components (from 2nd Code)
---------------------------*/
const CTAButton = ({ children, onClick, primary = true }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-full font-semibold transition-transform ${
      primary
        ? "bg-[#00A651] text-white hover:scale-[1.03]"
        : "bg-transparent border border-white/30 text-white hover:bg-white/10"
    }`}
  >
    {children}
  </button>
);

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-extrabold text-[#0f5132]">{value}</div>
    <div className="text-sm text-gray-600 mt-1">{label}</div>
  </div>
);

const GradientBorderCard = ({ children, className = "" }) => (
  <div
    className={`rounded-xl p-6 ${className}`}
    style={{
      background: "white",
      boxShadow: "0 8px 30px rgba(8,15,20,0.06)",
      border: "1px solid rgba(15,81,50,0.04)",
      position: "relative",
    }}
  >
    {/* animated gradient border */}
    <div
      aria-hidden
      className="absolute -inset-px rounded-xl"
      style={{
        background: `linear-gradient(90deg, #00A651, #12b66b)`,
        mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        padding: "1px",
        zIndex: -1,
        opacity: 0.1,
        transition: "opacity 300ms ease",
      }}
    />
    {children}
  </div>
);

/* -------------------------
 * HERO VARIANTS (Adapted from 2nd Code)
---------------------------*/

// Component for highlighting keywords
const Highlight = ({ children }) => (
  <span className="font-bold text-[#052e1d]">{children}</span>
);

// Merged Intro Content for Hero
const HeroIntroContent = ({ onCTAClick }) => (
  <>
    <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
      <div className="w-[90%] md:w-[65%]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#052e1d]">
          About Recycling Station
        </h1>

        {/* Merged detailed intro from 1st code - KEYWORDS HIGHLIGHTED HERE */}
        <p className="mt-3 max-w-4xl text-lg text-white text-justify">
          
          <Highlight>Recycling Station</Highlight> is a modern waste-management and recycling company committed to making sustainability simple, reliable, and accessible for everyone. The platform delivers end-to-end <Highlight>multi-stream waste solutions,</Highlight> handling <Highlight>plastic waste,</Highlight> <Highlight>e-waste,</Highlight><Highlight>hazardous materials,</Highlight> <Highlight>metal scrap,</Highlight> <Highlight>organic waste,</Highlight>and<Highlight>construction debris</Highlight>with complete safety and regulatory compliance. As a fully certified operation working under<Highlight>PCB/GPCB/CPCB guidelines,</Highlight>Recycling Station ensures every pickup, transfer, and processing step is transparent, traceable, and environmentally responsible.

          Powered by <Highlight>GPS-tracked collection vehicles,</Highlight> <Highlight>digital documentation,</Highlight> audit-ready reporting, and real-time dashboards, the system offers unmatched clarity and control for users. Whether it’s a home, residential society, small business, large industry, hospital, or commercial complex, Recycling Station adapts its services to meet diverse waste-handling needs with efficiency and professionalism.

          With its <Highlight>state-of-the-art processing plant located in Ahmedabad, Gujarat</Highlight>. The company plays a key role in reducing landfill dependency and strengthening India’s circular economy. Over the years, Recycling Station has helped divert significant tonnes of waste from landfills, increased material recovery rates, reduced carbon emissions, and contributed to cleaner, healthier cities.

          Driven by a mission to build a greener future, Recycling Station invites visitors to explore its services, schedule a pickup, or partner for long-term sustainable waste solutions. The platform blends technology, compliance, and care—creating a waste-management experience that is easy, trustworthy, and environmentally impactful.
        </p>
      </div>
      <div className="w-[90%] md:w-[25%] flex justify-center">
        <img src={recyclingLogo} alt="Recycling Station Logo" className="w-full h-auto object-contain" />
      </div>
    </div>

    <div className="mt-8 flex flex-wrap gap-4 items-center">
      <CTAButton onClick={() => onCTAClick("quote")}>Get a Compliance Quote</CTAButton>
      <CTAButton onClick={() => onCTAClick("expertise")} primary={false}>
        Explore Our Expertise
      </CTAButton>
    </div>
  </>
);

// Hero Variant A1: Eco Gradient Mesh
const HeroA1 = (props) => {
  const imageUrl = "https://img.freepik.com/premium-photo/landfill-operation-trucks-action-smoking-stacks-backdrop-stark-pollution-reality_39665-10275.jpg?w=2000";
  return (
    <header className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background: `url(${imageUrl}) center/cover, radial-gradient(1200px 600px at 10% 10%, rgba(0,166,81,0.06), transparent 10%), radial-gradient(1000px 500px at 90% 90%, rgba(52,211,153,0.04), transparent 12%), linear-gradient(180deg,#f3fff7 0%, #f9fff9 100%)`,
          filter: 'blur(5px)',
        }}
      />
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 top-6 w-72 h-72 rounded-full bg-[#dff8ea] opacity-60 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 bottom-6 w-72 h-72 rounded-full bg-[#e6fff3] opacity-60 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">
        <HeroIntroContent {...props} />
      </div>
    </header>
  );
};

// Hero Variant A2: Recycled Paper Texture
const HeroA2 = (props) => {
  const paperUrl = "https://images.unsplash.com/photo-1503275201453-4c4b2f63e8f1?auto=format&fit=crop&w=1600&q=60"; // placeholder
  return (
    <header className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover opacity-30"
        style={{
          backgroundImage: `url(${paperUrl})`,
          filter: "grayscale(10%) brightness(0.95)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#f4fff6]/60 to-white/70" />

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">
        <HeroIntroContent {...props} />
      </div>
    </header>
  );
};

// Hero Variant A3: Industrial Photo Tint
const HeroA3 = (props) => {
  const facilityUrl = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=60"; // placeholder
  return (
    <header className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${facilityUrl})`,
          opacity: 0.16,
          filter: "blur(1px) saturate(80%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f6fff8]/80 to-white/90" />

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">
        <HeroIntroContent {...props} />
      </div>
    </header>
  );
};

// Hero Variant A4: Minimal White + Faint Green Waves
const HeroA4 = (props) => {
  return (
    <header className="relative overflow-hidden">
      <svg
        className="absolute left-0 top-0 w-full h-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#e6fff3" />
            <stop offset="1" stopColor="#f9fff9" />
          </linearGradient>
        </defs>
        <path
          d="M0,160 C160,240 320,80 480,120 C640,160 800,240 960,200 C1120,160 1280,80 1440,120 L1440 0 L0 0 Z"
          fill="url(#g1)"
          opacity="0.95"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">
        <HeroIntroContent {...props} />
      </div>
    </header>
  );
};

/* -------------------------
 * CTA Component (Updated with 1st code's copy)
---------------------------*/
function GradientCTA() {
    return (
      <div
        id="quote"
        className="rounded-xl p-10 text-center"
        style={{
          background: `linear-gradient(135deg, #00A651 0%, #12b66b 100%)`,
          color: "white",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h3 className="text-2xl md:text-3xl font-bold">Reliable. Responsible. Fully Certified.</h3>
        <p className="mt-3 text-lg max-w-4xl mx-auto">
          Whether you need compliant waste disposal, industrial documentation support or sustainable recycling partnerships, **Recycling Station** ensures a seamless experience backed by trust and transparency.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="/contact" className="px-6 py-3 bg-white rounded-full text-[#0f5132] font-semibold transition hover:bg-gray-100">Get a Service & Compliance Quote</a>
          <a href="/request-pickup" className="px-6 py-3 bg-white/10 rounded-full border border-white/20 transition hover:bg-white/20">Explore Our Digital Platform</a>
        </div>
      </div>
    );
  }

/* -------------------------
 * MAIN PAGE COMPONENT
---------------------------*/

export default function AboutPage({ searchParams }) {
  // Logic to read query param or fallback to default
  const variant = (searchParams && searchParams.variant) || (typeof window !== "undefined" && new URLSearchParams(window.location.search).get("variant")) || "A1";

  const [testiIndex, setTestiIndex] = useState(0);
  const testimonials = [
    { name: "Suresh Kumar", role: "Facility Manager — Auto Component Plant", quote: "Recycling Station improved our scrap recovery by 40% and simplified regulatory reporting." },
    { name: "Dr. Meera Patel", role: "Hospital Admin", quote: "Their biomedical and hazardous handling is methodical and audit-ready — highly recommended." },
    { name: "Anita Verma", role: "Residential Committee Head", quote: "The pickup scheduling and rewards made our colony actively recycle for the first time." },
  ];

  const timeline = [
    { year: "2000", title: "Started Operations", text: "Founders initiated local collection services focusing on community awareness." },
    { year: "2010", title: "Expanded to Industrial Services", text: "Scale-up to handle industrial scrap and partner with certified recyclers." },
    { year: "2018", title: "Digital Platform Launch", text: "Introduced online scheduling, GPS tracking and digital manifests." },
    { year: "2024", title: "Smart Station Rollout", text: "Launch of IoT-enabled automated recycling kiosks and enterprise dashboards." },
  ];

  // smooth scroll to section
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // auto-advance testimonials
  useEffect(() => {
    const t = setInterval(() => setTestiIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, [testimonials.length]);


  // Helper component for icon styling (standardized to 2nd code's theme)
  const ExpertiseIcon = ({ children }) => (
    <div className={`p-3 rounded-full bg-green-100 text-gray-800 inline-flex items-center justify-center shadow-md`}>
      {children}
    </div>
  );


  return (
    <main className="bg-[#f7fff8] text-gray-800 min-h-screen">
      {/* choose hero variant */}
      {variant === "A1" && <HeroA1 onCTAClick={scrollTo} />}
      {variant === "A2" && <HeroA2 onCTAClick={scrollTo} />}
      {variant === "A3" && <HeroA3 onCTAClick={scrollTo} />}
      {variant === "A4" && <HeroA4 onCTAClick={scrollTo} />}

      {/* --- 1. CORE VALUES (from 2nd code) --- */}
      <section id="values" className="px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto py-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f5132] mb-6 text-center">Our Core Principles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <GradientBorderCard>
            <h3 className="text-2xl font-bold text-[#0f5132]">Strict Environmental Compliance</h3>
            <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">Every process is executed under certified, regulator-approved guidelines, ensuring your operations remain fully compliant with PCB norms.</p>
          </GradientBorderCard>

          <GradientBorderCard>
            <h3 className="text-2xl font-bold text-[#0f5132]">Streamlined, Technology-Led</h3>
            <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">Digital tracking, automated workflows, and data-driven reporting bring clarity and operational ease to all waste handling logistics.</p>
          </GradientBorderCard>

          <GradientBorderCard>
            <h3 className="text-2xl font-bold text-[#0f5132]">Sustainable Resource Recovery</h3>
            <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">Our objective is maximum material recovery, recycling, and reintegration of resources back into the circular economy.</p>
          </GradientBorderCard>
        </div>
      </section>

      {/* --- 2. WASTE STREAM EXPERTISE (from 1st code) --- */}
      <section id="expertise" className="max-w-7xl mx-auto px-6 py-12 bg-white/50 rounded-xl shadow-inner">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0f5132] mb-8 text-center">Diverse Waste Streams, One Trusted Partner</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 bg-white rounded-xl shadow-md transition duration-300 hover:shadow-lg hover:border-b-4 border-[#00A651]"
            >
              <div className="flex items-center mb-3">
                <ExpertiseIcon>{item.icon}</ExpertiseIcon>
                <h3 className="ml-4 text-xl font-semibold text-[#0f5132]">
                  {item.title}
                </h3>
              </div>
              <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 3. DIGITAL PLATFORM FEATURES (from 1st code) --- */}
      <section id="platform" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0f5132] mb-8 text-center">A Smarter Digital Experience for Every User</h2>
        <p className="text-lg text-gray-700 mb-10 max-w-4xl mx-auto text-center">
          Our website functions as an integrated digital recycling platform—equipped with simple navigation, clear workflows and intuitive tools designed to support businesses and individuals in managing waste responsibly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {platformFeatures.map((feature, index) => (
                <motion.div 
                    key={index} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-white shadow-md border-t-4 border-[#34d399]"
                >
                    <ExpertiseIcon>{feature.icon}</ExpertiseIcon>
                    <h4 className="mt-3 font-bold text-lg text-[#0f5132]">{feature.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                </motion.div>
            ))}
        </div>
      </section>

      {/* --- 4. IMPACT STATS (from 2nd code) --- */}
      <section id="impact" className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-xl p-8 shadow-inner">
          <Stat value="350K+" label="Tonnes Diverted" />
          <Stat value="200K+" label="Tonnes Processed" />
          <Stat value="1,200+" label="Waste Pickers Empowered" />
          <Stat value="95%" label="Materials Reclaimed" />
        </div>
      </section>

      {/* --- 5. TIMELINE (from 2nd code) --- */}
      <section id="timeline" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0f5132] mb-8">Our Journey to Excellence</h2>
        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00A651] to-transparent opacity-30" />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#e9fff0] to-[#d8ffe8] text-[#0f5132] font-bold">
                    {t.year}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{t.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{t.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. TESTIMONIALS (from 2nd code) --- */}
      <section id="testimonials" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0f5132] mb-6">What Our Partners Say</h2>

        <div className="relative">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={testiIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45 }}
              className="bg-white rounded-xl p-8 shadow-md border-t-4 border-[#00A651]"
            >
              <blockquote className="text-gray-800 italic">“{testimonials[testiIndex].quote}”</blockquote>
              <div className="mt-4">
                <div className="font-semibold">{testimonials[testiIndex].name}</div>
                <div className="text-sm text-gray-500">{testimonials[testiIndex].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTestiIndex(idx)}
                  className={`w-3 h-3 rounded-full ${idx === testiIndex ? "bg-[#00A651]" : "bg-gray-300"}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setTestiIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
                className="px-3 py-2 rounded bg-white border text-sm shadow-sm"
              >
                Prev
              </button>
              <button
                onClick={() => setTestiIndex((i) => (i + 1) % testimonials.length)}
                className="px-3 py-2 rounded bg-white border text-sm shadow-sm"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
      <>
       <RecyclingProcessSVG />
        <IndustryGrid />
       <ImpactSection />
        <footer />
        </>
      {/* --- 7. CTA FOOTER (from 2nd code, content updated) --- */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <GradientCTA />
      </section>
    </main>
  );
} 