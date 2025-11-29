const axios = require("axios");

async function getWeatherAndPollution(lat, lon) {
  const apiKey = process.env.OPEN_WEATHER_API_KEY;
  
  const weatherRes = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
  );
  
  const pollutionRes = await axios.get(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
  );
  
  return {
    weather: weatherRes.data,
    pollution: pollutionRes.data
  };
}

// <WeatherWidget lat={28.7041} lon={28.7041} />  {/* Delhi coordinates */}

// console.log(getWeatherAndPollution(28.7041 ,28.7041 ))
