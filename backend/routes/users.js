import express from "express";
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
  updateUserInfo,
} from "../controllers/userController.js";
const router = express.Router();

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

// update  user
router.put("/pass/:id", updateUser);

// update info user
router.put("/:id", updateUserInfo);

// delete user
// router.delete("/:id", verifyUser, deleteUser);
router.delete("/:id", deleteUser);

// get single user
router.get("/:id", getSingleUser);

// get all users
router.get("/", getAllUser);

export default router;
