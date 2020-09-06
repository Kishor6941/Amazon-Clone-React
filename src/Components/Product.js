import React from "react";
import "./CSS/Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStatevalue } from "../Context API/StateProvider";
const Product = ({ id, title, price, rating, image }) => {
  const [state, dispatch] = useStatevalue();
  const addToBasket = (e) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
};

export default Product;
