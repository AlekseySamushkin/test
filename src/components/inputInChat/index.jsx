import React, {useEffect, useState} from "react";
import './index.scss';
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, setSendedMessage} from "../../redux/actions/messages";
import { ReactComponent as Arrow } from '../../assets/Arrow.svg';


export const InputInChat = ({ chatId }) => {
    const { sendedMessage } = useSelector(state=> state.messages)
    const [currentValue, setCurrentValue] = useState('');
    // const [error, setError] = useState('');
    const dsp = useDispatch();

    useEffect(()=> {
        if (sendedMessage) {
            dsp(setSendedMessage({
                value: false
            }))
            setCurrentValue('')
        }
    },[dsp, sendedMessage])
    const handleSendMessage = () => {
        dsp(sendMessage({
            chatId,
            message: currentValue,
        }))
    }
    // 10000 max
    return (
        <div className="InputInChat">
          <input
            type="text"
            placeholder="Введите сообщение"
            onChange={(e)=> setCurrentValue(e.target.value)}
            value={currentValue}
          />
          <button
            disabled={!currentValue || currentValue.length > 10000}
            onClick={handleSendMessage}
          >
              <Arrow />
          </button>
        </div>
    )
}
