import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Examino</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <Link to="/generator" className="btn-nav">
            Get Started
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
