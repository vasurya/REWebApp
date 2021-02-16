import react from "react";
import "./Home.css";
import Carousel from "./Carousel";

function Home() {
  return (
    <div className="home ">
      <section id="uno_section">
        <div className="container">
          <img id="brand_name" src="brand_name.png"></img>
          <h1>
            Empowering
            <br />
            Customers
            <br />
            With a future vision.
          </h1>
        </div>
      </section>
      <section id="dos_section">
        <div className="container">
          <p className="about_us_home">
            With over two decades of experience and 2000+ customers, Retail Experts offers a cluster of inventory management and Point-of-Sale solutions for all your needs.
          </p>
          <a href="/products">
            <button type="button" className="btn btn-outline-primary btn-lg">
              Know More
            </button>
          </a>
          <a href="/contact">
            <button type="button" className="btn btn-success btn-lg">
              Contact Us
            </button>
          </a>
          <br />
          <br />
        </div>
      </section>
      <Carousel />
    </div>
  );
}

export default Home;
