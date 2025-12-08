import React from "react";
import { useNavigate } from "react-router-dom";

const RequestPickupSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 bg-gradient-to-b from-green-900/80 via-green-800/70 to-green-700/80 text-white text-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://tcitransportation.com/wp-content/uploads/Eco-Friendly-Logistics-Paving-the-Way-for-a-Sustainable-Tomorrow-TCI_Transportation.jpg')",
        }}
      ></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
          Request Waste Pickup Now
        </h2>
        <p className="text-gray-200 mb-10 text-lg">
          We provide reliable recycling pickup services, helping homes and businesses reduce waste and protect the environment.
        </p>
        <button
          onClick={() => navigate("/request-pickup")}
          className="px-8 py-3 bg-green-500 hover:bg-green-600 transition-all text-white font-semibold rounded-full shadow-lg hover:scale-105"
        >
          Book Pickup
        </button>
      </div>
    </section>
  );
};

export default RequestPickupSection;
