function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  }
  
  // Toggle menu (for mobile view)
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
  }
  
  // Handle form submission
  const form = document.getElementById("pickupForm");
  const confirmation = document.getElementById("confirmationMessage");
  
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent page reload
      confirmation.classList.remove("hidden");
      form.reset(); // Clear inputs
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("pickupForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const booking = {
          name: document.getElementById("name").value,
          address: document.getElementById("address").value,
          type: document.getElementById("wasteType").value,
          date: document.getElementById("pickupDate").value,
          time: document.getElementById("pickupTime").value,
          status: "Pending"
        };
  
        // Fetch existing data
        const existing = JSON.parse(localStorage.getItem("bookings")) || [];
        existing.push(booking);
        localStorage.setItem("bookings", JSON.stringify(existing));
  
        document.getElementById("msg").innerText = "✅ Booking submitted successfully!";
        document.getElementById("pickupForm").reset();
      });
    }
  });
  
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./admin";
import main from "./main"; // or whatever your main page is

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
