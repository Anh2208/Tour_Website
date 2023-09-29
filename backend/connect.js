import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 8000;
// Kết nối đến db1
const db1 = mongoose.createConnection(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Kết nối đến db2
const db2 = mongoose.createConnection(process.env.MONGO_URI2, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

export { db1, db2 };
