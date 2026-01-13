import Navbar from "../components/Navbar";
import "./Features.css";

function Features() {
  return (
    <>
      <Navbar />
      <section className="features-page">
        <div className="features-header">
          <h2>Why Examino?</h2>
          <p>
            A smart, fast and exam-ready question generation platform
            built for students and educators.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">📚</span>
            <h3>Smart Question Generator</h3>
            <p>
              Generate exam-ready question papers instantly
              based on course, subject and chapter selection.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🎯</span>
            <h3>Multiple Exam Modes</h3>
            <p>
              Choose between question-only, answer-included
              or answer-only formats with flexibility.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h3>Fast & Reliable</h3>
            <p>
              Powered by MongoDB Atlas and optimized APIs
              to deliver results in seconds.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🖨</span>
            <h3>Exam-Ready Output</h3>
            <p>
              Clean, structured and printable question papers
              suitable for PDF export and exams.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
