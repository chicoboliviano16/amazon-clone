import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShopingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      {/*  Logo */}
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      {/*  search bar */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* options after search bar */}
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShopingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
