import React from 'react'

const WeatherBox = ({weather}) => {

    console.log("웨더박스",weather)
    const celsiusToFahrenheit=(celsius)=> {
        return celsius * 9/5 + 32;
      }
      const cel=weather?.main.temp;
      const fah=celsiusToFahrenheit(cel)
    //   console.log("섭씨",cel,fah)


  const iconCode = weather?.weather[0]?.icon;
  const iconUrl = iconCode ? `http://openweathermap.org/img/wn/${iconCode}@2x.png` : '';
    
  return (
    <div className='weather-box'>
      <h2 className='location'>
        <span className="emoji">🚩</span> {weather?.name}
      </h2>
      <h1 className='temperature'>{cel}°C / {fah.toFixed(2)}°F</h1>
      <div className='description-wrapper'>
        <h1 className='description'>{weather?.weather[0].description} {iconUrl && <img className="weather-icon" src={iconUrl} alt="weather icon" />}</h1>
        
      </div>
    </div>
  )
}

export default WeatherBox