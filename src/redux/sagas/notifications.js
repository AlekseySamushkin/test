import {call} from "@redux-saga/core/effects";
import { request } from '../../api'
import {ApiTokenInstance, domain, IdInstance} from "../../constants";


export function* getNotificationsSaga({ $payload }) {
    try {
        const requestPayload = {
            url: `${domain}/waInstance${IdInstance}/ReceiveNotification/${ApiTokenInstance}`,
            method: 'get',
        };
        const [success, error] = yield call(request, requestPayload);
        console.log('success', success);
        // yield put(setMessages(action.$payload.data));
    } catch ( err ) {
        console.log(err)
    }
}
