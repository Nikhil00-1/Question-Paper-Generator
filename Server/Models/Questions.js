import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true,
    validate: v => v.length === 4
  },
  correctOption: {
    type: String,
    required: true
  },
  chapterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chapter",
    required: true
  }
});

export default mongoose.model("Question", questionSchema);
