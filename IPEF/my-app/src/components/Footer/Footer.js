import React from 'react';
import './Footer.css';


function Footer() {
  return ( 
      <div className="footer">
      <div className = "container-fluid mt-4" >
          <div className="row">
              <div className = "col-md-2"></div>
              <div className="col-md-8 text-center mt-3">
                  <img src="./images/facebook.png" alt="facebook" ></img>
                      <img src="./images/instagram.png" alt="instagram" ></img>
                          <img src="./images/twitter.png" alt="twitter"></img>
                          <div className = "col-md-2"></div>

                </div>
                <div className="row mx-0 px-0 text-center mt-4 ">
                    <div className="col-3"></div>
                    <div className="col-md-6">
                        <a href="/about" > 
                        <div className="col ">Privacy Policy | Terms and Conditions | About IPEF Constructions</div>
                        </a>
                        <span className="col">  </span>
                        <span className="col"> </span>
                    </div>
                     <div className="col-3"></div>
                </div>
                <div className="row text-center" >
                    <p className="text-center"> © 2020 IPEF Constructions. All Rights Reserved. </p>
                </div>
          </div>
      </div>
    </div>
      
      
      
    )
  }
 
 

export default Footer;