import react from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="container">
      <h1 className="contact_us_header">Contact Us</h1>
      <div className="row">
        <div className="col-lg-6 bg-dark text-white contact_content">
          <p>
          Visit us at
             H.No:3-6-640/1, 1st Floor, Beside St.Anthony High School,
            Street No 9, Himayath Nagar, Hyderabad, Telegana, India
            <br />
            Zip Code : 500029
          </p>
          <p>
            Contact us at +91-40-40177875 +91-40-35568035
          </p>
        </div>
        <div className="col-lg-6 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.18129997513!2d78.48663571439997!3d17.40308488806924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c2fd5be725%3A0x43f810c816e1e755!2sRetail%20Experts%20Software%20Private%20Limited!5e0!3m2!1sen!2sin!4v1609245746241!5m2!1sen!2sin"
            width="600"
            height="450"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            className="map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
