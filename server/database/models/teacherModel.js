import { Schema, model } from "mongoose";

const TeacherSchema = new Schema({
  email: { 
    type: String,
    required: true,
    unique: true
  },
  password: { 
    type: String,
    required: true,
  },
});

const Teacher = model("Teacher", TeacherSchema);

export default Teacher;