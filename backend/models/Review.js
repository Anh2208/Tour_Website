// import mongoose from "mongoose";

// const reviewSchema = new mongoose.Schema(
//   {
//     productId: {
//       type: mongoose.Types.ObjectId,
//       ref: "Tour",
//     },
//     username: {
//       type: String,
//       required: true,
//     },
//     reviewText: {
//       type: String,
//       required: true,
//     },
//     rating: {
//       type: Number,
//       required: true,
//       min: 0,
//       max: 5,
//       default: 0,
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Review", reviewSchema);

import mongoose from "mongoose";
import {db2} from "../connect.js"

const reviewSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "Tour",
    },
    username: {
      type: String,
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

const Review = db2.model("Review", reviewSchema);

export default Review;
