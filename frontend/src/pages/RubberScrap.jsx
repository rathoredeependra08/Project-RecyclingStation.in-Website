import React from "react";

export default function RubberScrap() {
  return (
    <div className="pt-28 bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="w-full relative text-white py-20 px-6">
        <div className="absolute inset-0 bg-[url('https://wheelsdoctor.com/wp-content/uploads/2024/03/recycled-tires-Wheels-Doctor-Miami.jpg')] bg-cover bg-center blur-[5px]"></div>
        <div className="relative max-w-8xl mx-auto text-center"> {/* <-- START of the content wrapper */}
         <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Rubber & Tyre Scrap Recycling
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Efficient rubber scrap collection, devulcanization-ready processing and resale of reclaimed rubber material.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-green-200 text-lg">
            <span>✔ Tyre & Offcut Collections</span>
            <span>✔ Devulcanization Partnerships</span>
            <span>✔ Bulk Logistics & Fair Pricing</span>
          </div>
        </div> {/* <-- END of the content wrapper (Corrected closure) */}
      </section>

      {/* OVERVIEW */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Recycling Station provides practical solutions for scrap rubber streams — used tyres, seals, industrial offcuts and crumb. Our network includes reclaimers and manufacturers that convert reclaimed rubber into usable feedstock.
          </p>

          <p className="text-gray-700">
            We offer easy booking, fair valuation, transport logistics and documentation — making rubber recycling a profitable and sustainable option for businesses.
          </p>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-12 px-6 bg-white border-t border-b">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Services</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 border">
              <h3 className="font-semibold mb-2">Tyre Collection & Consolidation</h3>
              <p className="text-gray-700">Bulk tyre removal with safe handling and timely consolidation for reclaimers.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border">
              <h3 className="font-semibold mb-2">Industrial Offcut Reclamation</h3>
              <p className="text-gray-700">Collect offcuts, seals and rubber rejects for devulcanization and reuse.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border">
              <h3 className="font-semibold mb-2">Crumb Rubber Preparation</h3>
              <p className="text-gray-700">Shredding and preparation for tyre-to-fuel or crumb rubber buyers.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border">
              <h3 className="font-semibold mb-2">Valuation & Offtake</h3>
              <p className="text-gray-700">Transparent pricing and access to offtakers and secondary markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Processing Steps</h2>

          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              "Booking & Assessment",
              "Collection & Sorting",
              "Shredding & Size Reduction",
              "Devulcanization (partnered)",
              "Supply to Offtake Partners"
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
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Certificates & Compliance</h2>
          <p className="text-gray-700 mb-3">We provide chain-of-custody documents, manifests and certificates for reclaimed material suitable for audits.</p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Transparent valuation receipts</li>
            <li>End-use certificates where applicable</li>
            <li>Labor training and vehicle documentation</li>
          </ul>
        </div>
      </section>

      {/* IMPACT */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Impact & Client Value</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl border">
              <h3 className="font-semibold mb-2">Environmental</h3>
              <p className="text-gray-700">Reduced tyre dumping and supported circular reuse of rubber materials.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl border">
              <h3 className="font-semibold mb-2">Economic</h3>
              <p className="text-gray-700">Transparent pricing and additional revenue streams from reclaimed materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Case Study</h2>
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h3 className="font-semibold">Tyre Recycler — Bulk Offtake</h3>
            <p className="text-gray-700 mb-3">We established a collection plan that recovered 58 tonnes of tyre scrap within six months and connected the client to reclaimers for stable revenue.</p>
            <p className="text-gray-600 italic">“Simple booking and fair payments improved our scrap handling drastically.” — Plant Manager</p>
          </div>
          </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-green-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Convert Rubber Scrap Into Value</h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">Contact us for assessments, bulk pickup and reclamation options.</p>
        <a href="/contact" className="inline-block bg-lime-400 text-green-900 px-8 py-3 rounded-full font-semibold">Request Pickup</a>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Rubber Scrap — FAQ</h2>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold">Do you handle large tyres?</h4>
              <p className="text-gray-700">Yes — we handle large tyres and coordinate with specialized reclaimers for heavy loads.</p>
            </div>

            <div>
              <h4 className="font-semibold">How is pricing determined?</h4>
              <p className="text-gray-700">Pricing is based on weight, quality and current market demand; we provide clear valuation reports.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}