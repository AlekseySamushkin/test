import React, {useEffect} from "react";
import ContactsItem from "./item";
import './index.scss';
import {useDispatch, useSelector} from "react-redux";
import {getContacts} from "../../redux/actions/contacts";

const ContactsList = () => {
    const dsp = useDispatch();
    const { contacts, loading }= useSelector(state=> state.contacts)

    useEffect(()=> {
        if(!loading) {
            console.log('getContacts')
            dsp(getContacts());
        }
    },[dsp, loading])

    return (
        <div className="ContactsList">
            {
                contacts && contacts.map(el=> (
                    <ContactsItem key={el.id} {...el} />
                ))
            }
        </div>
    )
}

export default ContactsList;
