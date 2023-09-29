// import mongoose from "mongoose";

// const bookingSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: String,
//     },
//     tourId: {
//       type: String,
//     },
//     userEmail: {
//       type: String,
//     },
//     tourName: {
//       type: String,
//       required: true,
//     },
//     fullName: {
//       type: String,
//       required: true,
//     },
//     guestSize: {
//       type: Number,
//       required: true,
//     },
//     phone: {
//       type: Number,
//       required: true,
//     },
//     totalPrice: {
//       type: Number,
//       required: true,
//     },
//     state: {
//       type: Boolean,
//       default: false,
//     },
//     bookAt: {
//       type: Date,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Booking", bookingSchema);


import mongoose from "mongoose";
import {db1} from "../connect.js"

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    tourId: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    tourName: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    guestSize: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    state: {
      type: Boolean,
      default: false,
    },
    bookAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Booking = db1.model("Booking", bookingSchema);

export default Booking;
