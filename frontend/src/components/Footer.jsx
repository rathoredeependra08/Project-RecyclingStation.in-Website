// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071923] text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* LEFT: Logo + description */}
          <div className="md:col-span-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 mb-4 focus:outline-none"
              aria-label="Go to top"
            >
              <span className="text-3xl">♻️</span>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Recycling Station
              </span>
            </button>

            <p className="text-gray-300 leading-relaxed mb-6">
              Recycling Station provides certified, transparent and technology-driven waste
              management across multi-stream waste — helping businesses and communities divert
              waste from landfills, recover valuable materials and meet regulatory compliance.
            </p>

            <div className="text-sm text-gray-400">
              © {currentYear} Recycling Station. All Rights Reserved.
            </div>
          </div>

          {/* MIDDLE COLUMNS: Menus */}
          <div className="md:col-span-5 grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">WHO WE ARE</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link to="/about" className="hover:text-emerald-300 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/why-choose-us" className="hover:text-emerald-300 transition">
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link to="/get-quote" className="hover:text-emerald-300 transition">
                    Get Quote
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-emerald-300 transition">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="hover:text-emerald-300 transition">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/faqs" className="hover:text-emerald-300 transition">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4">SERVICES</h4>
              <ul className="space-y-3 text-gray-300">

                 <li>
                  <Link to="/services/hazardous-waste" className="hover:text-emerald-300 transition">
                    Hazardous Waste 
                  </Link>
                </li>
                 <li>
                  <Link to="/services/Oil-waste" className="hover:text-emerald-300 transition">
                    Oil Waste Management
                  </Link>
                </li>
                
                <li>
                  <Link to="/services/Industrial-waste" className="hover:text-emerald-300 transition">
                    Industrial Waste Management
                  </Link>
                </li><li>
                  <Link to="/services/plastic-waste" className="hover:text-emerald-300 transition">
                    Plastic Waste Recycling
                  </Link>
                </li>
               
                <li>
                  <Link to="/services/rubber-scrap" className="hover:text-emerald-300 transition">
                    Rubber Scrap waste
                  </Link>
                </li>
                
                <li>
                  <Link to="/services/e-waste" className="hover:text-emerald-300 transition">
                    E-Waste Management
                  </Link>
                </li>
                <li>
                  <Link to="/services/epr" className="hover:text-emerald-300 transition">
                    Extended Producer Responsibility (EPR)
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Contact info */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-white mb-4">CONTACT</h4>

            <div className="bg-[#0b2730] p-4 rounded-xl shadow-sm border border-white/5">
              <div className="text-sm text-gray-300 mb-3">Call us</div>

              <div className="flex items-baseline gap-3 mb-4">
                <a
                  href="tel:+917778040173"
                  className="text-white text-lg font-semibold hover:text-emerald-300 transition"
                >
                  +91 9099996900
                </a>
              </div>

              <div className="text-sm text-gray-300 mb-2">Email</div>
              <a
                href="mailto:recyclingstation@yahoo.com"
                className="block text-emerald-300 font-medium mb-4 hover:underline"
              >
                recyclingstation@yahoo.com
              </a>

              <div className="text-sm text-gray-300 mb-2">Address</div>
              <address className="not-italic text-gray-300 text-sm mb-4">
                B-731,PlotNo-5 & 6,Giriraj Industrial Estate-2,<br />
                Ahmedabad, Gujarat, India — 382425
              </address>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-semibold shadow hover:bg-emerald-500 transition"
                >
                  Get Directions
                </a>

                <Link to="/request-pickup" className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white text-[#0f5132] text-sm font-semibold shadow hover:bg-gray-100 transition">
                  Request Pickup
                </Link>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-6 flex gap-3 items-center">
              <a href="https://facebook.com" aria-label="Facebook" className="group">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#2b6b4a] transition">
                  {/* Facebook SVG */}
                  <svg className="w-5 h-5 text-gray-200 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.09 5.66 21.23 10.44 22v-7.02H7.9v-2.9h2.54V9.7c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.88h2.74l-.44 2.9h-2.3V22C18.34 21.23 22 17.09 22 12.07z" />
                  </svg>
                </span>
              </a>

              <a href="https://twitter.com" aria-label="X / Twitter" className="group">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#2b6b4a] transition">
                  {/* X / Twitter SVG */}
                  <svg className="w-5 h-5 text-gray-200 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M22 5.92c-.63.28-1.3.48-2 .56.72-.44 1.27-1.14 1.53-1.98-.67.4-1.4.7-2.18.86A3.6 3.6 0 0 0 12.1 8c0 .3 0 .6.08.89C8.1 8.8 5 6.9 2.9 4c-.33.58-.52 1.25-.52 1.96 0 1.34.68 2.53 1.72 3.22-.6 0-1.17-.18-1.66-.45v.05c0 1.9 1.36 3.48 3.16 3.84-.33.09-.67.13-1.02.13-.25 0-.5-.02-.73-.07.51 1.6 2 2.77 3.76 2.8A7.24 7.24 0 0 1 2 19.54 10.2 10.2 0 0 0 7.1 21c6.9 0 10.67-5.7 10.67-10.64v-.48c.73-.53 1.36-1.2 1.86-1.96-.67.3-1.38.5-2.12.6z" />
                  </svg>
                </span>
              </a>

              <a href="https://www.instagram.com/recyclingstation.co/" aria-label="Instagram" className="group">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#2b6b4a] transition">
                  {/* Instagram SVG */}
                  <svg className="w-5 h-5 text-gray-200 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.6A4.4 4.4 0 1 0 16.4 13 4.4 4.4 0 0 0 12 8.6zm5.2-3a1.04 1.04 0 1 0 1.04 1.04A1.04 1.04 0 0 0 17.2 5.6z" />
                    <path d="M12 10.8A1.2 1.2 0 1 1 10.8 12 1.2 1.2 0 0 1 12 10.8z" />
                  </svg>
                </span>
              </a>

              <a href="https://www.linkedin.com/in/deependra-rathore-385221268/" aria-label="LinkedIn" className="group">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#2b6b4a] transition">
                  {/* LinkedIn SVG */}
                  <svg className="w-5 h-5 text-gray-200 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M4.98 3.5a2.3 2.3 0 1 1 0 4.6 2.3 2.3 0 0 1 0-4.6zM3 8.98h3.96V21H3zM9.6 8.98H13v1.64h.06c.5-.95 1.73-1.95 3.56-1.95 3.8 0 4.5 2.5 4.5 5.75V21h-3.96v-5.1c0-1.21 0-2.77-1.69-2.77-1.69 0-1.95 1.32-1.95 2.68V21H9.6z" />
                  </svg>
                </span>
              </a>

              <a href="https://wa.me/9099996900" aria-label="WhatsApp" className="group">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#25D366] transition">
                  {/* WhatsApp SVG */}
                  <svg className="w-5 h-5 text-gray-200 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.52 3.48A11.72 11.72 0 0 0 12 0C5.37 0 .09 5.28.09 11.91a11.6 11.6 0 0 0 2.03 6.19L0 24l6.17-2.02a11.6 11.6 0 0 0 5.83 1.45c6.63 0 11.91-5.28 11.91-11.91 0-3.18-1.24-6.17-3.39-8.54zM12 21.35c-1.8 0-3.55-.48-5.07-1.37l-.36-.22-3.66 1.17 1.2-3.57-.23-.36A8.68 8.68 0 0 1 3.35 11.9c0-4.7 3.82-8.52 8.52-8.52 4.7 0 8.52 3.82 8.52 8.52S16.7 21.35 12 21.35zm4.58-6.32c-.25-.12-1.47-.73-1.7-.82-.23-.09-.4-.12-.57.12-.16.23-.62.82-.76.99-.14.16-.28.18-.53.06-.25-.12-1.06-.39-2.02-1.25-.75-.66-1.25-1.48-1.4-1.72-.14-.23-.02-.35.11-.47.12-.12.25-.28.38-.42.13-.14.17-.24.25-.4.08-.16.04-.29-.02-.41-.06-.12-.57-1.37-.78-1.87-.2-.49-.41-.42-.57-.43-.15-.01-.32-.01-.49-.01-.16 0-.41.06-.63.29-.23.23-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.16 1.78 2.86 4.3 3.89 2.52 1.04 2.52.69 2.98.64.46-.05 1.47-.6 1.68-1.18.2-.58.2-1.07.14-1.18-.06-.12-.23-.19-.48-.31z"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* bottom thin divider and copyright row */}
      <div className="border-t border-white/6">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div>© {currentYear} Recycling Station — All Rights Reserved.</div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-emerald-300 transition">Privacy Policy</Link>
            <span className="hidden sm:inline">|</span>
            <Link to="/terms" className="hover:text-emerald-300 transition">Terms</Link>
            <span className="hidden md:inline">|</span>
            <Link to="/contact" className="hover:text-emerald-300 transition">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
