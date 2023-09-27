import { Schema, model } from "mongoose";

const LessonSchema = new Schema({
  day: String,
  date: Date,
  startTime: String,
  endTime: String,
  age: Number,
  maxParticipants: {
    type: Number,
    default: 1,
  },
  currentParticipants: {
    type: Number,
    default: 1,
  },
  isAvailable: Boolean,
});

const Lesson = model("Lesson", LessonSchema);

export default Lesson;
