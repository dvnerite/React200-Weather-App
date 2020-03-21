import axios from 'axios';

export function SearchCity(cityName) {
    return {
        type:'CITY_NAME',
        payload: { cityName : cityName }
    };
}

export function getWeather(cityName) {
    return {
        type:'GET_WEATHER',
        payload: axios.get(`/search/${cityName}`)
    };
    
}