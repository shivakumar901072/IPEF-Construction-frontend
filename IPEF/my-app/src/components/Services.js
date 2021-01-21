import React from 'react';
import './Services.css';


function Services () {
  return (
    <div>
   <div>
        <img className="bg-img" src="https://echopark.com.ua/web/upload/images/loc-img6jpg26042016104524.jpg" alt="" ></img>
    </div>
      <section className="">
      <h1 className="heading2">Our Services</h1>
      <div className="description2">
		<p><big>Supporting architects, engineers, technicians, builders, and government bodies, IPEF Constructions team provides precise, time-bound, and detailed Services adhere to all leading international standards, codes, and practices. Our team of structural engineers, architects, and interior designers come with deep domain expertise and are proficient in all leading technologies to ensure qualitative services.</big></p>
    	</div>
      <div>
      <h2 className="heading2">Structural</h2>
      <a href="Projects"><img class="services" src="./images/services/structural.jpeg" alt=""></img></a>
    	</div>
      <div>
      <h2 className="heading2">Architectural</h2>
      <a href="Projects"><img class="services" src="./images/services/architecture.jpeg" alt=""></img></a>
    	</div>
      <div>
      <h2 className="heading2">Interior</h2>
      <a href="Projects"><img class="services" src="./images/services/interior.jpeg" alt=""></img></a>
    	</div>
      </section>

    </div>
  );
}
export default Services;