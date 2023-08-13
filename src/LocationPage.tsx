import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import WeatherApi from "./types/WeatherApi";

const LocationPage = () => {
  const [weatherData, setWeatherData] = useState<WeatherApi | undefined>(undefined);
  // const [loading, setLoading] = useState<boolean>(true);
  const { placeName } = useParams();

  const getWeatherData = async () => {
    try {
      const apiKey = "e58a8b2d3a37b9e6bd3507aa9de5ea2e";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=${apiKey}&units=metric`;
      const res = await axios.get(url);
      return res.data;
    } catch (err) {
      console.error("Error:", err);
      throw err;
    }
  };

  const fetchData = async () => {
    const weatherResponse = await getWeatherData();
    setWeatherData(weatherResponse);
    // setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // } else {
  return (
    <div>
      <h1>{weatherData?.name}</h1>
      <p>{"Temperature: " + weatherData?.main.temp}</p>
      <p>{"Feels Like: " + weatherData?.main.feels_like}</p>
      <p>{"Humidity: " + weatherData?.main.humidity}</p>
    </div>
  );
};
// };

export default LocationPage;
