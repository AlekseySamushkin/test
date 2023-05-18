import { types } from '../types';


const initialState = {
    messages: null,
    sendedMessage: false
};

const reducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case types.SET_MESSAGES:
            return {
                ...state,
                messages: action.$payload
            };
        case types.SET_SENDED_MESSAGE:
            return {
                ...state,
                sendedMessage: action.$payload.value
            };
        case types.CLEAR_MESSAGES:
            return {
                ...state,
                messages: action.$payload
            };
        default:
            return state;
    }
};

export default reducer;
