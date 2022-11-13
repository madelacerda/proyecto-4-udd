import React from "react";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Sobre Nosotros</h1>
        <img src={images.spoon} alt="" className="spoon_img" />
        <p className="p__opensans">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Etiam Sed
          Placerat Est. Nulla Facilisi. Sed Ut Lorem Vitae Libero Volutpat.
        </p>
        <button type="button" className="custom__button">
          Más
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt=""/>
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestra Historia</h1>
        <img src={images.spoon} alt="" className="spoon_img" />
        <p className="p__opensans">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Etiam Sed
          Placerat Est. Nulla Facilisi. Sed Ut Lorem Vitae Libero Volutpat.
        </p>
        <button type="button" className="custom__button">
          Más
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
