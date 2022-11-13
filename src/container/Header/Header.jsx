import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Header.css";

function Header(){
  return(
    <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="la verdadera pizza napolitana" />
      <h1 className="app_header-h1">La clave para comer Pizza</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
        placerat est. Nulla facilisi. Sed ut lorem vitae libero volutpat.
      </p>
      <button type="button" className="custom__button">Mira nuestro Menu!</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="" />
    </div>
  </div>
  )
}


export  {Header};
