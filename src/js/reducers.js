import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import SearchReducer from './search/search.reducer';
import SerieDetailsReducer from './serie-details/serie-details.reducer';

export default combineReducers({
    series: SearchReducer,
    serie:SerieDetailsReducer,
    router: routerReducer
});