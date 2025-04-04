import React from 'react'

const WeatherBox = ({weather}) => {
    console.log("웨더박스",weather)
    const celsiusToFahrenheit=(celsius)=> {
        return celsius * 9/5 + 32;
      }
      const cel=weather?.main.temp;
      const fah=celsiusToFahrenheit(cel)
    //   console.log("섭씨",cel,fah)
    
  return (
    <div className='weather-box'>
        <h2 className='location'>{weather?.name}</h2>
        <h1>{cel}°C / {fah.toFixed(2)}°F</h1>
        <h1>{weather?.weather[0].description}</h1>
    </div>
  )
}

export default WeatherBox