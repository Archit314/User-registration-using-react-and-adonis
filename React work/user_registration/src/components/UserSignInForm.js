import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UserSignInForm({ path }) {
  const navigate = useNavigate();
  const data = {
    userName: "",
    password: "",
  };
  const [userData, SetUserData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetUserData({ ...userData, [name]: value });
  };
  const handleSubmit = async (formData) => {
    formData.preventDefault();

    const payload = {
      userName: userData.userName,
      password: userData.password,
    };

    const config = {
      method: "post",
      data: payload,
      url: "http://127.0.0.1:3333/user/sign-in",
    };

    try {
      const response = await axios(config);

      const apiResponse = response.data;
      if (apiResponse.status === 200) {
        console.log(`Login successfully`);
        localStorage.setItem("access-token", response.data.data.token);
        SetUserData(data);
        navigate("/");
      } else {
        console.log(`some server error occured`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <>
        <div>
          <div className="container" id="registrationForm">
            <div className="container" id="form">
              <form onSubmit={handleSubmit}>
                <h3 id="form-heading">Sign In</h3>

                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">
                    User name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    name="userName"
                    value={userData.userName}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={userData.password}
                    onChange={(e) => {
                      handleChange(e);
                    }}
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
