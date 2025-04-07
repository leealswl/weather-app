import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity, city }) => {
  return (
    <div className='weather-button'>
      {/* 현재 위치 버튼: city가 빈 문자열이면 선택된 것으로 간주 */}
      <Button
        variant="primary"
        onClick={() => setCity('')}
        className={city.trim() === '' ? 'active' : ''}
      >
        current location
      </Button>
      {cities.map((c, index) => (
        <Button
          variant="primary"
          key={index}
          onClick={() => setCity(c)}
          className={city.toLowerCase() === c.toLowerCase() ? 'active' : ''}
        >
          {c}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
