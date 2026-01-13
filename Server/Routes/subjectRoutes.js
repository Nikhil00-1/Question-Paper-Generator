import express from "express";
import mongoose from "mongoose";
import Subject from "../Models/Subject.js";

const router = express.Router();

router.get("/:courseId", async (req, res) => {
  try {
    const courseObjectId = new mongoose.Types.ObjectId(req.params.courseId);

    const subjects = await Subject.find({
      courseId: courseObjectId
    });
    
    res.json(subjects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
