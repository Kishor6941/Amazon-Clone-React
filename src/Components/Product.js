import React from "react";
import "./CSS/Product.css";
import StarIcon from "@material-ui/icons/Star";
const Product = ({ id, title, price, rating, image }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <StarIcon className="rating__star" />
            ))}
        </div>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} alt="Product_Image" />
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
