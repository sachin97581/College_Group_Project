import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherWidget = ({ lat, lon }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`/api/weather?lat=${lat}&lon=${lon}`);
        setData(res.data);
      } catch (err) {
        setError("Failed to fetch weather data");
      }
    }
    fetchData();
  }, [lat, lon]);

  if (error) return <div>{error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h3>Weather & Air Quality</h3>
      <p>Temperature: {data.weather.main.temp} °C</p>
      <p>Humidity: {data.weather.main.humidity} %</p>
      <p>Air Quality (PM2.5): {data.pollution.list[0].components.pm2_5} μg/m³</p>
      {/* add more fields as desired */}
    </div>
  );
};

export default WeatherWidget;
