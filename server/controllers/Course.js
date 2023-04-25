// const ProjectModel = require("../models/project");
// const CourseModel = require("../model/Course");
import CourseModel from '../model/Course.js'
import mongoose from "mongoose";

// add a new project/ course    ---->

export const postNewCourse = async (req, res) =>{

  const course = req.body
  const NewCourse = new CourseModel(course)
  try {
    await NewCourse.save()
    console.log(NewCourse);
    res.status(201).json(NewCourse)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

// Update Course

export const UpdateCourse = async (req, res) =>{
  const _id = req.params.id;
  const course = req.body

  if(!mongoose.Types.ObjectId.isValid(_id)){
      return res.status(404).send("No course with that id")
  }

  const updatedCourse = await CourseModel.findByIdAndUpdate(_id, {...course, _id}, {new:true})
  res.json(updatedCourse)
}

// Delete Course

export const deleteCourse = async (req, res) =>{
  const _id = req.params.id

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("ID id not here")

  await CourseModel.findByIdAndDelete(_id);

  res.json({message: "Course deleted successfully"})
}


// get all courses
export const getCourses = async (req, res) => {
  try {
    const courses = await CourseModel.find();
    return res.status(200).json({
      success: true,
      courses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//single project
