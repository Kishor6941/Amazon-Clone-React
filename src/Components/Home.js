import React from "react";
import "./CSS/Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
        alt=""
      />
      {/* Product id,title,price, rating, image */}
      <div className="home__row">
        <Product
          id="1234"
          title="Prestige Iris 750 Watt Mixer Grinder with 3 Stainless Steel Jar + 1 Juicer Jar (White and Blue)"
          price={250}
          rating={5}
          image="https://m.media-amazon.com/images/I/61Z4fxBfkVL._AC_UY218_.jpg"
        />

        <Product
          id="12345"
          title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
          price={950}
          rating={5}
          image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123456"
          title="Lenovo Tab M10 Tablet (10.1 inch, 16GB, Wi-Fi + 4G LTE), Slate Black"
          price={13994}
          rating={5}
          image="https://m.media-amazon.com/images/I/61ul3f89uDL._AC_UY218_.jpg"
        />

        <Product
          id="1234567"
          title="Lenovo Ideapad Slim 3i 10th Gen Intel Core i3 14 inch FHD Thin and Light Laptop (4GB/256GB/Windows 10/MS Office/Grey/1.6Kg), 81WD0044IN"
          price={36490}
          rating={5}
          image="https://m.media-amazon.com/images/I/61s7sJEpsVL._AC_UY218_.jpg"
        />

        <Product
          id="12345678"
          title="OPPO A5 2020 (Dazzling White, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers"
          price={11990}
          rating={5}
          image="https://m.media-amazon.com/images/I/71yXShgxvpL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="21"
          title="Lenovo Tab M10 Tablet (10.1 inch, 16GB, Wi-Fi + 4G LTE), Slate Black"
          price={13994}
          rating={5}
          image="https://m.media-amazon.com/images/I/61ul3f89uDL._AC_UY218_.jpg"
        />

        <Product
          id="213"
          title="Men's Slim Fit Side Striped Jeans"
          price={659}
          rating={5}
          image="https://m.media-amazon.com/images/I/81vpHKdGYNL._AC_UL320_.jpg"
        />
        <Product
          id="2134"
          title="by Sklodge Men's Air Wonder Series Mesh Casual Sports Sneakers Shoes for Men & Boys, Walking,Running/Gymwear Shoes for Daily Use"
          price={999}
          rating={5}
          image="https://m.media-amazon.com/images/I/61SpmbCn8lL._AC_UL320_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
