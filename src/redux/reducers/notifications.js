import { types } from '../types';


const initialState = {
    notifications: null
};

const reducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case types.SET_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.$payload
            };
        case types.CLEAR_NOTIFICATIONS:
            return {
                ...state,
                notifications: null
            };
        default:
            return state;
    }
};

export default reducer;
