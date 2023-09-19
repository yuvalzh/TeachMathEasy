import mongoose from "mongoose";

const lessonSchema = mongoose.Schema({
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

const LessonInfo = mongoose.model("LessonInfo", lessonSchema);

export default LessonInfo;
