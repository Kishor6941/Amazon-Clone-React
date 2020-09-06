import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./CSS/CheckoutProduct.css";
const CheckoutProduct = ({ id, title, image, price, rating }) => {
  return (
    <div className="checkoutproduct">
      <img src={image} alt="" />
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
        <button>Remove Item from Cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
