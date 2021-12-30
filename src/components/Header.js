import React from "react";
import logo from "./images/logo.svg";
import hamburger from "./images/icon-hamburger.svg";
import close from "./images/icon-close.svg";
import { Slide } from "react-awesome-reveal";

export const Header = ({ showModal, setShowModal }) => {
  return (
    <section className="hero-container">
      <nav>
        <img src={logo} alt="logo" />
        <img
          src={showModal ? close : hamburger}
          alt="hamburger"
          onClick={() => setShowModal(!showModal)}
          className="menu"
        />
      </nav>

      <Slide triggerOnce="true">
        <div className="hero-text-wrapper">
          <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
        </div>
      </Slide>
    </section>
  );
};
