import Lesson from "../database/models/lessonModel.js";

export const createLesson = async (req, res) => {
  const lessonBody = req.body;
  try {
    const createdLesson = await Lesson.create(lessonBody);
    res.status(201).json(createdLesson);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
