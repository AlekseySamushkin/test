import {createAction, types} from "../types";

export const getContacts = createAction(types.GET_CONTACTS);
export const setContacts = createAction(types.SET_CONTACTS);
export const clearContacts = createAction(types.CLEAR_CONTACTS);
export const setActiveContact = createAction(types.SET_ACTIVE_CONTACT);
export const clearActiveContact = createAction(types.CLEAR_ACTIVE_CONTACT);
export const setLoading = createAction(types.SET_LOADING);
