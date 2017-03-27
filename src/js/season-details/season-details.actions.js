import axios from 'axios';
import {
    API_KEY,
    SEASON_DETAILS_REQUESTED
} from '../constants';

const BASE_URL = 'https://api.themoviedb.org/3/tv';

function fetchSeasonDetails(result) {
    return {
        type: SEASON_DETAILS_REQUESTED,
        payload: result
    }
}

export function requestSeasonDetails(serie_id, season) {

    return function(dispatch) {
        axios.get(`${BASE_URL}/${serie_id}/season/${season}`, {
            params: {
                api_key: API_KEY,
                language: 'en-US'
            }
        })
            .then((response) => {
                dispatch(fetchSeasonDetails(response.data));
            })
            .catch((err) => {
                dispatch(fetchSeasonDetails(err));
            })
    }
}