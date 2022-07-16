import React, { Fragment } from "react";
// import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/Logogo2.png";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FaceIcon from '@material-ui/icons/Face';
import "./Header.css";

// const options = {
//   burgerColorHover: "#eb4034",
//   logo,
//   logoWidth: "20vmax",
//   navColor1: "white",
//   logoHoverSize: "10px",
//   logoHoverColor: "#eb4034",
//   a1Text: "Home",
//   a2Text: "Products",
//   a3Text: "Contact",
//   <ReactNavbar {...options} />
//   a4Text: "About",
//   a1Url: "/",
//   a2Url: "/products",
//   a3Url: "/contact",
//   a4Url: "/about",
//   a1Size: "1.3vmax",
//   a1Color: "rgba(35, 35, 35,0.8)",
//   nav1justifyContent: "flex-end",
//   nav2justifyContent: "flex-end",
//   nav3justifyContent: "flex-start",
//   nav4justifyContent: "flex-start",
//   a1ColorHover: "#eb4034",
//   a1Margin: "1vmax",
//   profileIconUrl: "/login",
//   profileIconColor: "rgba(35, 35, 35,0.8)",
//   searchIconColor: "rgba(35, 35, 35,0.8)",
//   cartIconColor: "rgba(35, 35, 35,0.8)",
//   profileIconColorHover: "#eb4034",
//   searchIconColorHover: "#eb4034",
//   cartIconColorHover: "#eb4034",
//   cartIconMargin: "1vmax",
// };

const Header = () => {
  return (
    <Fragment>
    <div className='Navbar'>
        <div className='Navbar-1'>
          <a href="/">
            <img src={logo} alt="Logo"/>
          </a>
          <a href="/" className="a">Home</a>
          <a href="/products" className="a">Product</a>
          <a href="/contact" className="a">Contact</a>
          <a href="/about" className="a">About</a>
        </div>
        <div className='Navbar-2'>
          <a href="/Search" className="a"> <SearchIcon /> </a>
          <a href="/Cart" className="a"> <ShoppingCartIcon /> </a>
          <a href="/login" className="a"> <FaceIcon /> </a>
        </div>
      </div>
    </Fragment>
    );
};

export default Header;
