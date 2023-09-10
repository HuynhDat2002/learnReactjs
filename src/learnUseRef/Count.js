import {useRef,useState} from 'react'

// Lưu các giá trị qua một tham chiếu bên ngoài
// function component

function Count(){

    const [count,setCount]=useState(0);

    const timerId = useRef()

    const handleStart=()=>{
        timerId.current=setInterval(()=>{
            setCount(prev=>prev+1)
        },1000) 
    }
    
    const handleStop=()=>{
        clearInterval(timerId.current);
    }

    
    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={handleStart}
            >
                Start
            </button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Count;