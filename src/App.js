import { func } from "prop-types";
import React, {useState} from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";

const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [cities, setCities] = useState([]);

  function handleAddCity(city) {
    setCities((prevCities) => {
      return [city, ...prevCities];
    });
  }

  function handleRemoveCity(cityId) {
    setCities((prevCities) => {
      return prevCities.filter((city) => {
        return cityId !== city.id;
      });
    });
  }

  function onSearch(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          handleAddCity(city);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  return (
    <div className="App">
      <SearchBar onSearch={onSearch} />
      <Cards cities={cities} onRemove={handleRemoveCity}/>
    </div>
  );
}

export default App;
