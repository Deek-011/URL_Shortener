import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <Link to="/" className="logo">
          <span className="logo__highlight">C</span>uvette
        </Link>
      </div>
      <nav className="sidebar__nav">
        <ul className="nav-list">
          <li className="nav-list__item">
            <Link to="/dashboard" className="nav-list__link">
              <svg className="nav-list__icon" /* Add icon SVG */></svg>
              Dashboard
            </Link>
          </li>
          <li className="nav-list__item">
            <Link to="/links" className="nav-list__link">
              <svg className="nav-list__icon" /* Add icon SVG */></svg>
              Links
            </Link>
          </li>
          <li className="nav-list__item">
            <Link to="/analytics" className="nav-list__link">
              <svg className="nav-list__icon" /* Add icon SVG */></svg>
              Analytics
            </Link>
          </li>
          <li className="nav-list__item">
            <Link to="/settings" className="nav-list__link">
              <svg className="nav-list__icon" /* Add icon SVG */></svg>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
