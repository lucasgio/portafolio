import React from "react";

function AboutArea({id}) {
  return (
    <section key={id} id="about" className="about-area ptb-80 bg-black">
      <div className="container">
        <div className="section-title">
          <span>About Me</span>
          <div className="bar" />
        </div>
        <div className="overview-box">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <i className="flaticon-quality" />
                <h3>Soft Skills</h3>
                <div className="bar" />
                <p>
                My skills are based on overcoming them. I like the dedication towards achieving a clean code in the projects where I participate..
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="skills-list">
                <div className="skill-item">
                  <div className="skill-header">
                    <h4 className="skill-title">Team worker</h4>
                    <div className="skill-percentage">
                      <div className="count-box">
                        <span
                          className="count-text"
                          data-speed={2000}
                        >
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div className="bar progress-line" data-width={100} />
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <h4 className="skill-title">Resposable</h4>
                    <div className="skill-percentage">
                      <div className="count-box">
                        <span
                          className="count-text"
                          data-speed={2000}
                        >
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div className="bar progress-line" data-width={100} />
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <h4 className="skill-title">Leadership</h4>
                    <div className="skill-percentage">
                      <div className="count-box">
                        <span
                          className="count-text"
                          data-speed={2000}
                        >
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div className="bar progress-line" data-width={100} />
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <h4 className="skill-title">Motivation</h4>
                    <div className="skill-percentage">
                      <div className="count-box">
                        <span
                          className="count-text"
                          data-speed={2000}
                        >
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div className="bar progress-line" data-width={100} />
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                <div className="skill-item">  
                  <div className="skill-header">
                    <h4 className="skill-title">Comunication</h4>
                    <div className="skill-percentage">
                      <div className="count-box">
                        <span
                          className="count-text"
                          data-speed={2000}
                        >
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="bar-inner">
                      <div className="bar progress-line" data-width={100} />
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
                <h3>Download</h3>
                <div className="bar" />
                  <a href="/assets/Iosvany_Alvarez_CV_ENG.pdf" download="" className="default-btn white-color-btn">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>  
        </div>
    </section>
  );
}

export default AboutArea;
