// import mongoose from "mongoose";

// const tourSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     city: {
//       type: String,
//       required: true,
//     },
//     address: {
//       type: String,
//       required: true,
//     },
//     // distance: {
//     //   type: Number,
//     //   required: true,
//     // },
//     photo: {
//       type: String,
//       required: true,
//     },
//     date: {
//       type: Date,
//       required: true,
//     },
//     desc: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     maxGroupSize: {
//       type: Number,
//       required: true,
//     },
//     day: {
//       type: String,
//       required: true,
//     },
//     tax: {
//       type: Number,
//       required: true,
//     },
//     reviews: [
//       {
//         type: mongoose.Types.ObjectId,
//         ref: "Review",
//       },
//     ],

//     featured: {
//       type: Boolean,
//       default: true,
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Tour", tourSchema);

import mongoose from "mongoose";
import {db2} from "../connect.js";
const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    // distance: {
    //   type: Number,
    //   required: true,
    // },
    photo: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxGroupSize: {
      type: Number,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    tax: {
      type: Number,
      required: true,
    },
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],

    featured: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Tour = db2.model("Tour", tourSchema);

export default Tour;
