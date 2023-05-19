import {setMessages, setSendedMessage} from "../actions/messages";
import {call, put} from "@redux-saga/core/effects";
import { request } from '../../api'
import {ApiTokenInstance, domain, IdInstance} from "../../constants";


export function* getMessagesSaga({ $payload }) {
    try {
        const requestPayload = {
            url: `${domain}/waInstance${IdInstance}/GetChatHistory/${ApiTokenInstance}`,
            method: 'post',
            data: {
                chatId: $payload.chatId,
                count: 1000,
            }
        };
        const [success, error] = yield call(request, requestPayload);
        yield put(setMessages(success.data));
    } catch ( err ) {
        console.log(err)
    }
}


export function* addMessageSaga({ $payload }) {
    try {
        const requestPayload = {
            url: `${domain}/waInstance${IdInstance}/SendMessage/${ApiTokenInstance}`,
            method: 'post',
            data: {
                chatId: $payload.chatId,
                message: $payload.message,
            }
        };
        const [success, error] = yield call(request, requestPayload);
        if (success) {
            yield call(getMessagesSaga, {
                $payload: {
                    chatId: $payload.chatId,
                }
            });
            yield put(setSendedMessage({ value: true }))
        }
    } catch ( err ) {
        console.log(err)
    }
}
