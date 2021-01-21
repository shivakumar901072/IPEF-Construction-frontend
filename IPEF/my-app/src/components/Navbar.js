import React from 'react';
import './Navbar.css';

 const NavigationBar = () => (
  <div>
   <div className="topnav">

   <a href="/">
        <img class="logo" src="./images/logo1.jpeg" alt="logo"></img>
        <span class="tagline">IPEF Constructions<br/>
                  Building Future !!!</span>
      </a> 
  
   <div className="topnav-right">
   <a href="/" class="active">Home</a>
   <a href="projects" >Projects</a>
   <a href="services" >Services</a>
     <a href="about">About</a>
     <a href="contact">Contact</a>
   <a href="Login">Log In</a>
   </div>
   </div>
 
  </div>
  
 )



export default NavigationBar;