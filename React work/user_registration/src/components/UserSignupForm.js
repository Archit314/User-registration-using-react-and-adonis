import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components-css/UserSignupFormCss.css";
import axios from "axios";

export default function UserSignupForm({ path }) {
  // Initial data object
  const payload = {
    name: "",
    userName: "",
    mobileNumber: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState(payload);

  // method to handle input value of input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };

  // method to handle submit
  const handleSubmit = async (formData) => {
    formData.preventDefault();

    // data that will be post to the api
    const postData = {
      name: data.name,
      userName: data.userName,
      mobileNumber: data.mobileNumber,
      email: data.email,
      password: data.password,
    };

    const config = {
      method: "post",
      url: "http://127.0.0.1:3333/user/sign-up",
      data: postData,
    };

    try {
      // calling api
      const response = await axios(config);

      if (response.status === 200) {
        console.log("User signup successfully.");

        // making the input fields again blank
        setData(payload);
      } else {
        console.log("User registration failed.");
      }
    } catch (e) {
      console.log(`Error occured ${e}`);
    }
  };
  return (
    <>
      <div>
        <div className="container" id="registrationForm">
          <div className="container" id="form">
            <form onSubmit={handleSubmit}>
              <h3 id="form-heading">Signup</h3>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={data.name}
                  name="name"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  value={data.userName}
                  name="userName"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="number" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="number"
                  value={data.mobileNumber}
                  name="mobileNumber"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
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
                  value={data.email}
                  name="email"
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
                  id="exampleInputPassword1"
                  value={data.password}
                  name="password"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>

              <button type="submit" className="btn" id="submit-button">
                Submit
              </button>
              <p id="form-fotter">
                If already registered ? click to <Link to={path}>Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
