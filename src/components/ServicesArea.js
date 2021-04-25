import React from "react";

const ServicesArea = ({id}) => {
  return (
    <section key={id} className="featured-services-area bg-black">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-featured-services-box">
              <div className="icon">
                <i className="fab fa-html5" />
              </div>
              <h3>HTML5</h3>
              <div className="bar" />
              <p>
              Layout with web pages with static and dynamic content.
              </p>
              <div className="shape-img">
                <img src="assets/img/shape1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-featured-services-box">
              <div className="icon">
                <i className="fab fa-css3" />
              </div>
              <h3>CSS</h3>
              <div className="bar" />
              <p>
              Design of web pages with adaptable user interfaces and easy to understand.
              </p>
              <div className="shape-img">
                <img src="assets/img/shape1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
            <div className="single-featured-services-box">
              <div className="icon">
                <i className="fab fa-js-square" />
              </div>
              <h3>JAVASCRIPT</h3>
              <div className="bar" />
              <p>
              Programming a clean and scalable logic in client side.
              </p>
              <div className="shape-img">
                <img src="assets/img/shape1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-featured-services-box">
              <div className="icon">
                <i className="fab fa-react" />
              </div>
              <h3>REACT.JS</h3>
              <div className="bar" />
              <p>
              Development of web applications with a magnificent and powerful library.
              </p>
              <div className="shape-img">
                <img src="assets/img/shape1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-featured-services-box">
              <div className="icon">
                <i className="fab fa-node-js" />
              </div>
              <h3>NODE.JS</h3>
              <div className="bar" />
              <p>
              Creation of applications in scalable and maintainable server environments.
              </p>
              <div className="shape-img">
                <img src="assets/img/shape1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
            <div className="single-featured-services-box">
              <div className="icon">
                <i className="fab fa-php" />
              </div>
              <h3>PHP</h3>
              <div className="bar" />
              <p>
              Creation of dynamic sites with a variety of frameworks.
              </p>
              <div className="shape-img">
                <img src="assets/img/shape1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesArea;
