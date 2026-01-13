// QuestionCard.jsx
import "./QuestionCard.css";

function QuestionCard({ question, index }) {
  return (
    <div className="question-card">
      <h4>Q{index + 1}. {question.question}</h4>
      {question.options.map((op, i) => (
        <label key={i}>
          <input type="radio" name={question._id} /> {op}
        </label>
      ))}
    </div>
  );
}

export default QuestionCard;
