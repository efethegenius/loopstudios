import React from "react";
import interactive from "./images/mobile/image-interactive.jpg";
import { Slide, Fade } from "react-awesome-reveal";

export const About = () => {
  return (
    <section className="about-container">
      <div className="about-wrapper">
        <Slide direction="left" triggerOnce="true">
          <img src={interactive} alt="interactive" />
        </Slide>
        <div className="about">
          <Slide direction="right" triggerOnce="true">
            <h1>The leader in interactive VR</h1>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </Slide>
        </div>
      </div>
    </section>
  );
};
