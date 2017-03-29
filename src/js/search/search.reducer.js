import { SEARCH_REQUESTED, SEARCH_REQUESTED_FAIL } from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case SEARCH_REQUESTED:
            return action.payload;
        case SEARCH_REQUESTED_FAIL:
        default:
            return state;
    }
}