import { combineReducers } from 'redux';
import searchReducer from './components/SearchInfo/SearchInfoReducer';

const rootReducer = combineReducers({
    search: searchReducer
});

export default rootReducer;