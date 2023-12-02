import express from "express";
import { GetBookingsByCustomer, Getbooking, createbooking } from "../controllers/booking.js";

const router = express.Router();

//all customers with booked adta

router.get("/all", async (req, res) => {
  try {
    const bookings = await Getbooking();
    res.status(200).json({ data: bookings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//add booking

router.post("/add", async (req, res) => {
  try {
    if (Object.keys(req.body).length <= 0) {
      return res.status(400).json({ error: "Check request body" });
    }
    const data = { ...req.body, status: "Booked" };
    const newbooking = await createbooking(data);
    if (!newbooking.acknowledged) {
      return res.status(400).json({ error: "error in adding data" });
    }
    res.status(201).json({ data: newbooking });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", erorrMessage: error });
  }
});

//
router.get("/customer/:customerName", async (req, res) => {
    try {
        const { customerName } = req.params;
        const customerData = await GetBookingsByCustomer(customerName);
        res.status(200).json({ data: customerData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export const bookingsRouter = router; 
