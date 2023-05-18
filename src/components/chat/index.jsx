import React, {useEffect} from "react";
import cn from "classnames"
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {getMessages} from "../../redux/actions/messages";
import {InputInChat} from "../inputInChat";
import './index.scss';

const mockData = [
    {
        "type": "incoming",
        "timestamp": 1603964449,
        "idMessage": "3AADDD555CB0822C0539",
        "typeMessage": "textMessage",
        "chatId": "11001234567@c.us",
        "senderId": "11001234567@c.us",
        "senderName": "Andrew Sh",
        "textMessage": "I use Green-API to get this message from you!"
    },
    {
        "type": "outgoing",
        "timestamp": 1603964445,
        "idMessage": "3EB08816FEBCCC3FACD2",
        "statusMessage": "read",
        "typeMessage": "textMessage",
        "chatId": "11001234567@c.us",
        "textMessage": "I use Green-API to send this message to you!"
    },
    {
        "type": "incoming",
        "timestamp": 1603964444,
        "idMessage": "3AA45F9F285C5249CDFC",
        "typeMessage": "textMessage",
        "chatId": "11001234567@c.us",
        "senderId": "11001234567@c.us",
        "senderName": "Andrew Sh",
        "textMessage": "I use Green-API to send this message to you!",
        "caption": "Green-API Logo"
    }
]


const Chat = React.memo(() => {
    const dsp = useDispatch();
    const activeContact = useSelector(state=> state.contacts.activeContact)
    const { messages } = useSelector(state=> state.messages)
    console.log('activeContact', activeContact)
    const handleGetMessages = () => {
        console.log('handleGetMessages', activeContact)
        if (activeContact) {
            dsp(getMessages({
                chatId: activeContact,
            }))
        }
    }

    useEffect(()=> {
       handleGetMessages();
       const interval = setInterval(handleGetMessages, 5000)
       return () => {
           clearInterval(interval);
       }
    },[activeContact])

    console.log('messages', messages)
    return (
        <div className="Chat">
            {
                // messages && messages.map(el=> (
                mockData.map(el=> (
                    <div
                        key={el.idMessage}
                        className={cn('messageContainer', {myMessage: el.type === "outgoing" })}
                    >
                        <div className="message">
                            {el.textMessage}
                            <div className="time">{moment(el.timestamp).format('hh:mm')}</div>
                        </div>
                    </div>
                ))
            }
            <InputInChat chatId={activeContact} />
        </div>
    )
})

export default Chat;
