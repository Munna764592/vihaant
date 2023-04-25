import mongoose from "mongoose";

const BuildSchema = new mongoose.Schema(
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
    imageURL: {
      type: String,
    },
    technologies: [],
    category: {
      type: String,
      enum: ["WEB_DEVELOPMENT", "APP_DEVELOPMENT", "BLOCKCHAIN"],
      default: "WEB_DEVELOPMENT",
    },
    level: {
      type: String,
      enum: ["BEGINNER", "INTERMEDIATE", "ADVANCED"],
      default: "BEGINNER",
    },
  },
  {
    timestamps: true,
  }
);

// const Build = mongoose.model(
//   "Build",
//   BuildSchema
// );

// module.exports = Build;

export default mongoose.model.Build || mongoose.model('Build', BuildSchema);