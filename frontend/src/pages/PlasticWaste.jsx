import React from "react";

export default function PlasticWaste() {
  return (
    <div className="pt-28 bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="w-full bg-green-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Plastic Waste Management
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            End-to-end plastic waste collection, segregation, cleaning and recycling for industries,
            retail, and municipal partners. Certified, efficient and fully documented.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-green-200 text-lg">
            <span>✔ Industrial & Post-consumer Streams</span>
            <span>✔ Certified Recycling Certificates</span>
            <span>✔ Transparent Chain of Custody</span>
          </div>
        </div>
      </section>

      {/* OVERVIEW / VALUE */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Overview</h2>
          <p className="text-lg text-gray-700 mb-4">
            “We do not inherit the Earth from our ancestors, we borrow it from our children.”  
            At Recycling Station (GPCB authorized, Ahmedabad), we deliver certified, compliant,
            and efficient plastic recycling solutions. With 25 years of sector experience and
            modern processing lines, we convert plastic waste into valuable secondary raw materials
            while ensuring full regulatory compliance.
          </p>

          <p className="text-gray-700">
            Our plastic services combine smart segregation, mechanical reprocessing (washing,
            shredding, pelletizing) and direct offtake to manufacturers. We focus on maximizing
            recovery, reducing landfill burden and providing economically viable options for
            industrial and commercial partners.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-12 px-6 bg-white border-t border-b">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Why Choose Recycling Station?</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg border">
              <h3 className="font-semibold mb-2">GPCB Authorized & Compliant</h3>
              <p className="text-gray-600">We operate within the regulatory framework with complete documentation and certificates for audits.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border">
              <h3 className="font-semibold mb-2">Advanced Sorting</h3>
              <p className="text-gray-600">Our sorting lines minimize contamination and ensure high quality feedstock for recycling.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border">
              <h3 className="font-semibold mb-2">Transparent Pricing & Logistics</h3>
              <p className="text-gray-600">Clear valuation, timely pickup and full tracking for every consignment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What We Offer</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Collection & Bulk Pickup</h3>
              <p className="text-gray-700">Scheduled pickups for factories and warehouses, with bulk consolidation and GPS-tracked vehicles.</p>
              <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
                <li>On-site assessment & quoting</li>
                <li>Packaging and safe loading</li>
                <li>Daily / weekly / monthly pickup schedules</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Sorting, Washing & Reprocessing</h3>
              <p className="text-gray-700">Mechanical processing to produce clean regrinds and pellets suitable for direct use by manufacturers.</p>
              <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
                <li>Manual + mechanical sorting to reduce contamination</li>
                <li>Hot washing & drying for food-grade suitability where applicable</li>
                <li>Pelletizing and quality control</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Offtake & Buyer Network</h3>
              <p className="text-gray-700">We match recycled output with manufacturers and traders ensuring fair pricing and timely dispatch.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Documentation & Certificates</h3>
              <p className="text-gray-700">Full compliance paperwork — manifests, recycling certificates, and “end-use” confirmations for downstream users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 px-6 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Process — From Pickup to Recycled Product</h2>

          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              { title: "1. Waste Audit", desc: "Assess type, volume & contamination" },
              { title: "2. Collection", desc: "Safe pickup in GPS-tracked vehicles" },
              { title: "3. Segregation", desc: "Manual + automated sort lines" },
              { title: "4. Washing & Pelletizing", desc: "Remove contaminants, produce pellets" },
              { title: "5. Certification", desc: "Issue recycling & end-use certificates" },
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border shadow-sm">
                <div className="text-2xl font-bold text-green-700 mb-2">{step.title}</div>
                <p className="text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE & SAFETY */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Compliance & Safety Standards</h2>

          <p className="text-gray-700 mb-4">
            We maintain strict adherence to national and state regulations, including Plastic Waste Management Rules.
            All vehicles, storage systems and processing plants operate under documented SOPs and routine audits.
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>GPCB Authorization and permits</li>
            <li>Form 10 and other required manifests</li>
            <li>Insurance coverage for transport & handling</li>
            <li>Periodic employee training & PPE audits</li>
          </ul>
        </div>
      </section>

      {/* IMPACT & BENEFITS */}
      <section className="py-16 px-6 bg-white border-t border-b">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Impact & Client Benefits</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl border">
              <h3 className="font-semibold mb-2">Environmental Impact</h3>
              <p className="text-gray-700">Reduced landfilling, lower carbon footprint, and increased recycled-content use in manufacturing.</p>
              <ul className="list-disc pl-6 mt-3 text-gray-700">
                <li>Divert tonnes of plastic from landfill annually</li>
                <li>Conserve fossil feedstock through recycled pellets</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl border">
              <h3 className="font-semibold mb-2">Business Impact</h3>
              <p className="text-gray-700">Simplified compliance, guaranteed documentation and potential revenue from segregated high-quality scrap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES / STATS / TESTIMONIALS */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Case Study & Results</h2>

          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="font-semibold mb-2">Factory A — Yearly Plastic Diversion</h3>
            <p className="text-gray-700 mb-3">We partnered with a packaging factory to divert 420 tonnes of plastic scrap in 12 months, reducing raw material spend and qualifying them for green supplier incentives.</p>
            <blockquote className="text-gray-600 italic border-l-4 pl-4">“Reliable pickups and clear documentation made compliance audits effortless.” — Operations Manager</blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-green-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Manage Your Plastic Waste Efficiently?</h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">Contact our team for an audit, pickup scheduling, and a transparent valuation for your plastic streams.</p>
        <a href="/contact" className="inline-block bg-lime-400 text-green-900 px-8 py-3 rounded-full font-semibold hover:bg-lime-300">Request Pickup</a>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold">Do you accept mixed plastic?</h4>
              <p className="text-gray-700">Yes — we accept mixed industrial plastic and segregate at our facility. Heavily contaminated loads may require additional processing fees.</p>
            </div>

            <div>
              <h4 className="font-semibold">Can you provide regular contract pickups?</h4>
              <p className="text-gray-700">Yes — we offer scheduled pickups (weekly/monthly) and standing contracts for large customers.</p>
            </div>

            <div>
              <h4 className="font-semibold">Will I get a recycling certificate?</h4>
              <p className="text-gray-700">Yes — every processed batch comes with documentation and certificates suitable for audits.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
