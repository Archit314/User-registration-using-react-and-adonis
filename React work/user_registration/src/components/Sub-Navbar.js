import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import "../components-css/UserSignupFormCss.css";

export default function SubNavbar() {
  const navBackgroundColor = {
    backgroundColor: "#6f6f6f",
  };
  const cartIconAllignment = {
    color: "black",
  };
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getAllCategories = async () => {
      const postData = {
        url: " http://127.0.0.1:3333/navbar/category",
        method: "get",
      };

      try {
        const response = await axios(postData);
        const categories = await response.data;
        // console.log(response.data);

        // const categories = await response.json();
        console.log(categories.status);
        console.log(categories.data);

        if (categories.status === 200) {
          setCategories(categories.data);
          console.log(`Categories fetch successfully.`, categories.data);
        } else {
          console.log(`Failed to get categories.`);
        }
      } catch (error) {
        console.log(`Error`, error);
      }
    };

    getAllCategories();
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={navBackgroundColor}>
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
            {/* STATIOANRY */}

            {categories.map((category) => (
              <li className="nav-item" key={category}>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={`/store/${category.toLowerCase()}`}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* </div> */}

        <Link to="/" style={cartIconAllignment}>
          <i className="fas fa-shopping-cart"></i> Cart
        </Link>
      </nav>
    </>
  );
}
