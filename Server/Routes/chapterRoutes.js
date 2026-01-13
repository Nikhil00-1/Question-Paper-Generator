import express from "express";
import Chapter from "../Models/Chapter.js";

const router = express.Router();

router.get("/:subjectId", async (req, res) => {
  try {
    const chapters = await Chapter.find({
      subjectId: req.params.subjectId
    });
    res.json(chapters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
