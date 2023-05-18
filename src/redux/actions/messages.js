import {createAction, types} from "../types";

export const getMessages = createAction(types.GET_MESSAGES);
export const setMessages = createAction(types.SET_MESSAGES);
export const clearMessages = createAction(types.CLEAR_MESSAGES);


export const sendMessage = createAction(types.ADD_MESSAGE);
export const setSendedMessage = createAction(types.SET_SENDED_MESSAGE);
