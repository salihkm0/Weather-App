/**
 * Fetch data from server
 * @param {*} URL api url
 * @param {*} callback callback
 */


'use strict';
const api_key ="75f4279a8038ece6ec44e9780bda9a62";

export const fetchData = function (URL,callback){
    fetch(${URL}&appid=${api_key})
    .then(res => res.json())
    .then (data => callback());

}

export const url = {
    currentWeather(lat,lon) {
        
        return`https://api.openweathermap.org/data/2.5/weather?lat=23.7644025&lon=90.389015&units=metric&appid=75f4279a8038ece6ec44e9780bda9a62`
    }
}