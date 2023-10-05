import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause,  faPlay,faArrowsRotate} from '@fortawesome/free-solid-svg-icons'
import { breakTime1 } from "./App";
import alarm from "./assets/alarm.wav" 
export default function  CountDown ({ minutes , seconds  }){

  const [paused, setPaused] = React.useState(true);
  const [over, setOver] = React.useState(false);
  const [[ m, s], setTime] = React.useState([ minutes, seconds]);
 const  [colorr,setColor] = useState(true);
 const  [breakOrSession, setBreakOrSession] = useState('Session');
 
 
  useEffect(()=>{
    setTime([ parseInt(minutes), parseInt(seconds)]);
  },[minutes])
  useEffect(()=>{
    
    if(m=== 0){
     
      setColor(false)
    }
    if(m>=1){
      setColor(true)
    }
    if(m===0 && s===0){

    }
  },[m])
  const tick = () => {
   
    if (paused || over) return;
    
    if ( m === 0 && s === 0) {
      setOver(true);
      if(breakOrSession ==="Session"){
        console.log("hi")
        var alarm  = document.getElementById("alarm");
        alarm.play();
        document.getElementById('timer-label').innerHTML = "Break"
        setBreakOrSession('Break')
      } else{
        document.getElementById('timer-label').innerHTML = "Session"
        setBreakOrSession('Session')
      }
   
    } else if (s == 0) {
      setTime([ m - 1, 59]);
    } else {
      setTime([ m, s - 1]);
    }
  };
    useEffect(()=>{
      if(over===true){
        setTime([breakTime1,0])
        setPaused(false)
        setOver(false)
        
      }
    },[over])
  const reset = () => {
    setTime([ parseInt(minutes), parseInt(seconds)]);
    setPaused(true);
    setOver(false);
    
    document.getElementById('timer-label').innerHTML = "Session"
    document.getElementById('session-length').innerHTML = 25;
    document.getElementById('break-length').innerHTML = 5;
    document.getElementById('timer-left').innerHTML = "25:00";

  };
 
  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });
   
  

  return (
<div>
<div id="timer" style = {colorr?{color: "white"}:{color:"red"}} className='timer'>
          <div className='timer-wrapper'>
            <div id="timer-label"> Session </div>
            <div id="timer-left">{`${m
        .toString()
        .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</div>
        <div>{over ? "Time's up!" : ''}</div>
          </div>
        </div>
        
      
      
      <button   id="start_stop" onClick={() => setPaused(!paused)}>
    
            <FontAwesomeIcon icon={faPlay} size="2xl" style={{color: "#fafcff",}} />
          <FontAwesomeIcon icon={faPause} size="2xl" style={{color: "#f6f7f9",}} />
           
      </button>
      <button id="reset" onClick={() => reset()}>  <FontAwesomeIcon icon={faArrowsRotate} size="2xl" style={{color: "#fafcff",}} /></button>
      <audio id="alarm" src={alarm}></audio>
    </div>
  );
};