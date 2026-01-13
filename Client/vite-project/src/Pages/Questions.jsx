import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../api";
import "./Questions.css";

function Questions() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const chapterId = searchParams.get("chapterId");
  const mode = searchParams.get("mode"); 
  // mode values:
  // "questions" | "full" | "answerKey"

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (!chapterId) {
      navigate("/generator");
      return;
    }

    API.get(`/questions/${chapterId}`)
      .then(res => {
        console.log("Questions loaded:", res.data);
        setQuestions(res.data);
      })
      .catch(err => console.error(err));
  }, [chapterId, navigate]);

  return (
    <>
      <Navbar />

      <div className="questions-page">
        <h2>Question Paper</h2>

        {questions.length === 0 && (
          <p>No questions available for this chapter.</p>
        )}

        {questions.map((q, i) => (
          <div className="question-block" key={q._id}>
            {/* Question */}
            <p className="question-text">
              {i + 1}. {q.question}
            </p>

            {/* MODE 2: Questions + Options + Answer */}
            {mode === "full" && (
              <>
                <ul className="options">
                  {q.options.map((op, idx) => (
                    <li key={idx}>{op}</li>
                  ))}
                </ul>
                <p className="answer">
                  Correct Answer: {q.correctOption}
                </p>
              </>
            )}

            {/* MODE 3: Questions + Answer ONLY (NO OPTIONS) */}
            {mode === "answerKey" && (
              <p className="answer">
                Answer: {q.correctOption}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Questions;
