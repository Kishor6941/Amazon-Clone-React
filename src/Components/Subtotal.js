import React from "react";
import "./CSS/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStatevalue } from "../Context API/StateProvider";
import { getBasketTotal } from "../Context API/Reducer/reducer";
const Subtotal = () => {
  const [{ basket }, dispatch] = useStatevalue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):<strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
