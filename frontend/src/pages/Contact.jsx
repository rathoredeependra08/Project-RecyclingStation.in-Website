// app/contact/page.jsx or src/pages/ContactPage.jsx
"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "plastic",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  const SERVICES = [
    { value: "plastic", label: "Plastic Waste Management" },
    { value: "ewaste", label: "E-Waste & Electronics" },
    { value: "hazardous", label: "Hazardous Waste" },
    { value: "industrial", label: "Industrial Scrap & Metals" },
    { value: "organic", label: "Organic / Composting" },
    { value: "construction", label: "Construction & Demolition" },
    { value: "rubber", label: "Rubber Scrap" },
    { value: "consulting", label: "Consulting & Compliance" },
  ];

  const LOCATIONS = [
    "Ahmedabad, Gujarat",
    "Vadodara, Gujarat",
    "Surat, Gujarat",
    "Mumbai, Maharashtra",
    "Pune, Maharashtra",
    "Bengaluru, Karnataka",
    "Hyderabad, Telangana",
    "Delhi NCR",
  ];

  function update(field, value) {
    setForm((s) => ({ ...s, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.consent) {
      setStatus({ sending: false, ok: false, msg: "Please fill name, email, phone and accept consent." });
      return;
    }
    try {
      setStatus({ sending: true, ok: null, msg: "Sending..." });
      // Simulate API call — replace with your endpoint
      await new Promise((r) => setTimeout(r, 900));
      setStatus({ sending: false, ok: true, msg: "Thanks — we received your request. Our team will contact you shortly." });
      setForm({
        name: "",
        email: "",
        phone: "",
        organization: "",
        service: "plastic",
        message: "",
        consent: false,
      });
    } catch (err) {
      setStatus({ sending: false, ok: false, msg: "Something went wrong — try again later." });
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#f3fff7] text-gray-900">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('https://media.istockphoto.com/id/1913631354/photo/contact-us-concept-call-email-or-message-hotline.webp?b=1&s=612x612&w=0&k=20&c=KVSm-n24yluUvVC3iIgKmXdS6P5-6y2Z4ivP8Y6ofxY=')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.4,
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(800px 350px at 6% 12%, rgba(0,166,81,0.06), transparent 8%), radial-gradient(600px 250px at 92% 88%, rgba(18,182,118,0.04), transparent 10%)",
          }}
          aria-hidden
        />
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#052e1d] leading-tight">
                Contact Recycling Station
              </h1>
              <p className="text-lg text-gray-700 max-w-3xl">
                Reach out for fast, certified waste-management solutions. Whether you're a household, housing society,
                business, hospital, or large industry — our team is ready to help with pickups, compliance, and
                tailored recycling programs. We prioritise a quick response, professional handling and clear documentation.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/request-pickup"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#00A651] text-white font-semibold shadow hover:scale-[1.02] transition"
                >
                  Request Pickup
                </a>
                <a
                  href="/request-site-visit"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#00A651] text-[#0f5132] font-semibold bg-white hover:bg-[#f7fff8] transition"
                >
                  Book a Site Visit
                </a>
                <a
                  href="/contact#talk"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/60 text-[#0f5132] font-semibold shadow hover:bg-white transition"
                >
                  Talk to Our Team
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-[#0f5132] mb-3">Quick Contact</h3>
                <p className="text-sm text-gray-600 mb-4">
                  For immediate assistance call or WhatsApp — available 9am–7pm (Mon–Sat).
                </p>

                <div className="space-y-3">
                  <ContactCard
                    title="Head Office (Plant)"
                    line1={<span>Processing Plant — <strong className="text-[#0f5132]">Ahmedabad, Gujarat</strong></span>}
                    line2="BlockNO.731,PlotNo.5&6,Giriraj Industrial Estate-2,Paldi Kankaj,Daskroi,Ahmedabad,Gujarat-382425"
                    phone="+91 9099911919"
                  />
                  <ContactCard
                    title="Sales & Operations"
                    line1="Phone"
                    line2="+91 9099911919"
                    phone="+91 9099911919"
                    whatsapp="+919099911919"
                  />
                  <ContactCard
                    title="Email"
                    line1="General Enquiries"
                    line2="recyclingstation@yahoo.com"
                    email="recyclingstation@yahoo.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: Contact details & map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl bg-white p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-[#0f5132]">Contact Details</h3>
              <p className="text-sm text-gray-600 mt-2">
                Certified, prompt and fully-documented waste management — we answer quickly and act responsibly.
              </p>

              <div className="mt-6 space-y-4">
                <InfoRow
                  label="Address"
                  value={
                    <>
                      Processing Plant — <strong className="text-[#0f5132]">Ahmedabad, Gujarat</strong>
                      <br />
                      BlockNO.731,PlotNo.5&6,Giriraj Industrial Estate-2,Paldi Kankaj,Daskroi,Ahmedabad,Gujarat-382425
                    </>
                  }
                  icon={MapPinIcon}
                />
                <InfoRow
                  label="Phone"
                  value={
                    <a href="tel:+91 90999 96900" className="text-[#0f5132] font-medium hover:underline">
                      +91 90999 96900
                    </a>
                  }
                  icon={PhoneIcon}
                />
                <InfoRow
                  label="WhatsApp"
                  value={
                    <a
                      href="https://wa.me/+91 90999 96900"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#0f5132] font-medium hover:underline"
                    >
                      Chat on WhatsApp
                    </a>
                  }
                  icon={WhatsAppIcon}
                />
                <InfoRow
                  label="Email"
                  value={
                    <a href="mailto:recyclingstation@yahoo.com" className="text-[#0f5132] font-medium hover:underline">
                      recyclingstation@yahoo.com
                    </a>
                  }
                  icon={MailIcon}
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/request-pickup"
                  className="px-4 py-2 rounded-full bg-[#00A651] text-white text-sm font-semibold shadow hover:opacity-95"
                >
                  Request Pickup
                </a>
                <a
                  href="/contact#quote"
                  className="px-4 py-2 rounded-full border border-[#00A651] text-[#0f5132] text-sm font-semibold hover:bg-[#f7fff8]"
                >
                  Get Compliance Quote
                </a>
              </div>
            </div>

            {/* Service Locations */}
            <div className="rounded-xl bg-white p-6 shadow-md border border-gray-100">
              <h4 className="text-lg font-semibold text-[#0f5132] mb-3">Service Locations</h4>
              <p className="text-sm text-gray-600 mb-4">We operate across major cities with local pickup options and regional partners.</p>
              <div className="flex flex-wrap gap-2">
                {LOCATIONS.map((l) => (
                  <span
                    key={l}
                    className="px-3 py-2 bg-[#f3fff7] text-[#0f5132] rounded-full text-sm font-medium border border-transparent"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="p-4 bg-white flex items-center justify-between">
                <div>
                  <h5 className="font-semibold text-[#0f5132]">Our Processing Plant — Ahmedabad</h5>
                  <p className="text-sm text-gray-600">Plot No. 5&6 , Giriraj Industrial Estate-2</p>
                </div>
                <a
                  href="https://maps.google.com?q=23.0225,72.5714"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#00A651] font-semibold"
                
                  Open in Maps
                a></a>
              </div>
              <div className="w-full h-64 bg-gray-50">
                <iframe
                  title="Recycling Station Ahmedabad Map"
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps?q=23.0225,72.5714&z=13&output=embed"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-[#0f5132] mb-4">Send a Message</h3>
              <p className="text-sm text-gray-600 mb-6">Tell us about your needs — we aim to respond within one business day.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm font-medium text-gray-700">Full name</span>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="mt-2 w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-[#00A651] px-4 py-3"
                      placeholder="Your name"
                      required
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-gray-700">Email</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="mt-2 w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-[#00A651] px-4 py-3"
                      placeholder="you@example.com"
                      required
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-gray-700">Phone</span>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="mt-2 w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-[#00A651] px-4 py-3"
                      placeholder="+91 9XXXXXXXXX"
                      required
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-gray-700">Organization (optional)</span>
                    <input
                      type="text"
                      value={form.organization}
                      onChange={(e) => update("organization", e.target.value)}
                      className="mt-2 w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-[#00A651] px-4 py-3"
                      placeholder="Company or society name"
                    />
                  </label>
                </div>

                <div>
                  <label className="block">
                    <span className="text-sm font-medium text-gray-700">Select service</span>
                    <select
                      value={form.service}
                      onChange={(e) => update("service", e.target.value)}
                      className="mt-2 w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-[#00A651] px-4 py-3"
                      aria-label="Select service"
                    >
                      {SERVICES.map((s) => (
                        <option value={s.value} key={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div>
                  <label className="block">
                    <span className="text-sm font-medium text-gray-700">Message</span>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className="mt-2 w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-[#00A651] px-4 py-3 min-h-[120px]"
                      placeholder="Briefly describe your waste stream, volumes and timeline"
                    />
                  </label>
                </div>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => update("consent", e.target.checked)}
                    className="mt-1 h-4 w-4 rounded text-[#00A651] focus:ring-[#00A651]/50"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to receive communications from Recycling Station regarding my request. I understand my details
                    will be used for service and compliance purposes.
                  </span>
                </label>

                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={status.sending}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00A651] text-white font-semibold shadow hover:scale-[1.02] transition"
                  >
                    {status.sending ? "Sending..." : "Send Message"}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      // quick contact actions
                      window.location.href = "tel:+919099911919";
                    }}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 bg-white text-[#0f5132] font-semibold hover:bg-[#f7fff8] transition"
                  >
                    Call Us
                  </button>

                  <a
                    href="https://wa.me/9099911919"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white font-semibold shadow hover:opacity-95 transition"
                  >
                    WhatsApp
                  </a>
                </div>

                {status.msg && (
                  <div
                    role="status"
                    className={`mt-4 p-3 rounded-md text-sm ${status.ok ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                  >
                    {status.msg}
                  </div>
                )}
              </form>
            </div>

            {/* Small trust panel */}
            <div className="mt-6 rounded-xl bg-white p-4 shadow-sm border border-gray-100 flex items-center gap-4">
              <ShieldCheckIcon />
              <div>
                <div className="text-sm font-semibold text-[#0f5132]">Certified & Compliant</div>
                <div className="text-sm text-gray-600">GPCB/CPCB-aligned operations with digital manifests and audit-ready records.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* -------------------------
   Small presentational subcomponents & icons
   (kept local to the file for easy copy/paste)
--------------------------*/

function ContactCard({ title, line1, line2, phone, email, whatsapp }) {
  return (
    <div className="rounded-lg p-3 bg-white border border-gray-100 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-md bg-[#f3fff7] text-[#0f5132] inline-flex">
          <BuildingIcon />
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-[#0f5132]">{title}</div>
          <div className="text-sm text-gray-600 mt-1">{line1}</div>
          <div className="text-sm text-gray-600">{line2}</div>

          <div className="mt-3 flex flex-wrap gap-2">
            {phone && (
              <a href={`tel:${phone}`} className="text-sm text-[#00A651] font-medium hover:underline">
                {phone}
              </a>
            )}
            {whatsapp && (
              <a href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="text-sm text-[#25D366] font-medium hover:underline">
                WhatsApp
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} className="text-sm text-[#0f5132] font-medium hover:underline">
                {email}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value, icon: IconComp }) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-md bg-[#f7fff8] text-[#0f5132] inline-flex">
        {IconComp ? <IconComp /> : <MapPinIcon />}
      </div>
      <div className="text-sm text-gray-700">
        <div className="font-medium text-[#0f5132]">{label}</div>
        <div className="mt-1 text-sm text-gray-600">{value}</div>
      </div>
    </div>
  );
}

/* -------------------------
   SVG Icon components
--------------------------*/

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" stroke="#0f5132" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 11.5c0 6-9 11.5-9 11.5S3 17.5 3 11.5a9 9 0 1 1 18 0z" stroke="#0f5132" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.97.33 1.92.62 2.82a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l1.26-1.26a2 2 0 0 1 2.11-.45c.9.29 1.85.5 2.82.62A2 2 0 0 1 22 16.92z" stroke="#0f5132" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 8.5v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="#0f5132" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 8.5l-9 6-9-6" stroke="#0f5132" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M21.5 12.1A9.4 9.4 0 1 0 12 21.5v0a9.4 9.4 0 0 0 9.5-9.4z" stroke="#0f5132" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.9 15.1c-.4 0-1.2-.2-2.6-.9-.5-.2-1-.4-1.4-.2-.3.1-1.2.6-1.5.8-.3.2-.6.1-1-.2-.4-.3-1.5-1.6-2.1-2.5-.5-.8-.1-1.3.2-1.5.2-.2.5-.4.8-.6.2-.1.3-.2.4-.3.2-.2.1-.5-.1-.8-.2-.3-1-2.3-1.2-2.6-.3-.4-.7-.4-1-.4-.2 0-.4 0-.6 0" stroke="#0f5132" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 21h6V10H3v11zM15 21h6V3h-6v18zM9 21h6V6H9v15z" stroke="#0f5132" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function ShieldCheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2l6 3v5c0 5-3.5 9.7-6 11-2.5-1.3-6-6-6-11V5l6-3z" stroke="#0f5132" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5 12.5l1.8 1.8L14.5 11" stroke="#0f5132" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
