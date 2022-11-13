import React from "react";

import "./Reservas.css";

function Reserva(){
  return(
<div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
         RESERVAS ACA!
        </p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="p__cormorant"></p>
      </div>
    </div>
    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: "#AAA" }}>
        
      </p>
    </div>
  </div>
  )
} 
  


export  {Reserva};
