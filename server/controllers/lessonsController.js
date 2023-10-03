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

export const getAllLessonsByDate = async (req, res) => {
  try {
    const requestedDate = req.query.date;

    // Calculate the start and end of the day for the given date
    const start = new Date(requestedDate);
    const end = new Date(requestedDate);
    end.setDate(end.getDate() + 1);

    console.log(requestedDate);
    const lessonsByDate = await Lesson.find({
      date: { $gte: start, $lt: end },
    });

    res.json(lessonsByDate);
  } catch (error) {
    console.error("Error retrieving lessons:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
