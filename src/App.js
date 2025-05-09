import "./App.css";
import { useEffect, useState } from "react";
import Carusoul from "./Components/Carusoul";
import OTP from "./Components/OTP";
import Pagination from "./Components/Pagination";
import ToastNotification from "./Components/ToastNotification";

function App() {
  const [isshow, setisshow] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [pause, setPause] = useState(false);
  const [timerId, settimerId] = useState(0);

  const handleStart = () => {
    if (hours < 0 || minutes < 0 || seconds <= 0) {
      alert("invalid field");
    } else {
      setisshow(true);
    }
  };
  const handleReset = () => {
    setisshow(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    clearInterval(timerId);
  };

  const handleInput = (e) => {
    const value = parseInt(e.target.value);
    const id = e.target.id;
    console.log(id);
    console.log(value);
    if (id === "hours") {
      setHours(value);
    } else if (id === "minutes") {
      setMinutes(value);
    } else {
      setSeconds(value);
    }
  };

  const runtimer = (sec, min, h, tid) => {
    if (sec > 0) {
      setSeconds((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setMinutes((m) => m - 1);
      setSeconds(59);
    } else {
      setHours((hr) => hr - 1);
      setMinutes(59);
      setSeconds(59);
    }

    if (sec === 0 && min === 0 && h === 0) {
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      clearInterval(tid);
      alert("time complete");
    }
  };


  const handleResume = ()=>{
    setPause(!true)
    runtimer(seconds, minutes, hours);
  }
  const handlePause = () => {
    setPause(!false);
    clearInterval(timerId);

  


  };


useEffect(() => {
    let tid;
    if (isshow) {
      tid = setInterval(() => {
        runtimer(seconds, minutes, hours,tid);
      }, 1000);

      settimerId(tid);
    }

    return () => {
      clearInterval(tid);
    };
  }, [isshow, hours, minutes, seconds]);



  
  return (
    <div className="App">
      {/* {!isshow ? (
        <>
          <div className="input-container">
            <div className="input-box">
              <input id="hours" placeholder="HH" onChange={handleInput} />
              <input id="minutes" placeholder="MM" onChange={handleInput} />
              <input id="seconds" placeholder="SS" onChange={handleInput} />
            </div>
            <button onClick={handleStart}>Start</button>
          </div>
        </>
      ) : (
        <>
          <div className="show-container">
            <div className="timer-box">
              <div>{hours < 10 ? `0${hours}` : hours}</div>
              <span>:</span>
              <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
              <span>:</span>
              <div> {seconds < 10 ? `0${seconds}` : seconds}</div>
            </div>

            <div className="btn">
              {pause ? (
                <>
                  <button onClick={handleResume} >Resume</button>
                </>
              ) : (
                <>
                  <button onClick={handlePause}>Pause</button>
                </>
              )}

              <button  onClick={handleReset}>  Reset</button>
            </div>
          </div>
        </>
      )} */}



      <>
        {/* <Carusoul/> */}
        <br/>
        {/* <OTP /> */}
        <br/>
        {/* <Pagination /> */}
        <br />
        <ToastNotification />
      </>
    </div>
  );
}

export default App;
