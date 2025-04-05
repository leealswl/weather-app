import React, { useState } from 'react';

const WeatherCard = ({ currentWeather, weeklyWeather }) => {
  const [flipped, setFlipped] = useState(false);

  const celsiusToFahrenheit = (celsius) => celsius * 9 / 5 + 32;
  const cel = currentWeather?.main.temp;
  const fah = cel ? celsiusToFahrenheit(cel) : 0;

  return (
    <div className="weather-card" onClick={() => setFlipped(!flipped)}>
      <div className={`weather-card-inner ${flipped ? "flipped" : ""}`}>
        {/* Front Side - 현재 날씨 */}
        <div className="weather-card-front">
          <h2 className="location">
            <span className="emoji">🚩</span> {currentWeather?.name}
          </h2>
          <h1 className="temperature">
            {cel}°C / {fah.toFixed(2)}°F
          </h1>
          <h1 className="description">
            {currentWeather?.weather[0].description}
          </h1>
        </div>

        {/* Back Side - 주간 날씨 */}
        <div className="weather-card-back">
          <h2>주간 날씨</h2>
          {weeklyWeather ? (
            weeklyWeather.map((day, index) => (
              <div key={index} className="daily-forecast">
                <p>{day.date}</p>
                <p>{day.temp}°C</p>
                <p>{day.description}</p>
              </div>
            ))
          ) : (
            <p>데이터 없음</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
