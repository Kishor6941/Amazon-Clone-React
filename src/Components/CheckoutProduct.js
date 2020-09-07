import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./CSS/CheckoutProduct.css";
import { useStatevalue } from "../Context API/StateProvider";
const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStatevalue();
  const removeFromBasket = () => {
    // Remove item from basket

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct__image" src={image} alt="" />
      <div className="checkproduct__info">
        <p className="checkoutprduct__title">{title}</p>
        <p className="checkoutproduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <StarIcon className="rating__star" />
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove Item from Cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
