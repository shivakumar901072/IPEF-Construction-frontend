import React from 'react';

import "./Projects.css";

function Projects() {
  return (
    <div>
      <div>
        <img className="bg-img" src="./images/bg-image.jpg" alt="" ></img>
    </div>
    <section>
		
		   	<h1>Our Projects</h1>

			   <h3> On-going: </h3>

			   <div className="row-projects">

			   <div className="column-projects" style={{backgroundColor: "white"}}>
			<a href="ProjectView1" className="img-container">
           
			  <img    className="site" src="./images/projectImages/bhooja_1.jpg" alt=""></img>
			</a>
			<div className="inner-div">
				   <h5>Project Name: </h5>
				   <a href="ProjectView1" className="title">Pranathi Eesha</a>
				   
			<p><i className="fa fa-map-marker"></i><h4>Address:</h4> 
              <span>
               Plot No.94,95, Alkapuri Colony, Manikonda, Hyderabad.              			
            	</span>
			</p>
				 <h4 className="no_br_btm">Configurations: </h4>
                  <p className="add">2 &amp; 3 BHK</p>
                  <h4 className="no_br_btm">SFT</h4>
                  <p className="add"> 1240 to 1550</p>
				      	
		            </div>
					<div>
					<a href="ProjectView1" class="btn more-link">More</a>
					</div>
			  </div>

			   {/* over */}


			   <div className="column-projects" style={{backgroundColor: "white"}}>
			<a href="ProjectView2" className="img-container">
           
			  <img    className="site" src="./images/projectImages/villa.jpeg" alt=""></img>
			</a>
			<div className="inner-div">
				   <h5>Project Name: </h5>
				   <a href="ProjectView2" className="title">Pranathi Eesha</a>
				   
			<p><i className="fa fa-map-marker"></i><h4>Address:</h4> 
              <span>
               Plot No.94,95, Alkapuri Colony, Manikonda, Hyderabad.              			
            	</span>
			</p>
				 <h4 className="no_br_btm">Configurations: </h4>
                  <p className="add">2 &amp; 3 BHK</p>
                  <h4 className="no_br_btm">SFT</h4>
                  <p className="add"> 1240 to 1550</p>
				      	
		            </div>
					<div>
					<a href="ProjectView2" class="btn more-link">More</a>
					</div>
			  </div>

			   {/* over */}


			   <div className="column-projects" >
			<a href="ProjectView3" className="img-container">
           
			  <img    className="site" src="./images/projectImages/victoria.jpg" alt=""></img>
			</a>
			<div className="inner-div">
				   <h5>Project Name: </h5>
				   <a href="ProjectView3" className="title">Pranathi Eesha</a>
				   
			<p><i className="fa fa-map-marker"></i><h4>Address:</h4> 
              <span>
               Plot No.94,95, Alkapuri Colony, Manikonda, Hyderabad.              			
            	</span>
			</p>
				 <h4 className="no_br_btm">Configurations: </h4>
                  <p className="add">2 &amp; 3 BHK</p>
                  <h4 className="no_br_btm">SFT</h4>
                  <p className="add"> 1240 to 1550</p>
				      	
		            </div>
			  </div>
			  <div>
			  <a href="ProjectView3" class="btn more-link">More</a>
					</div>
		</div>
					



	
		
		   

			   <h3> Completed: </h3>

			   <div className="row-projects">

			   <div className="completed">
			<a href="ProjectView4" className="img-container">
           
			  <img    className="site" src="./images/projectImages/apartment.jpeg" alt=""></img>
			</a>
			<div className="inner-div">
				   <h5>Project Name: </h5>
				   <a href="ProjectView4" className="title">Pranathi Eesha</a>
				   
			<p><i className="fa fa-map-marker"></i><h4>Address:</h4> 
              <span>
               Plot No.94,95, Alkapuri Colony, Manikonda, Hyderabad.              			
            	</span>
			</p>
				 <h4 className="no_br_btm">Configurations: </h4>
                  <p className="add">2 &amp; 3 BHK</p>
                  <h4 className="no_br_btm">SFT</h4>
                  <p className="add"> 1240 to 1550</p>
				      	
		            </div>
			  </div>

			<div>
			<a href="ProjectView4" class="btn more-link">More</a>
					</div>

		</div>
					
	</section>	




	
</div>
   
  );
}

export default Projects;

