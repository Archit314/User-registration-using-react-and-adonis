import React from "react";
import { Link } from "react-router-dom";

export default function UserSignInForm({ path }) {
  return (
    <div>
      <>
        <div>
          <div className="container" id="registrationForm">
            <div className="container" id="form">
              <form>
                <h3 id="form-heading">Sign In</h3>

                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">
                    User Name
                  </label>
                  <input type="text" className="form-control" id="userName" />
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
                  If not registered yet ? click to{" "}
                  <Link to={path}>Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
