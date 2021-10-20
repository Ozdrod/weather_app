import React from "react";

export default function Card(props) {
  const { max, min, name, img, onClose, id} = props; //destructuring de cosas pasadas por props
  // acá va tu código
  return (
    <div key={id}>
      <span className="cityname">{name}
      <button onClick={onClose}>X</button>
      </span>
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="icono del clima"
      />
      <div>
        <span>Min</span>
        <span>{min}º</span>
        <span>Max</span>
        <span>{max}º</span>
      </div>
    </div>
  );
}
