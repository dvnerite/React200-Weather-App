const moment = require('moment');

const defaultState = {
    lat: '',
    lon:'',
    temp: 0,
    pressure: 0,
    humidity:0,
    lowtemp: 0,
    hightemp:0,
    wind:0,
    searchInput: '',
    cityName: '',
    history:[],
};

export default function SearchReducer (state = defaultState, action) {
    const { type, payload } = action;
 
    switch(type){
        case 'GET_WEATHER_FULFILLED':{

            return {

               ...state,
                cityName: payload.data.name,
                lat: payload.data.coord.lat,
                lon: payload.data.coord.lon,
                temp:payload.data.main.temp.toFixed(2),
                pressure:payload.data.main.pressure,
                humidity: payload.data.main.humidity,
                lowtemp: payload.data.main.temp_min,
                hightemp: payload.data.main.temp_max,
                wind: payload.data.wind.speed,
                icon: payload.data.weather[0].icon,
                history:[
                    ...state.history,
                    {
                        searchedCity: payload.data.name,
                        date: moment().format('l'), 
                        time: moment().format('h:mm:ss a')
                    }
                ]
            }
        }
        case 'CITY_NAME':{
            return{
                ...state, 
                cityName: payload.cityName
            }
        }
        default: {
            return state;
        }
    }
}