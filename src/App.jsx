import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp} from '@fortawesome/free-solid-svg-icons'
import CountDown from './timer'
export var breakTime1 = 5;

function App() {


  
  const[breakTime, setBreakTime]= useState(5);
    const[session, setSession] = useState(25)
     
    useEffect(()=>{
      breakTime1=breakTime;
      console.log(breakTime1)
    },[breakTime])
   
    function incrementBreak(){
      if(breakTime<=60){
        setBreakTime(breakTime+1);
      }
    }
    
    function incrementSession(){
      
        if(session<=60){
          setSession(session+1);
         
        }
       
        
    }
    function decrementBreak(){
      if(breakTime>1){
        setBreakTime(breakTime-1);
      }
    }
    function decrementSession(){
      if(session>1){
        setSession(session-1);
      }
    }
      
   
  return (
    <>
      <div className="wrapper">
        <h2 id="name">25+5 Clock</h2>
        <div  className="settings 1" >
          <div id="break-label">Break Length</div>
          <button onClick={decrementBreak} id="break-decrement"  className="arrow">
          <FontAwesomeIcon icon={faArrowUp} rotation={180} size="2x" />
          </button>
          <div id="break-length" className="breakNumber">{breakTime}</div>
          <button onClick={incrementBreak} id="break-increment">
          <FontAwesomeIcon icon={faArrowUp} size="2x" />
</button>
        </div>
        <div className="settings 2">
          <div id="session-label">Session Length</div>
          <button onClick={decrementSession} id="session-decrement" className="arrow">
          <FontAwesomeIcon icon={faArrowUp} rotation={180} size="2x" />
          </button>
          <div id="session-length" className="breakNumber">{session}</div>
          <button onClick={incrementSession} id="session-increment" >
          <FontAwesomeIcon icon={faArrowUp} size="2x" />
          </button>
          
      

        </div>
        
        

          
           <div id = "tiimer">
           <CountDown minutes={session}  seconds={0}  />
           </div>
          <div id="author">
            Designed and Coded <br></br> by Kirill Logunov
          </div>
         
      </div>
    </>
  )
}

export default App
