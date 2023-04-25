// const ProjectModel = require("../models/project");
const Build = require("../model/Build");

const mongoose = require('mongoose')

// add a new project/ Build    ---->
export const postNewBuild = async (req, res) =>{

  const Build = req.body
  const NewBuild = new Build(Build)
  try {
    await NewBuild.save()
    res.status(201).json(NewBuild)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

// Update Build
export const UpdateBuild = async (req, res) =>{
  const _id = req.params.id;
  const Build = req.body

  if(!mongoose.Types.ObjectId.isValid(_id)){
      return res.status(404).send("No Build with that id")
  }

  const updatedBuild = await Build.findByIdAndUpdate(_id, {...Build, _id}, {new:true})
  res.json(updatedBuild)
}

// Delete Build
export const deleteBuild = async (req, res) =>{
  const _id = req.params.id

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("ID id not here")

  await Build.findByIdAndDelete(_id);

  res.json({message: "Build deleted successfully"})
}


// get all Builds
export const getBuild = async (req, res) => {
  try {
    const Builds = await Build.find();
    return res.status(200).json({
      success: true,
      Builds,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//single project
