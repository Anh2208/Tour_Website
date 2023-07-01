import express from "express";
import {
  createBooking,
  deleteBooking,
  getAllBooking,
  getBooking,
  getUserBooking,
  updateBooking,
} from "../controllers/bookingController.js";

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/:id", getBooking);
router.get("/", getAllBooking);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);
router.get("/search/getUserBookings/:id", getUserBooking);


export default router;
