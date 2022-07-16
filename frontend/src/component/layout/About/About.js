import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from '@material-ui/icons/Facebook';
import logo from "../../../images/Founder.jpg";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/_sarthak_kashyap/?hl=en";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={logo}
              alt="Sarthak Kashyap"
            />
            <Typography>Sarthak Kashyap</Typography>
            <Button onClick={visitInstagram} color="primary">
              Talk with me on Instagram
            </Button>
            <span>
              This is an extensive MERN Stack based Ecommerce website built by SARTHAK KASHYAP.
              You can browse through all categories of products, add them to your cart and order them.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">My Contact</Typography>
            <a
              href="https://www.facebook.com/sarthak.singhrajput.14"
              target="blank"
            >
              <FacebookIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/_sarthak_kashyap/?hl=en" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
