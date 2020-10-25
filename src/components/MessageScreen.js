import React,{ useState,useEffect } from 'react'
import alarmService from '../services/alarms'

const MessageScreen = (props) =>{
    const [alarm, setAlarm] = useState({})

    const code = props.match.params.code
    useEffect(() => {
        alarmService.getSDMessage(code)
            .then(
                alarm=>{
                    setAlarm(alarm)
                    setTimeout(()=> window.location.replace(window.location.origin),alarm.timeToExpire*1000)
                })
            .catch(()=> window.location.replace(window.location.origin))
    }, [code])

    return(
        !alarm
        ? <div>Loading...</div> 
        : 
        <div className="sd-message">
            <h3>Tin nhắn bạn nhân được là</h3>
            <p id="message-content">"{alarm.message}"</p>
            <p id="time-to-expire">Tin nhắn sẽ tự hủy sau <span>{alarm.timeToExpire}</span> giây nữa</p>
        </div>
    )        
}

export default MessageScreen