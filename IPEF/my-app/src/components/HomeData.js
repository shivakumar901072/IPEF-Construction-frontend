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
        <h1 className="heading2">Our Services</h1>
        <div className="description2">
        <p><big>Supporting architects, engineers, technicians, builders, and government bodies, IPEF Constructions team provides precise, time-bound, and detailed Services adhere to all leading international standards, codes, and practices. Our team of structural engineers, architects, and interior designers come with deep domain expertise and are proficient in all leading technologies to ensure qualitative services.</big></p>
        </div>
        <div>
        <h2 className="heading2">Structural Design</h2>
        <a href="Projects"><img class="services" src="./images/Structure.jpeg" alt=""></img></a>
        </div>
        <div>
        <h2 className="heading2">Architects Design</h2>
        <a href="Projects"><img class="services" src="./images/Ar.jpeg" alt=""></img></a>
        </div>
        <div>
        <h2 className="heading2">Interior Design</h2>
        <a href="Projects"><img class="services" src="./images/Interior.jpeg" alt=""></img></a>
        </div>
      </section>
    </div>
  );
}
export default HomeData;