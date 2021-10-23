import React from "react";
<<<<<<< Updated upstream
=======
import CardTemp from "./CardTemp";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
>>>>>>> Stashed changes

export default function Card(props) {
  const { max, min, name, img, onClose, id} = props; //destructuring de cosas pasadas por props
  // acá va tu código
  return (
<<<<<<< Updated upstream
    <div key={id}>
      <span className="cityname">{name}
      <button onClick={onClose}>X</button>
=======
    <div key={id} className={styles.card}>
      <span className={styles.cityName}>{name}
      <button className={styles.closeButton} onClick={handleOnClose}>X</button>
>>>>>>> Stashed changes
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
