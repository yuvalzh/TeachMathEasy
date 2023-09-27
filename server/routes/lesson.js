import { Router } from "express";
import { createLesson } from "../controllers/lessonsController.js";

const lessonRoutes = Router();

lessonRoutes.post("/", createLesson);

export default lessonRoutes;
