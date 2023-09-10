import React from "react";

export default function Home() {
  return (
    <>
      {/* <!-- features list section --> */}
      <div className="list-section pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="list-box d-flex align-items-center">
                <div className="list-icon">
                  <i className="fas fa-shipping-fast"></i>
                </div>
                <div className="content">
                  <h3>Free Shipping</h3>
                  <p>When order over $75</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="list-box d-flex align-items-center">
                <div className="list-icon">
                  <i className="fas fa-phone-volume"></i>
                </div>
                <div className="content">
                  <h3>24/7 Support</h3>
                  <p>Get support all day</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="list-box d-flex justify-content-start align-items-center">
                <div className="list-icon">
                  <i className="fas fa-sync"></i>
                </div>
                <div className="content">
                  <h3>Refund</h3>
                  <p>Get refund within 3 days!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end features list section --> */}

      {/* <!-- product section --> */}
      <div className="product-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>
                  <span className="orange-text">Our</span> Products
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, fuga quas itaque eveniet beatae optio.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="/">
                    <img src="assets/img/products/product-img-1.jpg" alt="" />
                  </a>
                </div>
                <h3>Strawberry</h3>
                <p className="product-price">
                  <span>Per Kg</span> 85${" "}
                </p>
                <a href="/" className="cart-btn">
                  <i className="fas fa-shopping-cart"></i> Add to Cart
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="/">
                    <img src="assets/img/products/product-img-2.jpg" alt="" />
                  </a>
                </div>
                <h3>Berry</h3>
                <p className="product-price">
                  <span>Per Kg</span> 70${" "}
                </p>
                <a href="/" className="cart-btn">
                  <i className="fas fa-shopping-cart"></i> Add to Cart
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="/">
                    <img src="assets/img/products/product-img-3.jpg" alt="" />
                  </a>
                </div>
                <h3>Lemon</h3>
                <p className="product-price">
                  <span>Per Kg</span> 35${" "}
                </p>
                <a href="/" className="cart-btn">
                  <i className="fas fa-shopping-cart"></i> Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end product section --> */}

      {/* <!-- cart banner section --> */}
      <section className="cart-banner pt-100 pb-100">
        <div className="container">
          <div className="row clearfix">
            {/* <!--Image Column--> */}
            <div className="image-column col-lg-6">
              <div className="image">
                <div className="price-box">
                  <div className="inner-price">
                    <span className="price">
                      <strong>30%</strong> <br /> off per kg
                    </span>
                  </div>
                </div>
                <img src="assets/img/a.jpg" alt="" />
              </div>
            </div>
            {/* <!--Content Column--> */}
            <div className="content-column col-lg-6">
              <h3>
                <span className="orange-text">Deal</span> of the month
              </h3>
              <h4>Hikan Strwaberry</h4>
              <div className="text">
                Quisquam minus maiores repudiandae nobis, minima saepe id, fugit
                ullam similique! Beatae, minima quisquam molestias facere ea.
                Perspiciatis unde omnis iste natus error sit voluptatem accusant
              </div>
              {/* <!--Countdown Timer--> */}
              <div className="time-counter">
                <div
                  className="time-countdown clearfix"
                  data-countdown="2020/2/01"
                >
                  <div className="counter-column">
                    <div className="inner">
                      <span className="count">00</span>Days
                    </div>
                  </div>{" "}
                  <div className="counter-column">
                    <div className="inner">
                      <span className="count">00</span>Hours
                    </div>
                  </div>{" "}
                  <div className="counter-column">
                    <div className="inner">
                      <span className="count">00</span>Mins
                    </div>
                  </div>{" "}
                  <div className="counter-column">
                    <div className="inner">
                      <span className="count">00</span>Secs
                    </div>
                  </div>
                </div>
              </div>
              <a href="/" className="cart-btn mt-3">
                <i className="fas fa-shopping-cart"></i> Add to Cart
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end cart banner section --> */}

      {/* <!-- advertisement section --> */}
      <div className="abt-section mb-150 my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="abt-bg">
                <a href="/" className="video-play-btn popup-youtube">
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="abt-text">
                <p className="top-sub">Since Year 1999</p>
                <h2>
                  We are <span className="orange-text">Fruitkha</span>
                </h2>
                <p>
                  Etiam vulputate ut augue vel sodales. In sollicitudin neque et
                  massa porttitor vestibulum ac vel nisi. Vestibulum placerat
                  eget dolor sit amet posuere. In ut dolor aliquet, aliquet
                  sapien sed, interdum velit. Nam eu molestie lorem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente facilis illo repellat veritatis minus, et labore
                  minima mollitia qui ducimus.
                </p>
                <a href="/" className="boxed-btn mt-4">
                  know more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end advertisement section --> */}

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
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/">Shop</a>
                  </li>
                  <li>
                    <a href="/">News</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
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
                Copyrights &copy; 2019 - <a href="/">Imran Hossain</a>, All
                Rights Reserved.
                <br />
                Distributed By - <a href="/">Themewagon</a>
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
