import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Selector from "../components/Selector";
import API from "../api";
import "./Generator.css";

function Generator() {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [chapters, setChapters] = useState([]);

  const [courseId, setCourseId] = useState("");
  const [subjectId, setSubjectId] = useState("");
  const [chapterId, setChapterId] = useState("");
  const [mode, setMode] = useState("questions");

  useEffect(() => {
    API.get("/courses").then(res => setCourses(res.data));
  }, []);

  useEffect(() => {
    if (courseId) {
      API.get(`/subjects/${courseId}`).then(res => setSubjects(res.data));
    }
  }, [courseId]);

  useEffect(() => {
    if (subjectId) {
      API.get(`/chapters/${subjectId}`).then(res => setChapters(res.data));
    }
  }, [subjectId]);

  const generate = () => {
    navigate(`/questions?chapterId=${chapterId}&mode=${mode}`);

  };

  return (
    <>
      <Navbar />
      <div className="generator-container">
        <h2>Generate Question Paper</h2>

        <div className="selectors">
          <Selector label="Course" data={courses} onChange={setCourseId} />
          <Selector label="Subject" data={subjects} onChange={setSubjectId} />
          <Selector label="Chapter" data={chapters} onChange={setChapterId} />
        </div>

        <div className="modes">
          <label>
            <input
              type="radio"
              value="questions"
              checked={mode === "questions"}
              onChange={e => setMode(e.target.value)}
            />
            Only Questions
          </label>

          <label>
            <input
              type="radio"
              value="full"
              checked={mode === "full"}
              onChange={e => setMode(e.target.value)}
            />
            Questions + Options + Answer
          </label>

          <label>
            <input
              type="radio"
              value="answerKey"
              checked={mode === "answerKey"}
              onChange={e => setMode(e.target.value)}
            />
            Questions + Answer Key
          </label>
        </div>

        <button
          className="btn-primary"
          disabled={!chapterId}
          onClick={generate}
        >
          Generate Questions
        </button>
      </div>
    </>
  );
}

export default Generator;
