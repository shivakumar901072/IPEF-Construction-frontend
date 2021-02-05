import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <div>
        <img
          className="bg-img"
          src="./images/bg-image.jpg"
          alt=""
        ></img>
      </div>
      <section>
        <h1 class="head" >Get In Touch With Us</h1>
        <div class="row">
          <div class="column-form" style={{ backgroundColor: "white" }}>
            <h3 className="address">Address: </h3>
            <div className="address-content">
              <ul className="contact_details ">
                <li class="addtext">
                  <i className=""></i> Flat No:103,
                  Abhinandan Jewel Apartments,Beside
                  SBI Bank, Manikonda,Hyderabad-500089.
                </li>
                <li className="addtext">
                  <i className="fa fa-phone font-24"></i> 98493 16004,
                  08413-485272
                </li>
                <li>
                  <i className="addtext"></i>{" "}
                  info@IPEFconstructions.com
                </li>
              </ul>
            </div>
          </div>

              <div>
              <a href="Login"><span class="baton">Get a Quote!!!</span></a>
              </div>
        </div>
      </section>
      
      <div id="map">
        <h2 class="head">
          Google Map Address
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6148.427782586875!2d78.33900689343709!3d17.42491307519855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1609706004835!5m2!1sen!2sin"
          width="100%"
          height="450"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  );
}
export default Contact;