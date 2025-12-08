import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* 🌿 Logo / Brand */}
        <motion.h1
          className="text-2xl font-bold text-green-700 cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          ♻️ RecycleSmart
        </motion.h1>

        {/* 🧭 Navigation Links */}
        <nav className="flex space-x-8 text-gray-700 font-medium">
          {["Home", "Services", "About", "Contact"].map((item, i) => (
            <Link
              key={i}
              to={`/${item.toLowerCase()}`}
              className="hover:text-green-600 transition-colors duration-300"
            >
              {item}
            </Link>
          ))}

          {/* 🔑 Admin Login */}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/admin-login"
              className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition-all"
            >
              Admin Login
            </Link>
          </motion.div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
