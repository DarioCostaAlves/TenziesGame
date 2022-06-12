import { useState, useEffect } from "react";
export default function Countdown(props) {
    const { startingMinutes = 1, startingSeconds = 0 } = props;
    const [mins, setMinutes] = useState(startingMinutes);
    const [secs, setSeconds] = useState(startingSeconds);
    useEffect(() => {
      let sampleInterval = setInterval(() => {
        if (secs > 0) {
          setSeconds(secs - 1);
        }
        if (secs === 0) {
          if (mins === 0) {
            clearInterval(sampleInterval);
          } else {
            setMinutes(mins - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => {
        clearInterval(sampleInterval);
      };
    });
  
    return (
      <div>
        { (!mins && !secs) ? "" : (
          <p>
            {" "}
            {mins}:{secs < 10 ? `0${secs}` : secs}
          </p>
        )}
      </div>
    );
  }
  