import mongoose from "mongoose";
const VideoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Project Description is required"],
    },
    shortDescription: {
      type: String,
      required: [true, "Project Short Description is required"],
    },
    videoURL: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);


export default mongoose.model.Video || mongoose.model('Video', VideoSchema);