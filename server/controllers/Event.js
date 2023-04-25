// const ProjectModel = require("../models/project");
// const EventModal = require("../model/Events");
import EventModal from "../model/Events.js";
import mongoose from "mongoose";

// add a new project/ Event    ---->
export const postNewEvent = async (req, res) =>{

  const Event = req.body
  const NewEvent = new EventModal(Event)
  try {
    await NewEvent.save()
    res.status(201).json(NewEvent)
    console.log(NewEvent);
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

// Update Event
export const UpdateEvent = async (req, res) =>{
  const _id = req.params.id;
  const Event = req.body

  if(!mongoose.Types.ObjectId.isValid(_id)){
      return res.status(404).send("No Event with that id")
  }

  const updatedEvent = await EventModal.findByIdAndUpdate(_id, {...Event, _id}, {new:true})
  res.json(updatedEvent)
}

// Delete Event
export const deleteEvent = async (req, res) =>{
  const _id = req.params.id

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("ID id not here")

  await EventModal.findByIdAndDelete(_id);

  res.json({message: "Event deleted successfully"})
}


// get all Events
export const getEvent = async (req, res) => {
  try {
    const Events = await EventModal.find();
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


