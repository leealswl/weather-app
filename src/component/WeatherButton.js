import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,setCity}) => {
  // console.log("도시",cities)
  return (
    <div className='weather-button'>
      <Button variant="primary"onClick={()=>setCity('')} >current location</Button>
      
    {cities.map((city,index)=>
    <Button variant="primary" key={index} 
    onClick={()=>setCity(city)}>{city}</Button>
      )}

  
    </div>
  )
}

export default WeatherButton