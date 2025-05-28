import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI as string;

console.log("MONGODB_URI:", MONGODB_URI);
if (!MONGODB_URI) {
  throw new Error("Define the MONGODB_URI environment variable inside .env");
}

let isConnected = false;

const dbConnect = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("MongoDB connection failed");
  }
};

export default dbConnect;
