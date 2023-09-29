import express from "express";

import {Testdata} from "../controllers/testController.js";
const route = express.Router();

route.get("/", Testdata);

export default route;