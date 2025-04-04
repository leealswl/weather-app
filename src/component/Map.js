import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// 지도 클릭 시 위치를 저장하고 마커와 팝업을 표시하는 컴포넌트
const LocationMarker=({mapPosition,setMapPosition,weather})=> {
    console.log("지도",mapPosition)
    useMapEvents({
        click(e) {
          setMapPosition(e.latlng);
        },
      });
      return mapPosition ? (
    <Marker position={mapPosition}>
        <Popup>
        {weather ? (
          <div>
            <strong>{weather.name}</strong>
            <br />
            온도: {weather.main.temp}°C / {(weather.main.temp * 9/5 + 32).toFixed(2)}°F
            <br />
            날씨: {weather.weather[0].description}
          </div>
        ) : (
          <div>
            클릭한 위치: <br />
            위도: {mapPosition.lat.toFixed(4)} <br />
            경도: {mapPosition.lng.toFixed(4)}
          </div>
        )}
      </Popup>
    </Marker>
  ) : null;
};

    const Map = ({ mapPosition, setMapPosition, weather }) => {
    return (
        <MapContainer
        center={[37.5665, 126.9780]} // 초기 중심 좌표 
        zoom={13}
        style={{ height: '500px', width: '500px' }}
        >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
            OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker mapPosition={mapPosition} setMapPosition={setMapPosition} weather={weather} />
        </MapContainer>
    );
    };
    
export default Map;