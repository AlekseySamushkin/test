import React, {useCallback, useEffect} from "react";
import cn from "classnames"
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {getMessages} from "../../redux/actions/messages";
import {InputInChat} from "../inputInChat";
import './index.scss';


const Chat = React.memo(() => {
    const dsp = useDispatch();
    const activeContact = useSelector(state=> state.contacts.activeContact)
    const { messages } = useSelector(state=> state.messages)
    const handleGetMessages = useCallback(() => {
        if (activeContact) {
            dsp(getMessages({
                chatId: activeContact,
            }))
        }
    },[activeContact, dsp])

    useEffect(()=> {
       handleGetMessages();
       const interval = setInterval(handleGetMessages, 5000)
       return () => {
           clearInterval(interval);
       }
    },[handleGetMessages, activeContact])

    return (
        <div className="Chat">
            <div className="Chat_content">
            {
                messages && messages
                    .filter(el=>el.textMessage)
                    .map(el=> (
                        // Вынести в отдельный компоннет
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
            </div>
            <InputInChat chatId={activeContact} />
        </div>
    )
})

export default Chat;
