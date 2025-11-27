import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        {/* Brand Name */}
        <Link className="navbar-brand" to="/welcome">
          Communication App
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/welcome">
                Welcome
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/userlist">
                User List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/uploadoc">
                Upload Document
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/documentlist">
                Dcoument List
              </Link>
            </li>

            {/* Logout example */}
            <li className="nav-item">
              <Link className="nav-link text-danger" to="logout/">
                Logout
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
