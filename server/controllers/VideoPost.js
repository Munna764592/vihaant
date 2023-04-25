import VideoModal from "../model/Video.js";
import mongoose from "mongoose";

// const ProjectModel = require("../models/project");
// const VideoModal = require("../model/Events");

// add a new project/ Event    ---->
export const VideoPost = async (req, res) =>{

  const Event = req.body
  const NewVideo = new VideoModal(Event)
  try {
    await NewVideo.save()
    res.status(201).json(NewVideo)
    console.log(NewVideo);
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

// Update Event
export const UpdateVideo = async (req, res) =>{
  const _id = req.params.id;
  const Video = req.body

  if(!mongoose.Types.ObjectId.isValid(_id)){
      return res.status(404).send("No Event with that id")
  }

  const updatedEvent = await VideoModal.findByIdAndUpdate(_id, {...Video, _id}, {new:true})
  res.json(updatedEvent)
}

// Delete Event
export const deleteEvent = async (req, res) =>{
  const _id = req.params.id

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("ID id not here")

  await VideoModal.findByIdAndDelete(_id);

  res.json({message: "Event deleted successfully"})
}


// get all Events
export const getEvent = async (req, res) => {
  try {
    const Events = await VideoModal.find();
    return res.status(200).json({
      success: true,
      Events,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



