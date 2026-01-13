import express from "express";
import Course from "../Models/Course.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
