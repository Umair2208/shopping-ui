import React from "react";
import "./Video.css";
import heroImg from "../../assets/images/hero.png";
import { CiPlay1 } from "react-icons/ci";

const HeroBanner = () => {
  return (
    <section className="videoWrap">
      <div className="heroImage">
        <img src={heroImg} alt="Hero" />

        <div className="playButton">
          <div className="circle">
            <CiPlay1 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
