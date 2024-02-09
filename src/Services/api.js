'use strict';

const API_KEY = "7272605b5a11bf4f48ebb8b134d52af3";
// const BASE_URL = "https://api.openweathermap.org/data/2.5";

// export const getWeatherData = async (infoType, searchParams) => {
//   const url = new URL(BASE_URL + "/" + infoType);
//   url.searchParams = new URLSearchParams({ ...searchParams, appid: API_KEY });

//   const res = await fetch(url);
//     const data = await res.json();
//     return data;
// };


export const getWeatherData =  (URL ,callback) => {
    fetch(`${URL}&appid=${API_KEY}`)
    .then(res => res.json())
    .then(data => callback(data))
}

export const url = {
    currentWeather (lat , lon){
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    forecast (lat , lon){
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airPolution (lat , lon){
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    reverseGeo (lat , lon){
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },
    /***
     * 
     */
    geo(query){
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}
