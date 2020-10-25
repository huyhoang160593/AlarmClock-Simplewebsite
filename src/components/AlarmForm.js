import React, { useState, useEffect } from 'react'

const AlarmForm = ({ createAlarm, modifyAlarm }) =>{
    const [id, setID] = useState('')
    const [time, setTime] = useState('')
    const [message, setMessage] = useState('')
    const [code, setCode] = useState('')
    const [timeToExpire, setTimeToExpire ] = useState(15)

    useEffect(() => {
        setID(modifyAlarm.id || '')
        setMessage(modifyAlarm.message || '')
        setCode(modifyAlarm.code || '')
    }, [modifyAlarm])

    const addAlarm = (event) => {
        const timeString = time.split(":")
        event.preventDefault()
        id === '' 
            ? createAlarm({
                hours: timeString[0],
                minutes: timeString[1],
                message: message,
                timeToExpire: timeToExpire,
                code: code 
        }) 
            : createAlarm({
                id: id,
                hours: timeString[0],
                minutes: timeString[1],
                message: message,
                timeToExpire: timeToExpire,
                code: code 
            })
        setTime('')
        setMessage('')
        setCode('')
        setTimeToExpire(15)
    }

    const handleCancel = () => {
        setID('')
        setTime('')
        setMessage('')
        setCode('')
        setTimeToExpire(15)
    }
    return(
        <div>
            <form className='alarm-form' onSubmit={addAlarm}>
                <div>
                    <label htmlFor="id-alarm">ID</label>  
                    <input 
                        id="id-alarm" 
                        type="text" 
                        value={id} 
                        name="ID" 
                        onChange={({ target }) => setID(target.value)} 
                        disabled
                    />
                </div>
                <div>
                    <label htmlFor="time">Time</label>      
                    <input
                        id="time"
                        type="time"
                        value={time}
                        name="Time"
                        onChange={({ target }) => setTime(target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        type="text"
                        value={message}
                        name="Message"
                        onChange={({ target }) => setMessage(target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="code">Code</label>
                    <input
                        id="code"
                        type="text"
                        value={code}
                        name="Code"
                        minLength="4" 
                        maxLength="4"
                        onChange={({ target }) => setCode(target.value)}
                        required
                    />
                    <span className="rules">*Yêu cầu code tối đa 4 kí tự bất kì</span>
                </div>
                <div>
                    <label htmlFor="timetoexpire">Time to Expire</label>
                    <div>
                        <input
                            id="timetoexpire"
                            type="number"
                            value={timeToExpire}
                            name="TimeToExpire"
                            min="15"
                            onChange={({ target }) => setTimeToExpire(target.value)}
                            required
                        /> giây
                    </div>
                    
                </div>
                <div id="select-choice">
                    <button id="create-button" type="submit" className="btn-pill"><span>Đặt/Sửa báo thức</span></button>
                    <button onClick={handleCancel} className="btn-shine"><span>Hủy bỏ thay đổi</span></button>
                </div>
            </form>
        </div>
    )
}

export default AlarmForm