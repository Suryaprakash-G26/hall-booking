import express from "express";
import { Getroom, createRoom } from "../controllers/rooms.js";

const router = express.Router();


//get all room data 
router.get("/all", async (req, res) => {
  try {
    const rooms = await Getroom();
    res.status(200).json({ data: rooms });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// add new room
router.post("/add", async (req, res) => {
  try {
    if (Object.keys(req.body).length <= 0) {
      return res.status(400).json({ error: "Check request body" });
    }
    const data = { ...req.body, status: "Available" };
    const newroom = await createRoom(data);
    if (!newroom.acknowledged) {
      return res.status(400).json({ error: "error in adding data" });
    }
    res.status(201).json({ data: newroom });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", erorrMessage: error });
  }
});

export const RoomsRouter = router; 
