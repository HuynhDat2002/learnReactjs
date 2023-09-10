import {useEffect,useState} from 'react';


function SetTimeout(){
    const [countdown,setCountdown]=useState(10);

    useEffect(()=>{
         const timer = countdown>0 && setInterval(()=>{
             setCountdown(countdown-1)
        },1000);
        return ()=>clearInterval(timer)
        //countdown===0 && clearInterval(setCountdown(10))

    },[countdown])

    

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default SetTimeout;