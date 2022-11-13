import React from "react";
import SubHeading from "../SubHeading/SubHeading";

import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Noticias" />
      <h1 className="headtext__cormorant">
        Suscribete a nuestro noticiero
      </h1>
      <p className="p__opensans">y no te pierdas las ofertas</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="ingresa tu email" />
      <button className="custom__button">Suscribete</button>
    </div>
  </div>
);

export default Newsletter;
