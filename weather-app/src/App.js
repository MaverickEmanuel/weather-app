import React, { useEffect, useState } from "react";
import './styles/App.css';
import Weather from './components/Weather';

function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${Math.round(lat * 1000)/1000}&lon=${Math.round(long*1000)/1000}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(result => {
        setData(result)
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);});
    }
    fetchData();
  }, [lat,long])
  
  return (
    <div className="App">
      <div className="Header">
        <h1>Weather App</h1>
      </div>
      <div className="Weather-info">
        {(typeof data.main != 'undefined') ? (
          <Weather weatherData={data}/>
        ): (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
