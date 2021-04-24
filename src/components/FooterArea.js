import React from "react";

function FooterArea() {
  return (
    <div id="contact">
      <footer className="footer-area">
        <div className="container">
          <div className="footer-content">
            <div className="logo">
              <a href="index.html">
                <img src="assets/img/logo192.png" alt="image" />
              </a>
              <p>
                Lorem ipsum dolor consectetur adipiscing elit, eiusmod tempor ut
                labore et dolore magna aliqua.
              </p>
              <ul className="footer-contact-info">
                <li>
                  Email: <a href="#">info@axton.com</a>
                </li>
                <li>
                  Phone: <a href="#">+44 478 857 7458</a>
                </li>
              </ul>
              <ul className="social">
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-github-square" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-dribbble" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-behance" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="br-line" />
        <div className="footer-shape1">
          <img src="assets/img/shape3.png" alt="image" />
        </div>
        <div className="footer-shape2">
          <img src="assets/img/shape4.png" alt="image" />
        </div>
      </footer>
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                <i className="far fa-copyright" /> Copyright ECONOMIC Todos los
                derechos reservados.
              </p>
            </div>
            <div className="col-lg-6 col-md-6">
              <ul>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterArea;
