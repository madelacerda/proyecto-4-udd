import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactanos</h1>
        <p className="p__opensans">Barros Arana N° 492, piso 9. Torre Ligure.  Concepción</p>
        <p className="p__opensans">+564114985</p>
        <p className="p__opensans">+569965425</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="" />
        <p className="p__opensans">"Lorem ipsum dolor sit amet."</p>
        <img
          src={images.spoon}
          alt=""
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horario</h1>
        <p className="p__opensans">Lunes a Viernes: 10:00am - 09:00pm</p>
        <p className="p__opensans">Sabados y Domingo: 10:00am - 11:00pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">
        @Desarrollado por Matias de la Cerda .- 2022
      </p>
    </div>
  </div>
);

export default Footer;
