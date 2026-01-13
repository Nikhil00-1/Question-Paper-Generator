import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true
  }
});

export default mongoose.model("Chapter", chapterSchema);
