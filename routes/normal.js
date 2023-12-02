import express from "express";
import { Getroom } from "../controllers/rooms.js";
import { Getbooking } from "../controllers/booking.js";

const router = express.Router();


//get all  data 
router.get("/", async (req, res) => {
  try {
    const rooms = await Getroom();
    const booking= await Getbooking()
    res.status(200).json({ rooms ,booking});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
export const Display=router;
