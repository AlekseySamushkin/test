import React from "react";
import {useDispatch} from "react-redux";
import './index.scss';
import {setActiveContact} from "../../../redux/actions/contacts";

const ContactsItem = ({ id, name }) => {
    const dsp = useDispatch();
    const handleClickInChat = () => {
        dsp(setActiveContact(id))
    }
    return (
        <div onClick={handleClickInChat} className="ContactsItem">
            <div className="logo">

            </div>
            <div className="name">{name}</div>
        </div>
    )
}

export default ContactsItem;
