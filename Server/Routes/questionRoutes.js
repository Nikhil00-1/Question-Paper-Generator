import express from "express";
import Question from "../Models/Questions.js";

const router = express.Router();

// get 5 questions for chapter
router.get("/:chapterId", async (req, res) => {
  try {
    const chapterId = req.params.chapterId;

    const questions = await Question.find({
      chapterId: chapterId   // STRING MATCH
    }).limit(5);

    res.json(questions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
