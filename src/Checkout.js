import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2019/05/kaguya-sample-ad-banner.png"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {/*Item */}
          {/*Item */}
          {/*Item */}
          {/*Item */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
