import React from "react";
import logo from "./images/logo.svg";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="links">
          <img src={logo} alt="" />
          <div className="link">
            <p className="sss">About</p>
            <p>careers</p>
            <p>events</p>
            <p>products</p>
            <p>support</p>
          </div>
        </div>
        <div className="social-icons-container">
          <div className="social-icons">
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
          <p className="copyright">© 2021 Loopstudios. All rights reserved</p>
        </div>
      </div>
    </section>
  );
};
