import React from "react";
import '../styles/Weather.css';
import moment from 'moment';

const Weather = ({weatherData}) => (
    <div className="Weatherdata">
        <div className="Main">
            <h1>{weatherData.name}</h1>
            <div className="Temperature">
                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description}/><h2>{Math.round(weatherData.main.temp)} &deg;C</h2>
            </div>
            <p>{weatherData.weather[0].main}</p>
        </div>
        <div className="Detailed">
            <p>Humidity: {weatherData.main.humidity} %</p>
            <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
            <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            <p><b>{moment().format('LL')}</b></p>
        </div>
    </div>
)

export default Weather;