import React from "react";
import { Link } from "react-router-dom";
// import "../components-css/UserSignupFormCss.css";

export default function subNavbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <div className="container-fluid"> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Stationary
              </a>
            </li>

            {/* drop down for stationary */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Stationary
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/store/pencil">
                    Pencil
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/store/pen">
                    Pen
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/store/rubber">
                    Rubber
                  </Link>
                </li>
              </ul>
            </li>

            {/* drop down for books */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Books
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Class 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Class 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Class 3
                  </a>
                </li>
              </ul>
            </li>

            {/* drop down  */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </nav>
    </>
  );
}
