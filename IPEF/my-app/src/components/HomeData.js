import React from 'react';
import './HomeData.css';


function HomeData () {
  return (
    <div>
      <section className="text-section">
      <h2 className="heading">Welcome to IPEF Constructions</h2>
      <div className="description">
      <p><big>We are a group of young professionals, and building homes with great value for our clients is our inspiration. Striking balance between value and quality is an utmost priority to us. We are driven by a vision of creating sustainable communities for our clients in terms of living, spaces and amenities. Adhering to the highest quality and executing our projects with great precision and care is our job...</big></p>
        </div>
      </section>

        <section className="">
        <div>
      <h1 className="heading2">Our Business</h1>
      <div className="description2">
      <p><big>IPEF Constructions leads in nearly every sphere of construction business. Serving customers is our utmost proiority. we Explore our offerings by Industry as well as by Business.</big></p>
      </div>
      <h2 className="heading2">Construction</h2>
      <a href="Projects"><img class="services" src="./images/home/Construction.jpeg" alt=""></img></a>
    	</div>
      <div>
      <h2 className="heading2">Real Estate</h2>
      <a href="Projects"><img class="services" src="./images/home/Realestate.jpeg" alt=""></img></a>
    	</div>
      </section>
    </div>
  );
}
export default HomeData;