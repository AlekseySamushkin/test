import React, {useState} from "react";
import './index.scss';
import {useDispatch} from "react-redux";
import {sendMessage} from "../../redux/actions/messages";
import { ReactComponent as Arrow } from '../../assets/Arrow.svg';


export const InputInChat = ({ chatId }) => {
    const [currentValue, setCurrentValue] = useState('');
    const [error, setError] = useState('');
    const dsp = useDispatch();

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
            disabled={!currentValue}
            onClick={handleSendMessage}
          >
              <Arrow />
          </button>
        </div>
    )
}
