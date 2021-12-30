import React from "react";
import { Slide, Fade } from "react-awesome-reveal";

export const Creations = () => {
  return (
    <section className="creations-container">
      <div className="creations-wrapper">
        <h1 className="creations-header">OUR CREATIONS</h1>
        <Fade triggerOnce="true">
          <div className="our-creations">
            <div className="creations deep-earth">
              <h1>DEEP EARTH</h1>
            </div>
            <div className="creations night-arcade">
              <h1>NIGHT ARCADE</h1>
            </div>
            <div className="creations soccer-team">
              <h1>SOCCER TEAM VR</h1>
            </div>
            <div className="creations grid">
              <h1>THE GRID</h1>
            </div>
            <div className="creations above">
              <h1>FROM UP ABOVE VR</h1>
            </div>
            <div className="creations borealis">
              <h1>POCKET BOREALIS</h1>
            </div>
            <div className="creations curiousity">
              <h1>THE CURIOUSITY</h1>
            </div>
            <div className="creations fisheye">
              <h1>MAKE IT FISHEYE</h1>
            </div>
            <button className="see-all"> SEE ALL</button>
          </div>
        </Fade>
      </div>
    </section>
  );
};
