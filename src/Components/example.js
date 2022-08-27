import React from 'react';
import {useRef, useState, useEffect} from 'react'


const Example = () => {
    const [daysTimer, setDaysTimer] = useState('00')
    const [hoursTimer, setHoursTimer] = useState('00')
    const [minutesTimer, setMinutesTimer] = useState('00')
    const [secondsTimer, setSecondsTimer] = useState('00')
  
    let interval = useRef()
  
    const countDown = () => {
        var eventDate = new Date ("December 25,2022 00:00:00");

        interval = setInterval(() => {
            var today = new Date ()
            var currentTime = today.getTime()
            var eventTime = eventDate.getTime()
            var remainingTime = eventTime - currentTime;

            var seconds = Math.floor(remainingTime/1000)
            var minutes = Math.floor(seconds/60);
            var hours = Math.floor(minutes/60)
            var days = Math.floor(hours/24)

            seconds = seconds % 60
            minutes = minutes % 60
            hours = hours % 24

            seconds = (seconds<10) ? "0"+ seconds : seconds;
            minutes = (minutes<10) ? "0"+ minutes : minutes;
            hours = (hours<10) ? "0"+ hours : hours;
            days = (days<10) ? "0"+ days : days;

        if (remainingTime < 0) {
            clearInterval(interval.current)
    }   else {
    setDaysTimer(days)
    setHoursTimer(hours)
    setMinutesTimer(minutes)
    setSecondsTimer(seconds)
  }
        }, 1000)
    }
    
    useEffect(() => {
        countDown();
        return() =>{
            clearInterval(interval.current)
        }
    })

    return ( 
        <div className="Example">
            <div className="countdown-container">
                <span>{daysTimer}</span>
                <span>{hoursTimer}</span>
                <span>{minutesTimer}</span>
                <span>{secondsTimer}</span>
                <span>Days</span>
                <span>Hours</span>
                <span>Minutes</span>
                <span>Seconds</span>
            </div>
        </div>
     );
}

export default Example;