import React from "react";
import {useDispatch} from "react-redux";
import './index.css';
import {setActiveContact} from "../../../redux/actions/contacts";

const ContactsItem = ({ id, name }) => {
    const dsp = useDispatch();
    const handleClickInChat = () => {
        dsp(setActiveContact(id))
    }
    return (
        <div onClick={handleClickInChat} className="ContactsItem">
            {name}
        </div>
    )
}

export default ContactsItem;
