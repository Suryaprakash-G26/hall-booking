import express from "express";
import { RoomsRouter } from "./routes/rooms.js";
import { bookingsRouter } from "./routes/booking.js";
import { Display } from "./routes/normal.js";

const app = express();

app.use(express.json());

const Port = process.env.Port || 8500;
app.use('/',Display)
app.use('/room', RoomsRouter);
app.use('/booking', bookingsRouter);  


app.listen(Port, () => console.log(`Server listening on localhost:${Port}`));


