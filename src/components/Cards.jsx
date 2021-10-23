import React from 'react';
import Card from './Card';
import styles from "./Cards.module.css";

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (
  <div className={styles.cards}>
    {cities.map((city) => (
      <Card
    key = {city.id}
    name={city.name}
    min={city.main.temp_min}
    max={city.main.temp_max}
    img={city.weather[0].icon}
    onClose={() => alert(city.name)}
    />
    ))}
  </div>
    );
};