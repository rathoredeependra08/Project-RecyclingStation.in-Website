import React from "react";

export default function EWaste() {
  return (
    <div className="pt-28 bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="w-full relative text-white py-20 px-6">
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/premium-photo/recycle-bin-full-e-waste-as-concept-e-waste-management_1041953-8866.jpg?w=2000')] bg-cover bg-center blur-[5px]"></div>
        <div className="relative max-w-8xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          E-Waste Recycling & Secure Disposal
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Secure collection, data-safe destruction, and certified recycling of electronic waste
            including batteries, PCBs and consumer electronics.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-green-350 text-lg">
            <span>✔ Data Destruction & Chain-of-Custody</span>
            <span>✔ Precious Metal Recovery</span>
            <span>✔ Environmentally Responsible Recycling</span>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Electronic waste contains recoverable materials and hazardous components. Recycling Station
            provides secure e-waste logistics, certified data destruction, and controlled material recovery
            ensuring regulatory compliance and maximum value recovery.
          </p>

          <p className="text-gray-700">
            Our processes protect client data, safely isolate hazardous elements (like mercury and lead),
            and recover precious metals through responsible downstream partners.
          </p>
        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section className="py-12 px-6 bg-white border-t border-b">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">E-Waste Streams We Manage</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border">
              <h3 className="font-semibold mb-2">Consumer & Office Electronics</h3>
              <p className="text-gray-700">Laptops, desktops, printers, monitors and peripherals.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border">
              <h3 className="font-semibold mb-2">Batteries & Power Packs</h3>
              <p className="text-gray-700">Lead-acid, Li-ion and other battery types handled safely and recycled.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border">
              <h3 className="font-semibold mb-2">PCBs & Components</h3>
              <p className="text-gray-700">Circuit boards, transformers and e-components processed for safe disposal and metal recovery.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border">
              <h3 className="font-semibold mb-2">Large Industrial IT Disposal</h3>
              <p className="text-gray-700">Server racks, UPS units and data-center hardware with certified data wipe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Secure E-Waste Handling Process</h2>

          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              "Secure Collection & Labelling",
              "Data Wipe & Physical Destruction",
              "Hazardous Isolation (Batteries/CRT)",
              "Component Dismantling & Sorting",
              "Recovery & Certificate of Disposal"
            ].map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border shadow-sm">
                <div className="text-2xl font-bold text-green-700 mb-2">{i + 1}</div>
                <div className="text-gray-700">{p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="py-16 px-6 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Compliance & Certificates</h2>
          <p className="text-gray-700 mb-3">We provide manifests, certificates and end-use documentation for every e-waste consignment.</p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Secure chain-of-custody documentation</li>
            <li>Data destruction certificates & audit logs</li>
            <li>Hazardous component handling certificates</li>
          </ul>
        </div>
      </section>

      {/* IMPACT */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Impact & Benefits</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border">
              <h3 className="font-semibold mb-2">Environmental</h3>
              <p className="text-gray-700">Reduced hazardous leaching, safer disposal and recovery of critical materials for reuse.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border">
              <h3 className="font-semibold mb-2">Business</h3>
              <p className="text-gray-700">Secure asset retirement, minimized legal risks and recovered value from recovered metals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Case Study</h2>
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="font-semibold mb-2">Retail Chain — Secure EOL Device Processing</h3>
            <p className="text-gray-700 mb-3">We processed 12 tonnes of retired consumer electronics with full data destruction and recovered components for resale.</p>
            <p className="italic text-gray-600">“Professional handling and clear certificates helped us avoid compliance issues.” — IT Manager</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-green-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Need Secure E-Waste Pickup?</h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">Schedule a pickup and receive data destruction certificates and disposal manifests on completion.</p>
        <a href="/contact" className="inline-block bg-lime-400 text-green-900 px-8 py-3 rounded-full font-semibold">Request Pickup</a>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">E-Waste FAQ</h2>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold">How do you ensure data safety?</h4>
              <p className="text-gray-700">We provide certified data wipe and physical destruction for storage devices. Detailed audit logs are provided.</p>
            </div>

            <div>
              <h4 className="font-semibold">Do you accept batteries?</h4>
              <p className="text-gray-700">Yes — we manage batteries with segregation, special handling and certified recycling channels.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
