import { types } from '../types';


const initialState = {
    contacts: null,
    loading: false,
    activeContact: null
};

const reducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case types.GET_CONTACTS:
            return {
                ...state,
                loading: true
            };
        case types.SET_CONTACTS:
            return {
                ...state,
                contacts: [...action.$payload],
                loading: false
            };
        case types.SET_LOADING:
            return {
                ...state,
                loading: action.$payload.value
            };
        case types.CLEAR_CONTACTS:
            return {
                ...state,
                contacts: null
            };
        case types.SET_ACTIVE_CONTACT:
            return {
                ...state,
                activeContact: action.$payload
            };
        case types.CLEAR_ACTIVE_CONTACT:
            return {
                ...state,
                activeContact: null
            };
        default:
            return state;
    }
};

export default reducer;
