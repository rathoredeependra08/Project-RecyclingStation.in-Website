document.addEventListener("DOMContentLoaded", () => {
    // Simulated data (later we'll connect this with actual form data)
    const bookings = [
      { name: "Amit Sharma", address: "Jaipur", type: "Plastic", date: "2025-10-30", time: "10:00 AM", status: "Pending" },
      { name: "Neha Patel", address: "Udaipur", type: "E-Waste", date: "2025-10-31", time: "12:30 PM", status: "Confirmed" },
    ];
  
    const tableBody = document.querySelector("#pickupTable tbody");
  
    bookings.forEach((b) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${b.name}</td>
        <td>${b.address}</td>
        <td>${b.type}</td>
        <td>${b.date}</td>
        <td>${b.time}</td>
        <td>${b.status}</td>
      `;
      tableBody.appendChild(row);
    });
  
    // Logout button (optional placeholder)
    document.getElementById("logoutBtn").addEventListener("click", () => {
      alert("Logged out successfully!");
    });
  });
  
  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Simple static login check (you can replace this later with backend auth)
    if (username === "admin" && password === "12345") {
      localStorage.setItem("adminLoggedIn", "true");
      window.location.href = "admin-dashboard.html";
    } else {
      document.getElementById("loginMsg").innerText = "Invalid username or password.";
      document.getElementById("loginMsg").style.color = "red";
    }
  });

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("adminLoggedIn");
    window.location.href = "admin-login.html";
  });

  document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#pickupTable tbody");
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  
    tableBody.innerHTML = "";
  
    if (bookings.length === 0) {
      tableBody.innerHTML = "<tr><td colspan='6'>No bookings yet.</td></tr>";
    } else {
      bookings.forEach((b) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${b.name}</td>
          <td>${b.address}</td>
          <td>${b.type}</td>
          <td>${b.date}</td>
          <td>${b.time}</td>
          <td>${b.status}</td>
        `;
        tableBody.appendChild(row);
      });
    }
  
    document.getElementById("logoutBtn").addEventListener("click", () => {
      localStorage.removeItem("adminLoggedIn");
      window.location.href = "admin-login.html";
    });
  });
  
  //Login form

  import React, { useState } from "react";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save JWT token to localStorage
        localStorage.setItem("adminToken", data.token);
        setIsLoggedIn(true);
        setMessage("✅ Login Successful!");
      } else {
        setMessage(`❌ ${data.msg || "Invalid credentials"}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("⚠️ Server not reachable");
    }
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsLoggedIn(false);
  };

  // Check login state if token exists
  React.useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) setIsLoggedIn(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!isLoggedIn ? (
        // LOGIN FORM
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-2xl shadow-md w-96"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-4 p-2 border rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-2 border rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
          <p className="text-center mt-4 text-sm text-gray-600">{message}</p>
        </form>
      ) : (
        // ADMIN DASHBOARD (after login)
        <div className="bg-white p-8 rounded-2xl shadow-md w-[600px] text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome, Admin 👋</h1>
          <p className="text-gray-600 mb-6">
            You are logged in successfully.  
            Here you can manage users, products, or any backend data.
          </p>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Admin;
