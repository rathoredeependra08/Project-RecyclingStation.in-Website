import React from "react";

/*
  Industry Grid with same soft background used in RecyclingProcessSVG
  - Added light teal → white → light gray gradient
  - Background applied behind entire section
*/

const IconShell = ({ children }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--icon-stroke)"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-0.5"
    aria-hidden="true"
  >
    {children}
  </svg>
);

// INDUSTRIES array stays unchanged
const INDUSTRIES = [
  { label: "Pharmaceuticals", svg: (<IconShell><path d="M9 3l6 6M15 3l-6 6"/><rect x="3" y="12" width="8" height="8" rx="1.5"/><rect x="13" y="12" width="8" height="8" rx="1.5"/></IconShell>) },
  { label: "Automotive", svg: (<IconShell><path d="M3 13l2-4h14l2 4"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></IconShell>) },
  { label: "Wind Energy", svg: (<IconShell><path d="M12 2v6"/><path d="M12 8l4 4M12 8L8 4"/><path d="M12 12v8"/></IconShell>) },
  { label: "Textile", svg: (<IconShell><path d="M4 4h16v4H4zM4 10h16v4H4zM4 16h16v4H4z"/></IconShell>) },
  { label: "Solar Power", svg: (<IconShell><circle cx="12" cy="6" r="2.8"/><path d="M3 20h18l-3-6H6l-3 6z"/></IconShell>) },
  { label: "Pumps & Motors", svg: (<IconShell><path d="M5 12h14"/><rect x="3" y="9" width="6" height="6" rx="1.5"/><rect x="15" y="9" width="6" height="6" rx="1.5"/></IconShell>) },

  { label: "Printing & Packaging", svg: (<IconShell><rect x="3" y="3" width="18" height="12" rx="1.5"/><path d="M7 15v4h10v-4"/></IconShell>) },
  { label: "Food Manufacturing", svg: (<IconShell><path d="M6 8h12M6 12h12M6 16h12"/><rect x="4" y="4" width="4" height="4" rx="0.8"/></IconShell>) },
  { label: "Health Care", svg: (<IconShell><circle cx="12" cy="12" r="8"/><path d="M12 8v8M9 12h6"/></IconShell>) },
  { label: "Heavy Machinery", svg: (<IconShell><rect x="3" y="10" width="18" height="6" rx="1"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></IconShell>) },
  { label: "Ceramics", svg: (<IconShell><path d="M6 4h12l-2 8H8z"/><path d="M4 16h16"/></IconShell>) },
  { label: "Chemicals", svg: (<IconShell><path d="M9 3v4l-4 8a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4l-4-8V3"/></IconShell>) },

  { label: "Dairy", svg: (<IconShell><path d="M7 6h10v6H7z"/><path d="M6 12v6h12v-6"/></IconShell>) },
  { label: "Energy", svg: (<IconShell><path d="M13 2l-3 8h4l-3 8"/></IconShell>) },
  { label: "Glass", svg: (<IconShell><path d="M8 3h8l-1 9H9z"/><path d="M10 12h4v8h-4z"/></IconShell>) },
  { label: "Electronics", svg: (<IconShell><rect x="4" y="3" width="8" height="14" rx="1.6"/><rect x="14" y="6" width="6" height="10" rx="1.6"/></IconShell>) },
  { label: "Cable", svg: (<IconShell><circle cx="12" cy="12" r="6"/><path d="M12 6v12"/></IconShell>) },
  { label: "Rubber", svg: (<IconShell><ellipse cx="12" cy="12" rx="7" ry="4"/></IconShell>) },
];

const IndustriesPixelPerfect = () => {
  return (
    <section
      className="
        py-[72px] px-6 
        relative
        bg-gradient-to-b 
        from-[#e8fcf9] via-white to-[#f4f7f8]
      "
    >
      {/* subtitle */}
      <p className="text-center text-[15px] font-semibold text-[#1faea0] mb-2 tracking-wide">
        Served More Than 19 Industries
      </p>

      {/* title */}
      <h2 className="text-center text-[36px] leading-[44px] font-bold text-[#22323D] mb-[48px]">
        Industries We Have Served
      </h2>

      {/* grid container */}
      <div className="max-w-[1250px] mx-auto">
        <div className="grid gap-y-[40px] gap-x-[48px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {INDUSTRIES.map((it, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-start text-center cursor-pointer transform transition-all duration-300"
            >
              <div style={{ width: 64, height: 64 }} className="flex items-center justify-center rounded-full">
                <div
                  className="icon-wrapper group-hover:shadow-lg group-hover:scale-105 transition-all duration-300"
                  style={{ borderRadius: 8 }}
                >
                  {it.svg}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-[15px] text-[#607080] font-medium leading-[20px]">
                  {it.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        :root {
          --icon-stroke: #22323D;
          --icon-hover: #1fb6ae;
        }
        svg {
          transition: stroke 200ms ease, transform 220ms ease;
        }
        .group:hover svg {
          stroke: var(--icon-hover);
          transform: translateY(-2px) scale(1.02);
        }
        .group:hover .icon-wrapper {
          box-shadow: 0 8px 22px rgba(34, 50, 61, 0.06);
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default IndustriesPixelPerfect;
