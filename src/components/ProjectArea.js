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
            <a href="https://wilmaalbacal.com/">
              <img src="assets/img/projects/1.jpg" alt="img" />
            </a>
            <div className="projects-content">
              <h3>
                <a href="https://wilmaalbacal.com/">Portafolio Composer Wilma Alba Cal</a>
              </h3>
              <span>PHP| HTML5 | JQUERY</span>
            </div>
          </div>
          <div className="single-projects-box">
            <a href="https://www.wilmaalbacal.com/blog/">
              <img src="assets/img/projects/2.jpg" alt="img" />
            </a>
            <div className="projects-content">
              <h3>
                <a href="https://www.wilmaalbacal.com/blog/">Blog Composer Wilma Alba Cal</a>
              </h3> 
              <span>WORDPRESS |PHP | JQUERY</span>
            </div>
          </div>
          <div className="single-projects-box">
            <a href="#project">
              <img src="assets/img/projects/3.jpg" alt="img" />
            </a>
            <div className="projects-content">
              <h3>
                <a href="#project"> SISTALLER || Workshop Management System </a>
              </h3>
              <span>PHP | CODEIGNITER | BOOTSTRAPS | JQUERY </span>
            </div>
          </div>
          <div className="single-projects-box">
          <a href="#project">
              <img src="assets/img/projects/4.jpg" alt="img" />
            </a>
            <div className="projects-content">
              <h3>
                <a href="#project">MovieDB | </a>
              </h3>
              <span>FLUTTER || API || IOS & ANDROID</span>
            </div>
          </div>
          <div className="single-projects-box">
            <a href="#project">
              <img src="assets/img/projects/5.jpg" alt="img" />
            </a>
            <div className="projects-content">
              <h3>
                <a href="#project">QRCODE || READER QR CODE </a>
              </h3>
              <span>FLUTTER || API GOOGLE MAPS || IOS & ANDROID </span>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ProjectArea
