import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config()
const db= process.env.DBURL

async function dbconnection(){
    try {
        const client=new MongoClient(db);
        await client.connect()
        console.log('DB connected Successfully')
        return client  
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        throw error;    
    }
}


export const client= await dbconnection();