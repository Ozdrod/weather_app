import React from "react";
import CardTemp from "./CardTemp";

export default function Card(props) {
  const { max, min, name, img, onClose, id} = props; //destructuring de cosas pasadas por props
  // acá va tu código
  function handleOnClose() {
    if(typeof onClose === "function") onClose();
  }
  return (
    <div key={id}>
      <button onClick={handleOnClose}>X</button>
      <span className="cityname">{name}
      </span>
      <CardTemp label="Min" value={min}/>
      <CardTemp label="Max" value={max}/>
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="icono del clima"
      />
    </div>
  );
};