import React from "react";
import CardTemp from "./CardTemp";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Card({ max, min, name, img, onClose, id}) {

  function handleOnClose() {
    if (typeof onClose === "function") onClose();
  }
  return (
    <div key={id} className={styles.card}>
      <span className={styles.cityName}>{name}
      <button className={styles.closeButton} onClick={handleOnClose}>
      <IoCloseCircleOutline />
      </button>
      </span>
      <CardTemp  label="Min" value={min} />
      <CardTemp  label="Max" value={max} />
      <img
       src={`http://openweathermap.org/img/wn/${img}@2x.png`}
       alt="icono del clima"
     />
    </div>
  );
}
Card.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func,
 };