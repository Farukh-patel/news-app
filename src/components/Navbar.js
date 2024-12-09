import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="name">
            newsMonkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="general">
                  Home
                </Link>{" "}
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="business">
                  Business
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="entertainment">
                  Entertainment
                </Link>{" "}
              </li>

              <li className="nav-item">  
                <Link className="nav-link" to="health">
                  Health
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="science">
                  Science
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="sports">
                  Sports
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="technology">
                  Technology
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              style={{ color: props.mode === "dark" ? "white" : "black" }}
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "dark" ? "Dark mode" : "Light mode"}
            </label>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;


