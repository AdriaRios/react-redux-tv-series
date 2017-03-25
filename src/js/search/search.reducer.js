import { SEARCH_REQUESTED } from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case SEARCH_REQUESTED:
            return action.payload
    }
    return state;
}