import { SEASON_DETAILS_REQUESTED } from '../constants';

export default (state = {}, action) => {
    switch (action.type) {
        case SEASON_DETAILS_REQUESTED:
            return action.payload;
    }
    return state;
}