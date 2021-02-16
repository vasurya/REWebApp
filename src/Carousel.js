import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
function Carousel() {
  let settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplaySpeed: 1000,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="carousel container">
      <h2 className="our_clients"> Our Clients</h2>
      <Slider {...settings}>
        <div>
          <img src="Images/adhinathnew.png" />
        </div>
        <div>
          <img src="Images/balaji.png" />
        </div>
        <div>
          <img src="Images/chermas.png" />
        </div>
        <div>
          <img src="Images/dailymilk.png" />
        </div>
        <div>
          <img src="Images/dasmart.png" />
        </div>
        <div>
          <img src="Images/dff.png" />
        </div>
        <div>
          <img src="Images/dsmart.png" />
        </div>
        <div>
          <img src="Images/efresh.png" />
        </div>
        <div>
          <img src="Images/gshopping.png" />
        </div>
        <div>
          <img src="Images/helapuri.png" />
        </div>
        <div>
          <img src="Images/himalaya.png" />
        </div>
        <div>
          <img src="Images/icrisat.png" />
        </div>
        <div>
          <img src="Images/jaithranew.png" />
        </div>
        <div>
          <img src="Images/kundan.png" />
        </div>
        <div>
          <img src="Images/manamall.png" />
        </div>
        <div>
          <img src="Images/maruthi.png" />
        </div>
        <div>
          <img src="Images/maruthimegamart.png" />
        </div>
        <div>
          <img src="Images/ourstore.png" />
        </div>
        <div>
          <img src="Images/rajguru.png" />
        </div>
        <div>
          <img src="Images/simplexnew.png" />
        </div>
        <div>
          <img src="Images/steel.png" />
        </div>
        <div>
          <img src="Images/superbazar.png" />
        </div>
        <div>
          <img src="Images/usha.png" />
        </div>
        <div>
          <img src="Images/valuemart.png" />
        </div>
        <div>
          <img src="Images/vijayadurga.png" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
