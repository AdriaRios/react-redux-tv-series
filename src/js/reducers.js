import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import SearchReducer from './search/search.reducer';
import SerieDetailsReducer from './serie-details/serie-details.reducer';
import SeasonDetailsReducer from './season-details/season-details.reducer';

export default combineReducers({
    series: SearchReducer,
    serie:SerieDetailsReducer,
    season: SeasonDetailsReducer,
    router: routerReducer
});