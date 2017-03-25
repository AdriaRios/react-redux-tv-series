import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import SearchReducer from './search/search.reducer';

export default combineReducers({
    series: SearchReducer,
    router: routerReducer
});