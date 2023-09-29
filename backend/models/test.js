import mongoose from "mongoose";
import { db2 } from "../connect.js";
// const testSchema = new mongoose.Schema(
//   {
//     email: {
//       type: String,
//     },
//   },
// );
const testSchema = new mongoose.Schema({
  luffy: String,
  email: {
    type: String,
    default: "kkk",
  },
});

const Model3 = db2.model("Model3", testSchema);
export default Model3;
