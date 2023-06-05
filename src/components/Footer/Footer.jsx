import React from "react";
import "./Footer.scss";
import facebook from "../../assets/social/facebook-white.svg";
import twitter from "../../assets/social/twitter-white.svg";
import instagram from "../../assets/social/instagram-white.svg";
import appstore from "../../assets/store/app-store.svg";
import playstore from "../../assets/store/play-store.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <ul>
          <li>
            <a href="http://www.facebook.com">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="http://www.twitter.com">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="http://www.instagram.com">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
        </ul>
      </div>
      <p className="footer-made-by">Made with ❤️ by Fran</p>
      <div className="footer-stores">
        <ul>
          <li>
            <a href="http://www.apple.com">
              <img src={appstore} alt="appstore" />
            </a>
          </li>
          <li>
            <a href="http://www.google.com">
              <img src={playstore} alt="playstore" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
