import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather2 = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("New York");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //When using [] dependencies that is only when the state will change it's value.

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(
          "Fetching the data using JSON Placeholder API",
          response.data
        );
      })
      .catch((error) => {
        console.log("Error in fetching the data", error);
      });
  }, []);

  return (
    <div>
      <h2>Weather in {weather?.name}</h2>

      {loading ? (
        <p>Loading...</p> // Show loading text or a spinner while fetching data
      ) : error ? (
        <p>{error}</p> // Show error message if something goes wrong
      ) : (
        <p>{weather?.weather?.[0]?.description}</p> // Show weather description
      )}

      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
    </div>
  );
};

export default Weather2;
