import express from "express";
import Admin from "../models/Admin.js";
import User from "../models/User.js"; // make sure you have this model
import Product from "../models/Product.js"; // make sure you have this model

const router = express.Router();

// Dashboard Stats Route
router.get("/stats", async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalProducts = await Product.countDocuments();
    const totalAdmins = await Admin.countDocuments();

    // Example: Pending requests could be items waiting for approval
    const pendingRequests = await Product.countDocuments({ status: "pending" });

    res.json({
      totalUsers,
      totalProducts,
      totalAdmins,
      pendingRequests,

      ordersToday: 73, // placeholder (you can calculate later)
      revenue: 84230,  // placeholder or fetched from DB
      recentActivities: [
        "✅ New user Ravi registered.",
        "🛒 Order #1293 placed.",
        "💰 Revenue updated from Stripe API.",
        `🧑‍💻 Admin ${adminName} logged in successfully.`,
      ],
    });
  } catch (err) {
    console.error("Error fetching dashboard stats:", err);
    res.status(500).json({ msg: "Server error while fetching stats" });
  }
});

export default router;
