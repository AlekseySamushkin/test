import axios from 'axios';
import {call, delay, race} from "@redux-saga/core/effects";

const instance = axios.create({
    timeout: 600000,
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        accept: 'application/json; charset=UTF-8',
        'Cache-Control': 'no-cache'
    },
    mode: 'no-cors',
    crossdomain: true,
});

export function* request(payload, meta = {}) {
    // const axiosInstance =
    //     payload.type === 'multipart'
    //         ? instanceMulti
    //         : payload.type === 'raw'
    //         ? axios
    //         : payload.type === 'suz' ? instance : authInstance;

    const {
        preloading = payload.preloading !== undefined ? payload.preloading : true,
        errorNotify = payload.errorNotify !== undefined
            ? payload.errorNotify
            : true,
        timeout: time = 120000,
        artificialDelay = 0,
    } = meta;

    // if (preloading) yield put(preloaderActions.start());

    let success;
    let timeout;
    let error;

    try {
        [success, timeout] = yield race([
            call(instance, payload),
            // call(axiosInstance, payload),
            delay(time),
        ]);
    } catch (e) {
        error = e;
        // if (errorNotify) notifyMessageHelper(e);
    }
    if (Boolean(artificialDelay)) yield delay(artificialDelay);
    return [success, error, timeout];
}
