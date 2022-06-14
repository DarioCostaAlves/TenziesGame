import React from "react"
import { formatTime } from "../utils/utils"

export default function Timer({time}){    

    const timer = formatTime(time)
    return(
        <div className="timer">
            <span className="digits">{timer.minutes}</span>
            <span>:</span>
            <span className="digits">{timer.seconds}</span>
            <span>:</span>
            <span className="digits">{timer.milliseconds}</span>
        </div>
    )
}