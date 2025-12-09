// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import {
  Factory,
  Recycle,
  Settings,
  Cpu,
  Circle,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import megaAnim from "../assets/mega-anim.json"; // put your lottie here

// ===== Services: grouped into categories (3-column friendly) =====
const SERVICES = [
  {
    category: "Core Services",
    items: [
      {
        id: "hazardous",
        title: "Hazardous Waste Management",
        desc: "Safe handling & disposal for hazardous streams.",
        icon: "factory",
        route: "/services/hazardous-waste",
        loader: () => import("../pages/HazardousWaste"),
      },
      {
        id: "industrial",
        title: "Industrial Waste Management",
        desc: "Large-scale industrial waste solutions.",
        icon: "settings",
        route: "/services/industrial-waste",
        loader: () => import("../pages/IndustrialWaste"),
      },
      {
        id: "plastic",
        title: "Plastic Waste Management",
        desc: "Collection, sorting & recycling of plastics.",
        icon: "recycle",
        route: "/services/plastic-waste",
        loader: () => import("../pages/PlasticWaste"),
      },
    ],
  },
  {
    category: "Specialized",
    items: [
      {
        id: "ewaste",
        title: "E-Waste Management",
        desc: "Secure processing & responsible recycling of electronics.",
        icon: "cpu",
        route: "/services/e-waste",
        loader: () => import("../pages/EWaste"),
      },
      {
        id: "rubber",
        title: "Rubber Scrap Waste",
        desc: "Recycling & resale solutions for rubber scrap.",
        icon: "circle",
        route: "/services/rubber-scrap",
        loader: () => import("../pages/RubberScrap"),
      },
    ],
  },
  {
    category: "Support",
    items: [
      {
        id: "consult",
        title: "Consulting & Compliance",
        desc: "EPR, audits, and compliance support.",
        icon: "settings",
        route: "/services/consulting",
        loader: () => import("../pages/Consulting"),
      },
      {
        id: "pickup",
        title: "Request Pickup",
        desc: "On-demand waste pickup for businesses.",
        icon: "recycle",
        route: "/request-pickup",
        loader: () => import("../pages/BookPickup"),
      },
    ],
  },
];

// icon mapper
const ICONS = {
  factory: Factory,
  recycle: Recycle,
  settings: Settings,
  cpu: Cpu,
  circle: Circle,
};

export default function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMega, setOpenMega] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefetched = useRef({});

  // prefetch loader only once
  const prefetchPage = (id, loader) => {
    if (!prefetched.current[id]) {
      prefetched.current[id] = true;
      loader();
    }
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close on escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenMega(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Panel animation variants
  const panelVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
  ${isScrolled ? "bg-green-900/90 shadow-lg py-2" : "py-3"}
  md:py-4`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate("/")}>
          <div className="text-3xl font-extrabold text-white">♻️</div>
          <div className="block">
            <div className="text-white font-extrabold text-lg">Recycling<span className="text-emerald-300">Station</span></div>
            <div className="text-xs text-white/70 -mt-1">Sustainable Waste Solutions</div>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => navigate("/")} className="text-white hover:text-emerald-300">Home</button>

          {/* MEGA DROPDOWN WRAPPER */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMega(true)}
            onMouseLeave={() => setOpenMega(false)}
          >
            <button
              className="flex items-center gap-2 text-white hover:text-emerald-300 transition"
              aria-expanded={openMega}
              aria-controls="mega-panel"
            >
              <span>Services</span>
              <motion.span
                animate={{ rotate: openMega ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                <ChevronDown size={16} />
              </motion.span>
            </button>

            {/* floating blurred shapes behind mega panel */}
            <div className={`pointer-events-none absolute -top-8 left-0 right-0 z-30 ${openMega ? "opacity-100" : "opacity-0"} transition-all duration-500`}>
              <div className="absolute -left-20 top-0 w-48 h-48 bg-emerald-400/10 rounded-full blur-3xl transform rotate-12"></div>
              <div className="absolute right-8 top-4 w-56 h-56 bg-lime-400/8 rounded-full blur-4xl transform -rotate-6"></div>
            </div>

            {/* MEGA PANEL */}
            <AnimatePresence>
              {openMega && (
                <motion.div
                   id="mega-panel"
  initial="hidden"
  animate="visible"
  exit="hidden"
  variants={panelVariants}
  transition={{ duration: 0.20 }}
  className={`absolute left-1/2 -translate-x-1/2 mt-3 w-[90vw] md:w-[880px]
 
    bg-white/95 rounded-2xl shadow-2xl border border-gray-100 backdrop-blur-xl p-6 
    grid grid-cols-3 gap-6 z-40
    ${openMega ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
  `}
                >
                  {/* LEFT + MIDDLE: categories */}
                  <div className="col-span-2 grid grid-cols-2 gap-6">
                    {SERVICES.map((section) => (
                      <div key={section.category}>
                        <h4 className="text-sm font-semibold text-emerald-800 mb-3">{section.category}</h4>
                        <div className="space-y-3">
                          {section.items.map((it) => {
                            const Icon = ICONS[it.icon] || Recycle;
                            return (
                              <button
                                key={it.id}
                                onMouseEnter={() => prefetchPage(it.id, it.loader)}
                                onClick={() => {
                                  navigate(it.route);
                                  setOpenMega(false);
                                }}
                                className="group w-full text-left p-3 rounded-lg hover:bg-emerald-50 transition-all flex items-start gap-3"
                              >
                                <div className="p-2 rounded-md bg-emerald-50 group-hover:bg-emerald-100 transition">
                                  <Icon size={20} className="text-emerald-600" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-emerald-900 group-hover:text-emerald-700">{it.title}</div>
                                  <div className="text-xs text-slate-500 mt-1">{it.desc}</div>
                                </div>
                                {/* hover trail */}
                                <span className="ml-auto hidden group-hover:inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* RIGHT: Lottie / CTA column */}
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-emerald-50 to-white/60 p-3 border border-emerald-100 flex items-center justify-center">
                      <div className="w-64 h-44">
                        <Lottie animationData={megaAnim} loop autoplay />
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-sm text-slate-700 mb-2">Need help picking a service?</div>
                      <button
                        onClick={() => {
                          navigate("/contact");
                          setOpenMega(false);
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white font-medium shadow"
                      >
                        Contact Sales
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button onClick={() => navigate("/about")} className="text-white hover:text-emerald-300">About Us</button>
          <button onClick={() => navigate("/contact")} className="text-white hover:text-emerald-300">Contact</button>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => navigate("/admin-login")} className="bg-white text-emerald-800 px-4 py-2 rounded-full font-semibold hover:scale-105 transition">
            Admin Login
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen((s) => !s)} className="text-white">
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE PANEL */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }} className="md:hidden bg-white/95 shadow-lg border-t border-gray-100">
            <div className="px-6 py-6">
              <button onClick={() => { navigate("/"); setMobileOpen(false); }} className="block text-emerald-800 font-semibold mb-4">Home</button>

              <div className="mb-4">
                <div className="text-slate-700 font-semibold mb-2">Services</div>
                <div className="space-y-2">
                  {SERVICES.flatMap(s => s.items).map(it => (
                    <button
                      key={it.id}
                      onClick={() => { prefetchPage(it.id, it.loader); navigate(it.route); setMobileOpen(false); }}
                      className="w-full text-left px-3 py-2 rounded hover:bg-emerald-50 transition text-slate-700"
                    >
                      {it.title}
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={() => { navigate("/about"); setMobileOpen(false); }} className="block text-slate-700 mb-3">About Us</button>
              <button onClick={() => { navigate("/contact"); setMobileOpen(false); }} className="block text-slate-700">Contact</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
