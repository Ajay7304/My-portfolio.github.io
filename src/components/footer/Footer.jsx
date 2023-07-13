import React from "react";
import "./footer.css";
import { LiaFacebook } from "react-icons/lia";
import { RiInstagramFill } from "react-icons/ri";
import { RxTwitterLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Azoy
      </a>

      <ul className="permalinks">
        <li>
          <a href="#"></a>Home
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank">
          <LiaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank">
          <RiInstagramFill />
        </a>
        <a href="https://twitter.com" target="_blank">
          <RxTwitterLogo />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Azoy. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
