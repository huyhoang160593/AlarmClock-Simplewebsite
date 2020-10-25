import React, { useState, useEffect } from 'react'
import AlarmForm from './AlarmForm'
import AlarmService from '../services/alarms'

const AlarmManagerScreen = () =>{
    const [alarms, setAlarms] = useState([])
    const [modifyAlarm, setModifyAlarm] = useState({})

    const addAlarm = (alarmObject) => {
        !alarmObject.id 
        ?   AlarmService.create(alarmObject)
            .then( returnAlarm => {
                setAlarms(alarms.concat(returnAlarm))
            })
        :   AlarmService.update(alarmObject.id, alarmObject)
        .then( returnAlarm => {
            setAlarms(alarms.map(alarm => {
                return alarm.id === returnAlarm.id ? returnAlarm : alarm
            }
                ))
        })

    }

    useEffect(() =>{
        AlarmService.getAll().then(alarms=>setAlarms(alarms))
    },[])

    const handleModify = (alarmObject) =>{
        setModifyAlarm(alarmObject)
    }

    const handleDelete = (id) =>{
        AlarmService.remove(id)
            .then( _ =>{
                setAlarms(alarms.filter(alarm => alarm.id !== id))
            })
    }
    return(
        <div className="alarm-manager">
            <h1 id="manager-title">Alarm Manager <span>version 0.0.1</span></h1>
            <div className="add-alarm">
                <AlarmForm createAlarm = {addAlarm} modifyAlarm={modifyAlarm}/>
            </div>
            <div className="alarm-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Thời gian</th>
                            <th>Code</th>
                            <th>Tin nhắn</th>
                            <th>Thời gian tồn tại(s)</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alarms.map(alarm=>{
                                console.log(alarm)
                                return(
                                    <tr key={alarm.id}>
                                        <td>{alarm.id}</td>
                                        <td>{alarm.hours}:{alarm.minutes}</td>
                                        <td>{alarm.code}</td>
                                        <td>{alarm.message}</td>
                                        <td>{alarm.timeToExpire}</td>
                                        <td>
                                            <button className="action-button btn-pill" onClick={() => handleModify(alarm)}>Chỉnh sửa</button>
                                            <button className="action-button btn-shine" onClick={() => handleDelete(alarm.id)}>Xóa</button>
                                        </td>
                                    </tr>
                                )                               
                            })                               
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AlarmManagerScreen