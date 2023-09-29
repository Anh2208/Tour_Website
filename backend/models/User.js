// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     phone:{
//       type: String,
//       required: true,
//     },
//     address:{
//       type: String,
//       required: true,
//     },
//     role: {
//       type: String,
//       default: "user",
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("User", userSchema);

import mongoose from "mongoose";
import {db1} from "../connect.js";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone:{
      type: String,
      required: true,
    },
    address:{
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

const User = db1.model("User", userSchema);

export default User;
