// src/components/svg-icons.js
import React from "react";

export const IconRecycle = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 12v6a2 2 0 0 1-2 2H9" />
    <path d="M3 12v-6a2 2 0 0 1 2-2h10" />
    <path d="M8 17l-3-3 3-3" />
    <path d="M16 7l3 3-3 3" />
  </svg>
);

export const IconTruck = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="1" y="3" width="15" height="13" rx="2" />
    <path d="M16 8h4l3 3v5" />
    <circle cx="5.5" cy="18.5" r="1.5" />
    <circle cx="18.5" cy="18.5" r="1.5" />
  </svg>
);

export const IconLeaf = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M22 12s-4-8-12-8-8 8-8 8 4 8 12 8 8-8 8-8z" />
    <path d="M7 12c2-2 5-3 9-3" />
  </svg>
);
