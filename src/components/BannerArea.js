import React from 'react'


const BannerArea = props => {

  const name = "Iosvany Alvarez";
  const dev  = "Full Stack Developer";
  const text = `
    Full Stack Developer. I love working on projects, I am positive, responsible, adaptable, and a team worker.
    I am open to relocating to discover new challenges and contribute my skills and knowledge. 
    I have experience in React.js - Node.js - Flutter (Android & iOS native app development). 
  `;

    return (

            <div id="home" className="main-banner bg-black">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="banner-content">
                      <h5>Hello I'm</h5>
                      <h1>{name}</h1>
                      <span>{dev}</span>
                      <p>{text}</p>
                      <div className="social">
                        <ul>
                          <li><a href="https://twitter.com/ios_devpy91?s=09" rel="noreferrer" target="_blank"><i className="fab fa-twitter" /></a></li>
                          <li><a href="https://github.com/lucasgio/" rel="noreferrer" target="_blank"><i className="fab fa-github-square" /></a></li>
                          <li><a href="https://www.linkedin.com/in/iosvany-alvarez-7570871b9/?locale=en_US" rel="noreferrer" target="_blank"><i className="fab fa-linkedin" /></a></li>
                          <li><a href="https://www.instagram.com/iosvanyalvarez/" rel="noreferrer" target="_blank"><i className="fab fa-instagram" /></a></li>
                          <li><a href="https://www.hackerrank.com/mikaelosoltes_91" rel="noreferrer" target="_blank"><i class="fab fa-hackerrank" /></a></li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

    )
}



export default BannerArea
