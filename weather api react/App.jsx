// src/App.js

import React, { useState } from 'react';
import './App.css';
import SearchBar from './pages/search/SearchBar';
import WeatherDisplay from './pages/weather/WeatherDisplay';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (query) => {
    const apiKey = '62d7a50e6f4b25ed70de07839c010508';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching the weather data:', error);
      setWeatherData(null);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default App;
