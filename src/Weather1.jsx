import { useState, useEffect, React } from "react";

const Weather1 = () => {
  const [weather, setWeather] = useState({});

  const [city, setCity] = useState("");

  const [load, setLoad] = useState("");

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b71be8aee5b3d4a93b5f98b6abef559c`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => {
        console.log("Failed To Load The Data");
      });
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Weather Value"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      ></input>

      <h2>Weather in {weather?.name}</h2>
      <h1>{weather?.main?.temp - 273}</h1>
    </div>
  );
};

export default Weather1;
