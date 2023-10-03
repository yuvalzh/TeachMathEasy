import { Router } from "express";
import lessonRoutes from "./lesson.js";
import teacherRouter from "./teacher.js";

const routes = Router();

routes.use("/lessons", lessonRoutes);
routes.use("/user-teacher", teacherRouter);

export default routes;