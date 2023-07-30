import React from "react";
import "../components-css/UserSignupFormCss.css";

export default function UserSignupForm() {
  return (
    <>
      <div>
        <div className="container" id="registrationForm">
          <div className="container" id="form">
            <form>
              <h3 id="form-heading">Signup</h3>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">
                  User Name
                </label>
                <input type="text" className="form-control" id="userName" />
              </div>
              <div className="mb-3">
                <label htmlFor="number" className="form-label">
                  Phone Number
                </label>
                <input type="text" className="form-control" id="number" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" className="btn" id="submit-button">
                Submit
              </button>
              <p id="form-fotter">
                If already registered ? click to <a href="/">Sign in</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
