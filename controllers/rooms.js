import { client } from "../db.js";

export function Getroom() {
    return client.db("Hall").collection("Rooms").find({}).toArray();
}

export function createRoom(data){
    return client.db("Hall").collection("Rooms").insertOne(data)
}