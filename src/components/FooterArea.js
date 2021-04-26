import React from "react";

function FooterArea({ id }) {
  return (
    <div key={id} id="contact">
      <footer className="footer-area">
        <div className="container">
          <div className="footer-content">
            <div className="logo">
              <a href="index.html">
                <img src="assets/img/logo192.png" alt="_" />
              </a>
              <p>
              "There are two ways to write error-free programs; only the third works!!!"
              </p>
              <ul className="footer-contact-info">
                <li>
                  Email: <a href="mailto:mikaelosotes@gmail.com">mikaelosotes@gmail.com</a>
                </li>
              </ul>
              <ul className="social">
                <li>
                  <a
                    href="https://twitter.com/ios_devpy91?s=09"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/lucasgio/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-github-square" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/iosvany-alvarez-7570871b9/?locale=en_US"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/iosvanyalvarez/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.hackerrank.com/mikaelosoltes_91"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-hackerrank" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="br-line" />
        <div className="footer-shape1">
          <img src="assets/img/shape3.png" alt="_" />
        </div>
        <div className="footer-shape2">
          <img src="assets/img/shape4.png" alt="_" />
        </div>
      </footer>
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                <i className="far fa-copyright" /> Developer by Iosvany Alvarez.
              </p>
            </div>
            <div className="col-lg-6 col-md-6">
              <ul>
                <li>
                  <a href="_">2021</a>
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
