import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import courseRoutes from "./Routes/courseRoutes.js";
import subjectRoutes from "./Routes/subjectRoutes.js";
import chapterRoutes from "./Routes/chapterRoutes.js";
import questionRoutes from "./Routes/questionRoutes.js"; // ✅ FIXED

import Course from "./Models/Course.js";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/courses", courseRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/chapters", chapterRoutes);
app.use("/api/questions", questionRoutes); // ✅ now correct

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
