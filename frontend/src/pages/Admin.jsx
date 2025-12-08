import React from "react";
import { Link, Routes, Route } from "react-router-dom";

// --- Dummy Components (Replace later if needed)
function Dashboard() {
  return <h2>📊 Dashboard Overview</h2>;
}
function Users() {
  return <h2>👥 Manage Users</h2>;
}
function Products() {
  return <h2>📦 Manage Products</h2>;
}
function Analytics() {
  return <h2>📈 Analytics Reports</h2>;
}
function Settings() {
  return <h2>⚙️ Application Settings</h2>;
}

function Admin() {
  const adminName = localStorage.getItem("admin") || "Admin";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    window.location.href = "/admin-login";
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#f1f5f9",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "240px",
          backgroundColor: "#1e293b",
          color: "white",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
            🛠️ Admin Panel
          </h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ margin: "15px 0" }}>
              <Link
                to="/admin/dashboard"
                style={{ color: "white", textDecoration: "none" }}
              >
                🏠 Dashboard
              </Link>
            </li>
            <li style={{ margin: "15px 0" }}>
              <Link
                to="/admin/users"
                style={{ color: "white", textDecoration: "none" }}
              >
                👥 Users
              </Link>
            </li>
            <li style={{ margin: "15px 0" }}>
              <Link
                to="/admin/products"
                style={{ color: "white", textDecoration: "none" }}
              >
                📦 Products
              </Link>
            </li>
            <li style={{ margin: "15px 0" }}>
              <Link
                to="/admin/analytics"
                style={{ color: "white", textDecoration: "none" }}
              >
                📈 Analytics
              </Link>
            </li>
            <li style={{ margin: "15px 0" }}>
              <Link
                to="/admin/settings"
                style={{ color: "white", textDecoration: "none" }}
              >
                ⚙️ Settings
              </Link>
            </li>
          </ul>
        </div>

        <button
          onClick={handleLogout}
          style={{
            background: "#dc2626",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "30px",
          overflowY: "auto",
        }}
      >
        <h1>Welcome, {adminName} 🎉</h1>
        <p style={{ color: "#64748b" }}>Here’s your admin overview</p>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
