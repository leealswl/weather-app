import { useEffect, useState, useCallback } from 'react';
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClipLoader  from 'react-spinners/ClipLoader';



// 유저는 현재위치의 날씨를 볼 수 있따(지역, 온도, 날씨 상태)
// 다른도시의 버튼들을 볼 수 있디 5개 버튼 
// 다른도시버튼을 클릭하면 해당 도시의 날씨정보 볼수잇다
// 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다
// 데이터가 로딩될때 로딩 스피너를 볼수있다
const API_KEY='754d94d4e652e5a4f26b4c02a8fac991'

function App() {
  const [weather,setWeather]=useState(null)
  const [city,setCity]=useState('')
  const cities=['seoul','paris','new york','tokyo','swiss']
  const [loading, setLoading]=useState(false)

  const getCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          getLocation(lat, lon);
        },
        (error) => {
          console.error("에러", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  
  }, []);

  const getLocation=async(lat,lon)=>{
    let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    setLoading(true)
    try {
    let res=await fetch(url)
    let data=await res.json()
    // console.log("겟로케이샨",data)
    setWeather(data)
    } catch(error){
      console.log("API 호출 에러:", error)
    }
    setLoading(false)
  }

  const getWeatherByCity=useCallback(async()=>{
    try {
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      setLoading(true)
      let res=await fetch(url)
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
    let data=await res.json()
    console.log("겟시티",data)
    setWeather(data)
   
  } catch (error) {
    console.error("API 호출 에러:", error);
  }
  setLoading(false)
}, [city]);



  useEffect(()=>{
    if(city===''){
      getCurrentLocation()
    }
    else {getWeatherByCity()}
  
  },[city, getCurrentLocation, getWeatherByCity])

 

  return (
    <div className="App">
      
      {loading? (
        <div className='container'>
      <ClipLoader color="#ffffff" loading={loading} size={80} />
      </div>
      ) :(
      <div className='container'>
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} setCity={setCity} city={city} />
      </div>)}
    </div>
  );
}

export default App;
