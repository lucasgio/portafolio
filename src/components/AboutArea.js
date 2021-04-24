import React from "react";

function AboutArea() {
  return (
    <section id="about" className="about-area ptb-80 bg-black">
      <div className="container">
        <div className="section-title">
          <span>About Me</span>
          <h2>Leading the way in Creative Digital Marketing</h2>
          <div className="bar" />
        </div>
        <div className="overview-box">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <i className="flaticon-quality" />
                <h3>Skills</h3>
                <div className="bar" />
                <p>
                  We provide marketing services to startups and small businesses
                  to looking for a partner of their digital media, design &amp;
                  development, lead generation and communications requirements.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="skills-list">
                <div className="skill-item">
                  <div className="skill-header">
                    <h4 className="skill-title">SEO, SEM &amp; SMM</h4>
                    <div className="skill-percentage">
                      <div className="count-box">
                        <span
                          className="count-text"
                          data-speed={2000}
                          data-stop={95}
                        >
                          0
                        </span>
                        %
                      </div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div className="bar progress-line" data-width={95} />
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <h4 className="skill-title">Content Writing</h4>
                    <div className="skill-percentage">
                      <div className="count-box">
                        <span
                          className="count-text"
                          data-speed={2000}
                          data-stop={90}
                        >
                          0
                        </span>
                        %
                      </div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div className="bar progress-line" data-width={90} />
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <h4 className="skill-title">Affiliate Marketing</h4>
                    <div className="skill-percentage">
                      <div className="count-box">
                        <span
                          className="count-text"
                          data-speed={2000}
                          data-stop={85}
                        >
                          0
                        </span>
                        %
                      </div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div className="bar progress-line" data-width={85} />
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <h4 className="skill-title">Keyword Research</h4>
                    <div className="skill-percentage">
                      <div className="count-box">
                        <span
                          className="count-text"
                          data-speed={2000}
                          data-stop={90}
                        >
                          0
                        </span>
                        %
                      </div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div className="bar progress-line" data-width={90} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overview-box">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <i className="flaticon-briefcase" />
                <h3>Experience</h3>
                <div className="bar" />
                <p>
                  We provide marketing services to startups and small businesses
                  to looking for a partner of their digital media, design &amp;
                  development, lead generation and communications requirements.
                </p>
                <div className="btn-box">
                  <a href="#" className="default-btn">
                    Hire Me
                  </a>
                  <a href="#" className="default-btn white-color-btn">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="experience-list">
                <ul>
                  <li>
                    <span>Primary Group, Inc.</span>
                    Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor
                    incididunt ut labore et dolore.
                  </li>
                  <li>
                    <span>EnvyTheme Co.</span>
                    Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor
                    incididunt ut labore et dolore.
                  </li>
                  <li>
                    <span>Envato Co.</span>
                    Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor
                    incididunt ut labore et dolore.
                  </li>
                  <li>
                    <span>Themeforest Co.</span>
                    Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor
                    incididunt ut labore et dolore.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutArea;
