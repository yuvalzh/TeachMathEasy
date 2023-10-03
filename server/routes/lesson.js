import { Router } from "express";
import {
  createLesson,
  getAllLessonsByDate,
} from "../controllers/lessonsController.js";

const lessonRoutes = Router();

lessonRoutes.post("/", createLesson);
lessonRoutes.get("/", getAllLessonsByDate);

export default lessonRoutes;
