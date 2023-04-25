import express from 'express';
const router = express.Router();

import { postNewCourse, UpdateCourse,deleteCourse,getCourses } from '../controllers/Course.js';


// get all projects
router.post('/', postNewCourse )
router.patch('/:id',UpdateCourse )
router.delete('/:id', deleteCourse)
router.get("/", getCourses);

export default router;
