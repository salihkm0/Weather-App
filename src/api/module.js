/**
 * @license MIT
 * @fileoverview All Module Functions
 * @copyright None
 * @author AmeerBasha <bashabb738@gmail.com>
 */

'use strict';

export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
/**
 * 
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in Seconds 
 * @returns {string} Date string. format: "Sunday 10, January"
 */
export const getDate = function(dateUnix, timezone) {
    const date = new Date((dateUnix + timezone)*1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate}, ${monthName}`;
}
/**
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in Seconds
 * @returns {string} Time string. "HH:MM AM/PM"
 */
export const getTime = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone)*1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${minutes} ${period}`;
}
/**
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in Seconds
 * @returns {string} Time string. "HH AM/PM"
 */
export const getHours = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone)*1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12} ${period}`;
}
/**
 * 
 * @param {number} mps meter per seconds
 * @returns {number} kilometer per seconds
 */
export const mph_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}

export const aqiText = {
    1:{
        level:"Good",
        message:"Air quality is considered satisfactory, and the air pollution poses little or no risk"
    },
    2:{
        level:"Fair",
        message:"Air quality is considered Acceptable; However, for some pollutants there may be a moderate health consern for very small number of people who are unusuallt sensitive to air pollution."
    },
    3:{
        level:"Moderate",
        message:"Members of sensitive group may experiance health effects. The general public is not likely to be efffected. "
    },
    4:{
        level:"Poor",
        message:"Everyone may begin to experiance health effects. Members of sensitive group may experiance more serious health effects."
    },
    5:{
        level:"Very Poor",
        message:"Health warnings of emergency conditions. The entire population is more likely to be affected"
    },

}