import { client } from "../db.js";

export function Getbooking() {
    return client.db("Hall").collection("bookings").find({}).toArray();
}

export function createbooking(data){
    return client.db("Hall").collection("bookings").insertOne(data)
}

export function GetBookingsByCustomer(customerName) {
    return client.db("Hall").collection("bookings").find({ customer_name: customerName }).toArray();
}