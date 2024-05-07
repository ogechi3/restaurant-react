import React from 'react';
import { FooterOverlay, Newsletter } from "../../components";
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'
 
import { SubHeading } from "../../components";
import { images } from "../../constants";

import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9W 53rd st, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344 123</p>
        <p className="p__opensans">+1 212-344 123</p>
        
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer-logo" />
        <p className="p__opensans">
          The best way to find yourself is to lose yourself in the service of
          others
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-friday</p>
        <p className="p__opensans">8:00am-12:00am</p>
        <p className="p__opensans">Saturday-Sunday</p>
        <p className="p__opensans">7:00am-11:00pm</p>
      </div>
    </div>
    <div className="footer__copyright">2024 Gericht.All Rights Reserved</div>
  </div>
);

export default Footer;
