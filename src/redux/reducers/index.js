import {connectRouter} from "connected-react-router";
import {combineReducers} from "redux";
import messagesReducer from "./messages";
import notificationsReducer from "./notifications";
import contactsReducer from "./contacts";

export default (history) =>
    combineReducers({
        router: connectRouter(history),
        messages: messagesReducer,
        notifications: notificationsReducer,
        contacts: contactsReducer,
    });
