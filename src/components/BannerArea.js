import React from 'react'


const BannerArea = ({id}) => {

  const name = "Iosvany Alvarez";
  const dev  = "Full Stack Developer";
  const text = `
    I love working on projects, I am positive, responsible, adaptable, and a team worker.
    I am open to relocating to discover new challenges and contribute my skills and knowledge. 
    I have experience in React.js - Node.js - Flutter (Android & iOS native app development). 
  `;

    return (

            <div key={id} id="home" className="main-banner bg-black">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="banner-content">
                      <h5>Hello I'm</h5>
                      <h1>{name}</h1>
                      <span>{dev}</span>
                      <p>{text}</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                      <div className="banner-content">
                        <pre className="line-1 anim-typewriter"> const grettings =  </pre>
                        <pre className="line-2 anim-typewriter2"> Hello, World!; </pre>  
                      </div>
                  </div>
                </div>

              </div>
            </div>

    )
}



export default BannerArea
