import React from 'react'

function ProjectArea({id}) {
    return (
      <section key={id} id="projects" className="projects-area ptb-80 bg-black">
        <div className="container">
          <div className="section-title">
            <span>Projects</span>
            <h2>Recent Projects</h2>
            <div className="bar" />
          </div>
        </div>
        <div className="projects-slides owl-carousel owl-theme">
          <div className="single-projects-box">
            <a href="_">
              <img src="assets/img/projects/1.jpg" alt="img" />
            </a>
            <div className="projects-content">
              <h3>
                <a href="single-projects.html">Development</a>
              </h3>
              <span>Web / Mobile</span>
            </div>
          </div>
          <div className="single-projects-box">
            <a href="_">
              <img src="assets/img/projects/2.jpg" alt="img" />
            </a>
            <div className="projects-content">
              <h3>
                <a href="single-projects.html">Architecture</a>
              </h3>
              <span>Home / Bridge</span>
            </div>
          </div>
          <div className="single-projects-box">
            <a href="_">
              <img src="assets/img/projects/3.jpg" alt="img" />
            </a>
            <div className="projects-content">
              <h3>
                <a href="single-projects.html">UX/UI Design</a>
              </h3>
              <span>Web / Mobile</span>
            </div>
          </div>
          <div className="single-projects-box">
            <a href="_">
              <img src="assets/img/projects/4.jpg" alt="img" />
            </a>
            <div className="projects-content">
              <h3>
                <a href="single-projects.html">Marketing</a>
              </h3>
              <span>Digital / Affiliate</span>
            </div>
          </div>
          <div className="single-projects-box">
            <a href="_">
              <img src="assets/img/projects/5.jpg" alt="img" />
            </a>
            <div className="projects-content">
              <h3>
                <a href="single-projects.html">Photography</a>
              </h3>
              <span>Digital / Photo</span>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ProjectArea
