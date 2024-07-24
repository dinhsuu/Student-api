import express from 'express';
import { getStudents, createStudentController, getUserById, login } from '../controllers/StudentsController.js';

const route = express.Router();
// 
route.get('/get-student', getStudents);
route.post('/create', createStudentController);
route.post('/login', login);
route.get('/get-student-byId', getUserById);

export default route;
