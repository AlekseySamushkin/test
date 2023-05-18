import {types} from "../types";
import {all, takeLatest} from "@redux-saga/core/effects";
import {addMessageSaga, getMessagesSaga} from "./messages";
import {getNotificationsSaga} from "./notifications";
import {getContactsSaga} from "./contacts";


function* rootSaga() {
    yield all([
        takeLatest( types.GET_MESSAGES, getMessagesSaga),
        takeLatest( types.GET_CONTACTS, getContactsSaga),
        takeLatest( types.GET_NOTIFICATIONS, getNotificationsSaga),
        takeLatest( types.ADD_MESSAGE, addMessageSaga),
    ])
}

export default rootSaga;
