import React from 'react';
import Card from './Card';
import styles from "./Cards.module.css";

export default function Cards({cities, onRemove}) {
  return (
  <div className={styles.cards}>
    {cities.map((city) => (
      <Card
    key = {city.id}
    name={city.name}
    min={city.min}
    max={city.max}
    img={city.img}
    onClose={() => onRemove(city.id)}
    />
    ))}
  </div>
    );
};