import React from "react";
import "./Products.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>🌟 </p>
          <p>🌟 </p>
          <p>🌟 </p>
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/41RTRzndPjL._SCLZZZZZZZ___AC_SY200_.jpg"
        alt=""
      />
      <button>Add To Basket</button>
    </div>
  );
}

export default Product;
