import React from "react";

export default function IndustrialWaste() {
  return (
    <div className="pt-28 bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="relative overflow-hidden w-full text-white py-20 px-6">
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background: `url(https://tse2.mm.bing.net/th/id/OIP.4MyT40n5SPl8zUVVTEH6AAHaEO?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3) center/cover, linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)`,
            filter: 'blur(5px)',
          }}
        />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Industrial Waste Management
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Large-scale industrial waste solutions — from process residues to manufacturing scrap.
            Safe, compliant removal and high-value material recovery.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-green-350 text-lg">
            <span>✔ Bulk Logistics & Scheduling</span>
            <span>✔ On-site Modular Treatments</span>
            <span>✔ Data-driven Reporting</span>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            As the second-generation leadership at Recycling Station, we combine decades of experience
            with modern infrastructure to manage industrial waste safely and sustainably.
            Our services reduce disposal costs, recover value and ensure legal compliance for manufacturers.
          </p>

          <p className="text-gray-700">
            From heavy machinery plants to food & beverage processors, our modular services adapt to facility size
            and waste complexity. We offer on-site containment, targeted treatment, and downstream resource recovery.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-12 px-6 bg-white border-t border-b">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Our Industrial Services</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 border">
              <h3 className="font-semibold mb-2">Process Waste Collection</h3>
              <p className="text-gray-700">High-volume collection with safe containerization for sludge, grit and production residues.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border">
              <h3 className="font-semibold mb-2">On-site Modular Treatment</h3>
              <p className="text-gray-700">Temporary, mobile treatment units for neutralization and dewatering when required.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border">
              <h3 className="font-semibold mb-2">Scrap Reclamation</h3>
              <p className="text-gray-700">Conversion of metal, plastic and composite scraps into saleable raw materials.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border">
              <h3 className="font-semibold mb-2">Custom Offtake Programs</h3>
              <p className="text-gray-700">Long-term partnerships and offtake agreements for recovered materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Process Flow</h2>

          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              "Site Survey & Risk Assessment",
              "Containment & Labelling",
              "Bulk Transport & Tracking",
              "Centralized / On-site Treatment",
              "Recovery & Compliance Reporting"
            ].map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border shadow-sm">
                <div className="text-2xl font-bold text-green-700 mb-2">{i + 1}</div>
                <div className="text-gray-700">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="py-16 px-6 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Compliance & Certifications</h2>
          <p className="text-gray-700 mb-3">We follow all statutory regulations and provide complete documentation for audits.</p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>GPCB and CPCB-aligned processes</li>
            <li>Certified waste manifests and disposal certificates</li>
            <li>Insurance & documented SOPs for high-risk jobs</li>
          </ul>
        </div>
      </section>

      {/* IMPACT & BENEFITS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Impact & Benefits</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 border">
              <h3 className="font-semibold mb-2">Operational Benefits</h3>
              <p className="text-gray-700">Lowered disposal costs, reduced downtime, and predictable waste-related expenses.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border">
              <h3 className="font-semibold mb-2">Environmental Benefits</h3>
              <p className="text-gray-700">Less landfill use, resource recovery, and improved sustainability reporting for stakeholders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Case Study</h2>
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h3 className="font-semibold">Manufacturer B — Sludge Management</h3>
            <p className="text-gray-700 mb-3">We reduced disposal costs by 28% and recovered reusable by-products for the client across 9 months.</p>
            <p className="text-gray-600 italic">“Efficient handling and transparent billing made their operations simpler.” — Plant Head</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-green-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Industrial Waste Solutions — Tailored for You</h2>
        <p className="mb-6">Contact us for site surveys, modular treatment options and long-term recovery programs.</p>
        <a href="/contact" className="inline-block bg-lime-400 text-green-900 px-8 py-3 rounded-full font-semibold">Request Site Survey</a>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">FAQ — Industrial Waste</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold">Do you provide temporary storage?</h4>
              <p className="text-gray-700">Yes — we can set up compliant temporary containment based on required permits.</p>
            </div>
            <div>
              <h4 className="font-semibold">Can you handle hazardous by-products?</h4>
              <p className="text-gray-700">Yes — our hazardous handling teams manage classification, transfer and treatment under SOPs.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
