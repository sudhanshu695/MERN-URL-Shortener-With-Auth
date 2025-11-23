import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user", // Must be the model name
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
);

export const URL = mongoose.model("url", urlSchema);
