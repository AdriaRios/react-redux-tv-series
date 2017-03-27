import axios from 'axios';
import {
    API_KEY,
    SERIE_DETAILS_REQUESTED
} from '../constants';

const BASE_URL = 'https://api.themoviedb.org/3/tv';

function fetchSerieDetails(result) {
    return {
        type: SERIE_DETAILS_REQUESTED,
        payload: result
    }
}

export function requestSerieDetails(id) {

    return function(dispatch) {
        axios.get(`${BASE_URL}/${id}`, {
            params: {
                api_key: API_KEY,
                language: 'en-US'
            }
        })
            .then((response) => {
                dispatch(fetchSerieDetails(response.data));
            })
            .catch((err) => {
                dispatch(fetchSerieDetails(err));
            })
    }
}