import React from "react";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";

import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu para todes" />
      <h1 className="headtext__cormorant">Especial del dia</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Vinos & Cervezas</p>
        <div className="app__specialMenu_menu_items">
          {data.pizza.map((pizza, index) => (
            <MenuItem key={pizza.title + index} title={pizza.title} price={pizza.price} tags={pizza.tags} />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="" />
      </div>
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop: '15px'}}>
            <button type="button" className="custom__button">Ver Más</button>
    </div>
  </div>
);

export default SpecialMenu;
