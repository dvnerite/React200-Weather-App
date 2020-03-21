import { connect } from 'react-redux';
import SearchInfo from './SearchInfo';


// this function takes the store and returns an object
// thats passed to the props of the component.
function mapStoreToProps(store) {
    return{
       cityName: store.search.cityName
    };
}
// this might look odd, but connect reuturns a function,
// that is then called witht he component itself


export default connect(mapStoreToProps)(SearchInfo);