import React from 'react';



const NavigationBar = ({id}) => {
    return (

            <nav  key= {id} className="navbar navbar-expand-lg navbar-light bg-black">
              <div className="container">
                <a className="navbar-brand" href="index.html"><img src="./assets/img/logo192.png" alt="_" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#services">Technology</a></li>
                    <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">Information</a></li>
                  </ul>
                </div>
              </div>
            </nav>


           
    
    )
}

export default NavigationBar;
