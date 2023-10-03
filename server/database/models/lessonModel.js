import { Schema, model } from "mongoose";

const LessonSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
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
  },
  {
    timestamps: true,
  }
);

const Lesson = model("Lesson", LessonSchema);

export default Lesson;
