import React from "react";
import home from "../home.css";

import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <div className="mainContainer">
        <Slider className="slider" />
      </div>
      <hr className="line" />
      <div className="continer">
        <div className="hero">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
            alt="card"
          />
          <p className="icon-name">Credit Card</p>
          <div className="vl"></div>
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/1611/1611179.png"
            alt="card"
          />
          <p className="icon-name">Saving Account</p>
          <div className="vl"></div>
          <img
            className="icon"
            src="https://cdn-icons.flaticon.com/png/512/924/premium/924961.png?token=exp=1646565098~hmac=5c6ba5babcb5aca0bee5a8c584780b32"
            alt="card"
          />
          <p className="icon-name">Branches</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
