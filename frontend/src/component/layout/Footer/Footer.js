import React, { Fragment } from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import logo from "../../../images/Logogo.png";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import "./Footer.css";

const Footer = () => {
  return (
    <Fragment>
    <footer id="footer">
      
        <div className="rightFooter">
        <h4>Follow Me</h4>
        
        <a href="https://www.instagram.com/_sarthak_kashyap/?hl=en"><InstagramIcon/></a>
        <a href="https://www.facebook.com/sarthak.singhrajput.14"><FacebookIcon/></a>
        <a href="https://www.youtube.com/c/LordHuron/videos"><YouTubeIcon/></a>
        </div>
        <div className="midFooter">
        <img src={logo} alt="ECOMMERCEHUT" />

        </div>

        <div className="leftFooter">
        <h4>Contact Me</h4>
        
        <a href="mailto:sarthakkashyap190@gmail.com"><ContactMailIcon/></a>
        </div>
        
        
        </footer>
        <div className="copyright"><p>Copyrights 2022 &copy; SarthakSingh</p></div>
        </Fragment>
  );
};

export default Footer;
