import LessonInfo from "../models/lessonInfo.js";

export const getLesson = async (req, res) => {
  try {
    const LessonInfo = await LessonInfo.find();
    res.status(200).json(LessonInfo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createLesson = async (req, res) => {
  const lessonBody = req.body;
  const newLesson = new LessonInfo(lessonBody);
  try {
    await newLesson.save();
    res.status(201).json(newLesson);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
