import { formatTime } from '../utils/utils'
export default function Results({ time }){
    const timer = formatTime(time)

    return(
        <div className="best-time">
            <b>Best time: </b>
            <span className="digits">{timer.minutes}</span>
            <span>:</span>
            <span className="digits">{timer.seconds}</span>
            <span>:</span>
            <span className="digits">{timer.milliseconds}</span>
        </div>
    )
}