import { connect } from 'react-redux';
import ViewInfo from './ViewInfo';


//this function takes the store and returns an object
//thats passed to the props of the component.
function mapStoreToProps(store) {
    return{
        cityName: store.search.cityName,
        lat: store.search.lat,
        lon: store.search.lon,
        temp:store.search.temp,
        pressure:store.search.pressure,
        humidity: store.search.humidity,
        lowtemp: store.search.lowtemp,
        hightemp: store.search.hightemp,
        wind: store.search.wind,
        icon: store.search.icon,
    };
}
//this might look odd, but connect reuturns a function,
//that is then called witht he component itself


export default connect(mapStoreToProps)(ViewInfo);
