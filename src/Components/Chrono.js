import {useState,useEffect} from "react";
import "../styles/Chrono.css"

const Chronometre=()=>{
    const[sec,setSec]=useState(0);
    const[min,setMin]=useState(0);
    const[hrs,setHrs]=useState(0);
    const[isRunning, setIsRunning]=useState(false);

    useEffect(()=>{
        let interval=null;

        if(isRunning){
            interval=setInterval(()=>{
                setSec(prevSec=>prevSec+1);
            },1000);
        }
        return ()=>clearInterval(interval)
    },[isRunning]);

    useEffect(()=>{
        if(sec>=60){
            setSec(0);
            setMin(prevMin=>prevMin+1);
        }
    },[sec]);

    useEffect(()=>{
        if(min>=60){
            setMin(0);
            setHrs(prevHrs=>prevHrs+1);
        }
    },[min]);

    const handleStart=()=>{
        setIsRunning(true);
    }

    const handleStop=()=>{
        setIsRunning(false);
    }
    
    const handleReset=()=>{
        setSec(0);
        setMin(0);
        setHrs(0);
        setIsRunning(false);
    };


    return(<div className="container">
        <div className="timer">{hrs.toString().padStart(2,"0")}:{min.toString().padStart(2,"0")}:{sec.toString().padStart(2,"0")}</div>
            <div className="clickButton">
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
            </div>
    </div>);
}

export default Chronometre;