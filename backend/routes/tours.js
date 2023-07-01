import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTour,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour,
  getAllTourDashBoard,
  getSingleTourDashboard,
} from "./../controllers/tourController.js";
// import { verifyAdmin } from "./../utils/verifyToken.js";

const router = express.Router();

// create new tour
router.post("/", createTour);

// update  tour
router.put("/:id", updateTour);

// delete tour
router.delete("/:id", deleteTour);

// get single tour
router.get("/:id", getSingleTour);

// get all tours
router.get("/", getAllTour);

// // get all tours of dashboard
router.get("/dashboard/alltour", getAllTourDashBoard);

// // get single tours of dashboard
router.get("/dashboard/singletour/:id", getSingleTourDashboard);

// get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);
// router.get("/search/getUserTours", getUserTour);

export default router;
