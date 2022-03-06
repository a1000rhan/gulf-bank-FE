import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import card1 from "../images/credit card.png";
import card2 from "../images/credit card-red.png";
import card3 from "../images/credit-card-black.png";
import home from "../home.css";
const Slider = () => {
  return (
    <div className="contain">
      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        emulateTouch={true}
        showThumbs={false}
        renderIndicator={false}
        className="carousel"
      >
        <div className="card-contain">
          <img src={card1} alt="card" className="credit-card" />
        </div>
        <div className="card-contain">
          <img src={card2} alt="card" className="credit-card" />
        </div>
        <div className="card-contain">
          <img src={card3} alt="card" className="credit-card" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
