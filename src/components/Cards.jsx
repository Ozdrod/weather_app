import React from 'react';
import Card from './Card';

export default function Cards({cities, onRemove}) {
  return (
  <div >
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