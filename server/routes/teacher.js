import { Router } from "express";
import { signupTeacher, loginTeacher } from '../controllers/teacherController.js';

const teacherRouter = Router();

// login route
teacherRouter.post('/login', loginTeacher);

// signup route
teacherRouter.post('/signup', signupTeacher);

export default teacherRouter;