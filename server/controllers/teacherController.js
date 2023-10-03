import Teacher from "../database/models/teacherModel.js";

// login teacher
export const loginTeacher = async (req, res) => {
  res.json({ message: 'login user' });
};

// signup teacher
export const signupTeacher = async (req, res) => {
  res.json({ message: 'signup user' });
};