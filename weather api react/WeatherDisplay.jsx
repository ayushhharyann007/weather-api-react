// src/WeatherDisplay.js

import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return <div className="no-data">No data available</div>;
  }

  const { name, main, weather } = weatherData;

  return (
    <div className="weather-display">
      <h2>Weather in {name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Condition: {weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;
