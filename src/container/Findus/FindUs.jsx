import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contacto" />
      <h1 className="headttext__cormorant" style={{ marginBottom: "3rem" }}>
        Contactanos
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          euismod.
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Horario:
        </p>
        <p className="p__opensans">Lunes a Viernes: 10:00am - 09:00pm</p>
        <p className="p__opensans">Sabados y Domingo: 10:00am - 11:00pm</p>
      </div>
      <button className="custom__button" style={{marginTop: "2rem"}}>Ven a vernos!</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="" />
    </div>
  </div>
);

export default FindUs;
