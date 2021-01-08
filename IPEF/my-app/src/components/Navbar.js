import React from 'react';
import './Navbar.css';

 const NavigationBar = () => (
  <div>
   <div className="topnav">

   <a href="/">IPEF constructions </a> 
      
  
   <div className="topnav-right">
   <a href="/" class="active">Home</a>
   <a href="projects" >Projects</a>
     <a href="about">About</a>
     <a href="contact">Contact</a>
   <a href="Login">Log In</a>
   </div>
   </div>
 
  </div>
  
 )



export default NavigationBar;