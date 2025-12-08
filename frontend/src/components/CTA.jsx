// src/components/CTA.jsx
import React from "react";

export default function CTA({ title = "Ready to work with us?", ctaText = "Contact Us" }) {
  return (
    <div className="max-w-4xl mx-auto bg-white/6 backdrop-blur-lg border border-white/8 rounded-3xl p-10 shadow-2xl text-center">
      <h3 className="text-3xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-sm text-white/80 mb-6">
        Fast response • Compliance-ready documentation • Flexible pickup schedules
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button onClick={() => window.location = "/contact"} className="bg-lime-400 text-green-900 px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition">
          {ctaText}
        </button>

        <a href="/request-pickup" className="text-white/90 underline underline-offset-4">Or request a pickup</a>
      </div>
    </div>
  );
}
