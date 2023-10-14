import React from "react";

export default function ProductCart({ item }) {
  return (
    <>
      {/* <!-- breadcrumb-section --> */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <h1>Cart</h1>
                <p>Review your cart items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb section --> */}

      {/* <!-- cart --> */}
      <div className="cart-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="cart-table-wrap">
                <table className="cart-table">
                  <thead className="cart-table-head">
                    <tr className="table-head-row">
                      <th className="product-remove"></th>
                      <th className="product-image">Product Image</th>
                      <th className="product-name">Name</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-body-row">
                      <td className="product-remove">
                        <a href="/">
                          <i className="far fa-window-close"></i>
                        </a>
                      </td>
                      <td className="product-image">
                        <img
                          src="assets/img/products/product-img-1.jpg"
                          alt=""
                        />
                      </td>
                      <td className="product-name">Strawberry</td>
                      <td className="product-price">$85</td>
                      <td className="product-quantity">
                        <input type="number" placeholder="0" />
                      </td>
                      <td className="product-total">1</td>
                    </tr>
                    <tr className="table-body-row">
                      <td className="product-remove">
                        <a href="/">
                          <i className="far fa-window-close"></i>
                        </a>
                      </td>
                      <td className="product-image">
                        <img
                          src="assets/img/products/product-img-2.jpg"
                          alt=""
                        />
                      </td>
                      <td className="product-name">Berry</td>
                      <td className="product-price">$70</td>
                      <td className="product-quantity">
                        <input type="number" placeholder="0" />
                      </td>
                      <td className="product-total">1</td>
                    </tr>
                    <tr className="table-body-row">
                      <td className="product-remove">
                        <a href="/">
                          <i className="far fa-window-close"></i>
                        </a>
                      </td>
                      <td className="product-image">
                        <img
                          src="assets/img/products/product-img-3.jpg"
                          alt=""
                        />
                      </td>
                      <td className="product-name">Lemon</td>
                      <td className="product-price">$35</td>
                      <td className="product-quantity">
                        <input type="number" placeholder="0" />
                      </td>
                      <td className="product-total">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="total-section">
                <table className="total-table">
                  <thead className="total-table-head">
                    <tr className="table-total-row">
                      <th>Total</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="total-data">
                      <td>
                        <strong>Subtotal: </strong>
                      </td>
                      <td>$500</td>
                    </tr>
                    <tr className="total-data">
                      <td>
                        <strong>Shipping: </strong>
                      </td>
                      <td>$45</td>
                    </tr>
                    <tr className="total-data">
                      <td>
                        <strong>Total: </strong>
                      </td>
                      <td>$545</td>
                    </tr>
                  </tbody>
                </table>
                <div className="cart-buttons">
                  <a href="cart.html" className="boxed-btn">
                    Update Cart
                  </a>
                  <a href="checkout.html" className="boxed-btn black">
                    Check Out
                  </a>
                </div>
              </div>

              <div className="coupon-section">
                <h3>Apply Coupon</h3>
                <div className="coupon-form-wrap">
                  <form action="index.html">
                    <p>
                      <input type="text" placeholder="Coupon" />
                    </p>
                    <p>
                      <input type="submit" value="Apply" />
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end cart -->

	<!-- footer --> */}
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
      {/* <!-- end footer -->
	
	<!-- copyright --> */}
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
      {/* {/* <!-- end copyright --> */}
    </>
  );
}
