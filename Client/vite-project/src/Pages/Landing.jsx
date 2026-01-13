import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Landing.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Smart Question Paper Generator for <span>CET, JEE & NEET</span>
          </h1>

          <p>
            Generate chapter-wise exam-ready MCQs instantly.
            Practice smarter. Prepare better. Score higher.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary btn-lg"
              onClick={() => navigate("/generator")}
            >
              Get Started
            </button>


          </div>

          <div className="hero-stats">
            <div>
              <h3>1000+</h3>
              <p>Questions</p>
            </div>
            <div>
              <h3>3 Exams</h3>
              <p>CET · JEE · NEET</p>
            </div>
            <div>
              <h3>Instant</h3>
              <p>Paper Generation</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
