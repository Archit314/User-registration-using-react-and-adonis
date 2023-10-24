import React, { useEffect, useState } from "react";
import SubNavbar from "../Sub-Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "../../components-css/NavBarCss.css";

export default function Store({ item }) {
  const navigate = useNavigate();
  const buttonStyle = {
    backgroundColor: "#F28123",
  };

  const paramItem = item;
  const [product, setProduct] = useState([]);
  const [productItem, setProductItem] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const postData = {
        method: "post",
        url: "http://127.0.0.1:3333/category-product/all",
        data: { categoryName: paramItem },
      };

      try {
        const response = await axios(postData);
        if (!response) {
          console.log(`Error due to internal source.`);
        }
        const allProducts = await response.data;

        if (allProducts.status === 200) {
          await setProduct(allProducts.data);
        } else {
          console.log(`Failed to get products.`);
        }
      } catch (error) {
        console.log(`ERROR`, error);
      }
    };
    getAllProducts();
  }, [paramItem]);

  // fetching all product items
  useEffect(() => {
    const fetchAllItems = async () => {
      const postData = {
        url: "http://127.0.0.1:3333/product-item/all",
        method: "post",
        data: { categoryName: paramItem },
      };

      try {
        const response = await axios(postData);

        if (!response) {
          console.log(`Error due to internal source.`);
        }

        const allItems = response.data;
        if (!allItems) {
          console.log(`Items not found.`);
        } else if (allItems && allItems.status === 200) {
          console.log(`Items fetched successfully`);
          await setProductItem(allItems.data);
        }
      } catch (error) {
        console.log(`Error`, error);
      }
    };

    fetchAllItems();
  }, [paramItem]);

  // handling filter data
  const handleFilter = async (productFilterItem) => {
    // const filterData = !productFilterItem ? item : productFilterItem;
    const postData = {
      url: "http://127.0.0.1:3333/product-item/listing",
      method: "post",
      data: { productName: productFilterItem },
    };
    console.log(paramItem);
    try {
      const response = await axios(postData);
      if (!response) {
        console.log(`error`);
      }
      const allItem = await response.data;
      if (!allItem) {
        console.log(`No Item Found`);
      } else if (allItem && allItem.status === 200) {
        console.log(`items`, allItem.data.CategoryProductItem);
        setProductItem(allItem.data.CategoryProductItem);
      } else {
        console.log(`Error occured internally.`);
      }
    } catch (error) {
      console.log(`Error in filtering`, error);
    }
  };

  const handleAddToCart = async (singleItem) => {
    const accessToken = localStorage.getItem("access-token");
    if (!accessToken) {
      console.log(`user is not authenticate`);
      navigate("/");
    }
    const payload = {
      productItemId: singleItem.id,
    };

    const config = {
      url: "http://127.0.0.1:3333/v1/user/add-to/cart",
      method: "post",
      data: payload,
      headers: {
        Authorization: `Bearer ${accessToken}`, // Include the access token in the Authorization header
      },
    };

    try {
      const response = await axios(config);
      const data = response.data;

      if (!data || data.status !== 200) {
        console.log(`Internal server error`);
      } else {
        console.log(`Api is working fine`);
        navigate(`/user/cart/${singleItem.item}`);
      }
    } catch (error) {
      console.log(`error occur`, error);
    }
  };

  return (
    <>
      <SubNavbar />

      {/* <!-- breadcrumb-section --> */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <h1>
                  Shop<p>{item} that you need</p>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb section --> */}

      {/* <!-- products --> */}
      <div className="product-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-filters">
                <ul>
                  {product.map((singleProduct) => (
                    <li
                      className="active"
                      data-filter=".strawberry"
                      key={singleProduct}
                      onClick={() => handleFilter(singleProduct)}
                    >
                      {singleProduct}
                    </li>
                  ))}
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn" type="submit" style={buttonStyle}>
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="row product-lists">
            {productItem.map((singleItem) => (
              <div className="col-lg-4 col-md-6 text-center strawberry">
                <div className="single-product-item">
                  <div className="product-image">
                    <a href="single-product.html">
                      <img
                        src="/assets/img/products/product-img-1.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <h3>{singleItem.item}</h3>
                  <p className="product-price">
                    <span>Per piece</span> {singleItem.item_price}{" "}
                  </p>
                  <a
                    className="cart-btn"
                    onClick={() => handleAddToCart(singleItem)}
                  >
                    <i className="fas fa-shopping-cart"></i> Add to Cart
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="pagination-wrap">
                <ul>
                  <li>
                    <a href="/">Prev</a>
                  </li>
                  <li>
                    <a href="/">1</a>
                  </li>
                  <li>
                    <a className="active" href="/">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="/">3</a>
                  </li>
                  <li>
                    <a href="/">Next</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end products --> */}

      {/* <!-- logo carousel --> */}
      {/* <div className="logo-carousel-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="logo-carousel-inner">
                <div className="single-logo-item">
                  <img src="assets/img/company-logos/1.png" alt="" />
                </div>
                <div className="single-logo-item">
                  <img src="assets/img/company-logos/2.png" alt="" />
                </div>
                <div className="single-logo-item">
                  <img src="assets/img/company-logos/3.png" alt="" />
                </div>
                <div className="single-logo-item">
                  <img src="assets/img/company-logos/4.png" alt="" />
                </div>
                <div className="single-logo-item">
                  <img src="assets/img/company-logos/5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- end logo carousel --> */}

      {/* <!-- footer --> */}
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-box about-widget">
                <h2 className="widget-title">About us</h2>
                <p>
                  Ut enim ad minim veniam perspiciatis unde omnis iste natus
                  error sit voluptatem accusantium doloremque laudantium, totam
                  rem aperiam, eaque ipsa quae.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-box get-in-touch">
                <h2 className="widget-title">Get in Touch</h2>
                <ul>
                  <li>34/8, East Hukupara, Gifirtok, Sadan.</li>
                  <li>support@fruitkha.com</li>
                  <li>+00 111 222 3333</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-box pages">
                <h2 className="widget-title">Pages</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="services.html">Shop</a>
                  </li>
                  <li>
                    <a href="news.html">News</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-box subscribe">
                <h2 className="widget-title">Subscribe</h2>
                <p>Subscribe to our mailing list to get the latest updates.</p>
                <form action="index.html">
                  <input type="email" placeholder="Email" />
                  <button type="submit">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end footer --> */}

      {/* <!-- copyright --> */}
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p>
                Copyrights &copy; 2019 -{" "}
                <a href="https://imransdesign.com/">Imran Hossain</a>, All
                Rights Reserved.
                <br />
                Distributed By -{" "}
                <a href="https://themewagon.com/">Themewagon</a>
              </p>
            </div>
            <div className="col-lg-6 text-right col-md-12">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" target="_blank">
                      <i className="fab fa-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end copyright --> */}
    </>
  );
}
