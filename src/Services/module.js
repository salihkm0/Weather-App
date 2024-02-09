'use strict';

export const weekDaysNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]
export const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep', 
    'Oct', 
    'Nov', 
    'Dec'
]

export const getDate = (dateUnix ,timezone) => {
    const date = new Date((dateUnix + timezone) * 1000)
    const weekDaysName = weekDaysNames[date.getUTCDay()]
    const monthName = monthNames[date.getUTCMonth()]
    return `${weekDaysName} ${date.getUTCDate()}, ${monthName}`
}
export const getTime = (dateUnix ,timezone) => {
    const date = new Date((dateUnix + timezone) * 1000)
    const hours = date.getUTCHours()
    const minutes = date.getUTCMinutes()
    const period = hours >= 12 ? 'PM' : 'AM'

    return `${hours % 12 || 12}:${minutes} ${period}`
}

export const getHours = (dateUnix ,timezone) => {
    const date = new Date((dateUnix + timezone) * 1000)
    const hours = date.getUTCHours()
    const period = hours >= 12 ? 'PM' : 'AM'

    return `${hours % 12 || 12} ${period}`
}

export const mps_to_kmh = mps => {
    const mph = mps * 3600
    return mph / 1000
}
