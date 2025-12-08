import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UserRegister = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration coming soon!");
  };

  return (
    <>
      <Header />
      <div className="p-8 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <button className="bg-green-600 text-white w-full p-2 rounded hover:bg-green-700">
            Register
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UserRegister;
