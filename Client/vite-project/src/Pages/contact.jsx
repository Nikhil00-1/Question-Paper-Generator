import Navbar from "../components/Navbar";
import "./contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p className="contact-subtitle">
          Have questions or feedback? We’d love to hear from you.
        </p>

        <div className="contact-card">
          <div className="contact-item">
            <span>👤</span>
            <div>
              <h4>Name</h4>
              <p>Nikhil Wagh</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📧</span>
            <div>
              <h4>Email</h4>
              <p>nikhilwagh@example.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📞</span>
            <div>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <h4>Location</h4>
              <p>Pune, India</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
