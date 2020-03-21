import { connect } from 'react-redux';
import History from './History';


//this function takes the store and returns an object
//thats passed to the props of the component.
function mapStoreToProps(store) {
    return{
        history: store.search.history
    };
}
//this might look odd, but connect reuturns a function,
//that is then called witht he component itself


export default connect(mapStoreToProps)(History);
