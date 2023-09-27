import { Router } from "express";
import lessonRoutes from "./lesson.js";

const routes = Router();

routes.use("/lessons", lessonRoutes);

export default routes;
