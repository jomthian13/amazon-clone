import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/*Homework */}
              Subtotal ({basket.length} items):
              <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} //Homework
        // value={basket?.reduce((totalCost, item) => totalCost + item.price, 0)} //Homework
        displayType={"text"}
        thousandSeperator={true}
        prefix={"£"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
