import mongoose from "mongoose";
import { db1, db2 } from "./connect.js";

// Define a schema and model for the first connection
const Schema1 = new mongoose.Schema({
  name: String,
});

const Model1 = db1.model("Model1", Schema1);
// Define a schema and model for the second connection
const Schema2 = new mongoose.Schema({
  age: Number,
});

const Model2 = db2.model("Model2", Schema2);

export { Model1, Model2 };
