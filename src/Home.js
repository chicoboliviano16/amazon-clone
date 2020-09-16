import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/IMDbTV/gateway/theoutpost/GW_DHERO_TheOutpost_1500x600_EN-US_5538_v2._CB407273330_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row"></div>

        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
