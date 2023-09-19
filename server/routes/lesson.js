import express from "express";
import { getLesson, createLesson } from "../controllers/lessons.js";

const router = express.Router();

router.get("/", getLesson);
router.post("/", createLesson);

export default router;
