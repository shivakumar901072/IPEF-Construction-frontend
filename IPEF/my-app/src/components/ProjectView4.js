import React from 'react';
import './ProjectView4.css';

function ProjectView4() {
    return(
        <div>
         
    <div >    
    <img class="bgi1" src="./images/projectImages/apartment.jpeg" alt=""></img>
    </div>
        
	<section>
			<div>
				<h2 className="heads">Floor plans</h2>
				</div>
		<div class="row">

  <div class="column">
    <img class="gallery" src="./images/floorplans/fp1.jpg" alt="Snow" ></img>
  </div>
  <div class="column">
    <img class="gallery" src="./images/floorplans/fp2.jpg" alt="Forest" ></img>
  </div>
  <div class="column">
    <img  class="gallery" src="./images/floorplans/fp3.jpg" alt="Mountains" ></img>
  </div>
</div>
		</section>
					
	       
		  
			   <div>
				   <h2 className="heads">Amenities</h2>
				   <img className="amenities" src="./images/Amenities.png" alt=""></img>
			   </div>
		  
			


 
			   <section>
			<div>
				<h2 className="heads"> Construction Progress</h2>
				</div>
		<div class="row">

  <div class="column">
    <img class="gallery" src="./images/constructionProgress/Image_1.jpg" alt="Snow" ></img>
  </div>
  <div class="column">
    <img class="gallery" src="./images/constructionProgress/Image_2.jpg" alt="Forest" ></img>
  </div>
  <div class="column">
    <img  class="gallery" src="./images/constructionProgress/Image_3.jpg" alt="Mountains" ></img>
  </div>
</div>
		</section>
      </div>
    );

}

export default ProjectView4;