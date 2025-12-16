import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Truck, Calendar, MapPin, User, MessageSquare, Upload, CheckCircle, Clock, Globe, HelpCircle, Factory, Phone } from 'lucide-react';

// Define the WhatsApp recipient number (e.g., your business number)
// NOTE: Must include country code, without '+' or '00'. Example: 918888888888
const WHATSAPP_NUMBER = '9099996900'; // <<< REPLACE WITH YOUR ASSIGNED NUMBER

// Content Definitions (Existing code remains here)
const wasteCategories = [
  { value: "plastic", label: "Plastic Waste (PET, HDPE, Film)" },
  { value: "e_waste", label: "E-Waste (Electronics, Batteries)" },
  { value: "hazardous", label: "Hazardous Materials (Chemicals, Oil)" },
  { value: "metal_scrap", label: "Industrial Scrap & Metal" },
  { value: "organic", label: "Organic & Food Waste" },
  { value: "construction", label: "Construction & Debris" },
  { value: "mixed", label: "Mixed Waste / General" },
];

const timeSlots = [
  "9:00 AM - 12:00 PM (Morning)",
  "1:00 PM - 4:00 PM (Afternoon)",
  "5:00 PM - 7:00 PM (Evening)",
];

const howItWorks = [
  "Select your waste type, quantity, and preferred date/time slot.",
  "Submit the request; our compliance team instantly reviews the details.",
  "Receive a confirmation call or email with final service price and details.",
  "Our GPS-tracked vehicle arrives promptly for certified collection.",
];

const Stat = ({ value, label, icon: Icon }) => (
  <div className="flex items-center p-4 bg-white rounded-xl shadow-md border-l-4 border-[#00A651]">
    <Icon className="w-6 h-6 text-[#0f5132] mr-3" />
    <div>
      <div className="text-2xl font-bold text-[#0f5132]">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  </div>
);

/**
 * Booking Form Component
 */
const BookPickupPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    wasteType: [],
    quantity: '',
    date: '',
    timeSlot: '',
    notes: '',
    termsAccepted: false,
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, options, files } = e.target;

    let newValue = value;

    if (type === 'checkbox') {
      newValue = checked;
    } else if (name === 'wasteType') {
      newValue = Array.from(options).filter(option => option.selected).map(option => option.value);
    } else if (type === 'file') {
      newValue = files[0];
    }

    setFormData(prev => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the terms and privacy policy.");
      return;
    }
    // Simulate API submission
    console.log('Pickup Request Submitted:', formData);

    // ************************************************
    // ADDED WHATSAPP FEATURE HERE:
    // ************************************************
    
    const selectedWasteLabels = formData.wasteType.map(val => 
        wasteCategories.find(cat => cat.value === val)?.label || val
    ).join(', ');

    // 1. Construct the message text
    const message = `*NEW PICKUP REQUEST (via Website)*\n\n` +
        `👤 *Client:* ${formData.name}\n` +
        `📞 *Contact:* ${formData.phone}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `\n` +
        `📍 *Location:* ${formData.address}, ${formData.city} - ${formData.pincode}\n` +
        `\n` +
        `🗑️ *Waste Type:* ${selectedWasteLabels}\n` +
        `⚖️ *Quantity:* ${formData.quantity}\n` +
        `📅 *Schedule:* ${formData.date} @ ${formData.timeSlot}\n` +
        `\n` +
        `📝 *Notes:* ${formData.notes || 'N/A'}\n` +
        `\n` +
        `_A file was ${formData.file ? 'attached' : 'NOT attached'} in the form._`;

    // 2. Encode the message and build the URL
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    // 3. Open the WhatsApp link in a new window/tab
    // This requires the user to manually hit 'Send' in WhatsApp/WhatsApp Web.
    window.open(whatsappUrl, '_blank');

    // ************************************************
    
    // Show success message
    setIsSubmitted(true);
    // Optionally reset form after a short delay
    // setTimeout(() => {
    //   setFormData({...initialState});
    //   setIsSubmitted(false);
    // }, 5000);
  };

  // Inline Validation (Visual only)
  const isFormValid = formData.name && formData.phone && formData.email && formData.address && formData.city && formData.pincode && formData.wasteType.length > 0 && formData.quantity && formData.date && formData.timeSlot;


  // Success State UI (Remaining code is unchanged)
  if (isSubmitted) {
    // ... (unchanged success UI) ...
    return (
      <div className="bg-[#f8fff9] min-h-screen flex items-center justify-center py-20">
        <div className="max-w-xl w-full p-12 bg-white rounded-2xl shadow-2xl border-t-8 border-[#00A651] text-center">
          <CheckCircle className="w-16 h-16 text-[#00A651] mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-[#0f5132] mb-3">Request Confirmed! 🎉</h1>
          <p className="text-lg text-gray-700">
            Thank you, **{formData.name}**! Your certified waste pickup request has been successfully submitted.
          </p>
          <p className="mt-4 text-gray-600">
            Our team will contact you within 4 business hours via **{formData.phone}** or **{formData.email}** to confirm the final service details and arrival time.
          </p>
          <div className="mt-8">
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 bg-[#00A651] text-white font-semibold rounded-full transition hover:bg-[#0f5132]"
            >
              Book Another Pickup
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f8fff9] min-h-screen">
      
      {/* Hero Section */}
      <header className="py-16 md:py-24 bg-gradient-to-r from-[#e0ffe7] to-[#f0fff4]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#052e1d] leading-tight flex items-center justify-center">
            <Truck className="w-8 h-8 mr-3 text-[#00A651]" /> Book a Certified Waste Pickup
          </h1>
          <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
            Schedule doorstep collection for **plastic, e-waste, hazardous, metal scrap, organic, and construction** debris. Fast, compliant, and easy.
          </p>
          
          {/* Stats Row */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <Stat value="450K+" label="Tonnes Diverted" icon={Truck} />
            <Stat value="1,800+" label="Partners Served" icon={Factory} />
            <Stat value="24/7" label="Digital Support" icon={Clock} />
            <Stat value="12+" label="Cities Covered" icon={Globe} />
          </div>
        </div>
      </header>
      
      {/* Main Content: Form and Info */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-8 p-8 md:p-10 bg-white rounded-2xl shadow-2xl border border-gray-100">
            <h2 className="text-3xl font-bold text-[#0f5132] mb-8">1. Enter Pickup Details</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Contact Info */}
              <div className="grid md:grid-cols-3 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name*"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A651] focus:border-transparent transition"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A651] focus:border-transparent transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A651] focus:border-transparent transition"
                />
              </div>

              {/* Address Info */}
              <div className="space-y-5 border-t pt-5 border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center"><MapPin className="w-5 h-5 mr-2 text-[#00A651]" /> Pickup Location</h3>
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address, Building, or Society Name*"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A651] focus:border-transparent transition"
                />
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="city"
                    placeholder="City / Area*"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A651] focus:border-transparent transition"
                  />
                  <input
                    type="text"
                    name="pincode"
                    placeholder="Pincode*"
                    required
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A651] focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Waste & Time Info */}
              <div className="space-y-5 border-t pt-5 border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center"><Truck className="w-5 h-5 mr-2 text-[#00A651]" /> Waste & Schedule</h3>
                
                <div className="grid md:grid-cols-2 gap-5">
                  {/* Waste Type Multi-Select */}
                  <div>
                    <select
                      name="wasteType"
                      required
                      multiple
                      size={3}
                      value={formData.wasteType}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A651] focus:border-transparent transition appearance-none bg-white cursor-pointer"
                    >
                      {wasteCategories.map(cat => (
                        <option key={cat.value} value={cat.value}>{cat.label}</option>
                      ))}
                    </select>
                    <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple categories.*</p>
                  </div>

                  {/* Quantity */}
                  <input
                    type="text"
                    name="quantity"
                    placeholder="Approx. Quantity (e.g., 50kg or 1 Tonne)*"
                    required
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A651] focus:border-transparent transition"
                  />
                </div>

                {/* Date & Time Slot */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date*</label>
                    <input
                      id="date"
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]} // Ensures date is today or later
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A651] focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time Slot*</label>
                    <select
                      id="timeSlot"
                      name="timeSlot"
                      required
                      value={formData.timeSlot}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A651] focus:border-transparent transition appearance-none bg-white cursor-pointer"
                    >
                      <option value="" disabled>Select a Slot</option>
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Extra Instructions & Upload */}
              <div className="space-y-5 border-t pt-5 border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center"><MessageSquare className="w-5 h-5 mr-2 text-[#00A651]" /> Instructions & Photo</h3>
                <textarea
                  name="notes"
                  rows="3"
                  placeholder="Extra Notes / Special Instructions (e.g., Gate Code, restricted access times)"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A651] focus:border-transparent transition"
                />
                <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#00A651] transition">
                  <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/*"
                  />
                  <Upload className="w-6 h-6 text-gray-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">
                    {formData.file ? `File uploaded: ${formData.file.name}` : 'Click here to upload a photo of the waste (Optional)'}
                  </p>
                </div>
              </div>

              {/* Terms & Submit */}
              <div className="flex items-start pt-4">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  required
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  id="terms-checkbox"
                  className="mt-1 w-4 h-4 text-[#00A651] bg-gray-100 border-gray-300 rounded focus:ring-[#00A651]"
                />
                <label htmlFor="terms-checkbox" className="ml-3 text-sm text-gray-600">
                  I confirm that the waste detailed is accurate and I accept the Recycling Station <Link href="/terms" className="text-[#00A651] font-medium hover:underline">Terms & Privacy Policy</Link>.*
                </label>
              </div>

              <button
                type="submit"
                disabled={!isFormValid || !formData.termsAccepted}
                className={`w-full py-4 text-white font-bold rounded-xl text-lg transition shadow-md ${
                  isFormValid && formData.termsAccepted
                    ? 'bg-[#0f5132] hover:bg-[#00A651] hover:shadow-lg'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                <Calendar className="w-5 h-5 inline mr-2" /> Confirm Pickup Request
              </button>
            </form>
          </div>
          
          {/* Right Column: Helpful Info (Unchanged) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* How It Works Card */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border-t-4 border-[#00A651]">
              <h3 className="text-2xl font-bold text-[#0f5132] mb-4 flex items-center">
                <HelpCircle className="w-6 h-6 mr-2" /> How It Works
              </h3>
              <ol className="space-y-4 list-decimal list-inside text-gray-600">
                {howItWorks.map((step, index) => (
                  <li key={index} className="text-base">
                    <span className="font-semibold text-gray-800">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            
            {/* Service & Contact Info Card */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border-l-4 border-[#00A651]">
              <h3 className="text-2xl font-bold text-[#0f5132] mb-4">Service Details</h3>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Operational Hours</p>
                    <p className="text-sm text-gray-600">Monday - Saturday: 9:00 AM to 7:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Coverage Areas</p>
                    <p className="text-sm text-gray-600">Serving major industrial and residential clusters in Gujarat and Maharashtra.</p>
                  </div>
                </div>
                
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-sm font-semibold text-gray-800">Quick Support</p>
                  <Link href="/contact" className="inline-flex items-center text-[#00A651] hover:underline text-sm">
                    <Phone className="w-4 h-4 mr-1" /> Contact our dedicated team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BookPickupPage;