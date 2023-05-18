import {createAction, types} from "../types";


export const getNotifications = createAction(types.GET_NOTIFICATIONS);
export const setNotifications = createAction(types.SET_NOTIFICATIONS);
export const clearNotifications = createAction(types.CLEAR_NOTIFICATIONS);
