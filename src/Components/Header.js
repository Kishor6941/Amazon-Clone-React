import React from "react";
import "./CSS/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStatevalue } from "../Context API/StateProvider";
const Header = () => {
  const [{ basket } /*state*/] = useStatevalue();
  return (
    <nav className="header">
      {/*logo left*/}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
        />
      </Link>
      {/* search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 Links right */}
      <div className="header__nav">
        {/* 1st link */}

        <Link to="/login" className="header__link">
          <div className="header_option">
            <span className="header__optionLineOne">Hello Kishor</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        {/* 2st link */}
        <Link to="/" className="header__link">
          <div className="header_option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>

        {/* 3st link */}
        <Link to="/" className="header__link">
          <div className="header_option">
            <span className="header__optionLineOne">Your </span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* 4th Link */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/*  Shopping basket Icon */}
            <ShoppingBasketIcon />
            {/* number of item in basket */}
            <span className="header__optionLineTwo header__Basketcount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
