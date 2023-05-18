import {ApiTokenInstance, domain, IdInstance} from "../../constants";
import {call, put} from "@redux-saga/core/effects";
import {request} from "../../api";
import {setContacts, setLoading} from "../actions/contacts";

export function* getContactsSaga() {
    try {
        const requestPayload = {
            url: `${domain}/waInstance${IdInstance}/GetContacts/${ApiTokenInstance}`,
            method: 'post',
        };
        const [success, error] = yield call(request, requestPayload);
        console.log('success', success)
        if (success) {
            yield put(setContacts(success.data));
        }
    } catch (err) {
        console.log(err)
        yield put(setLoading({value: false}));
    }
}
