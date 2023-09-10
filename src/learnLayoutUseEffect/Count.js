import { useLayoutEffect,useState } from "react";

// useLayoutEffect
// 1.cập nhật lại state
// 2.cập nhật lại DOM
// 3.goị cleanup nếu deps thay đổi
// 4.gọi useLayoutEffect callback
// 5.render lại UI


function Count(){
    const [count,setCount] = useState(0);
    
    useLayoutEffect(()=>{
        if(count>3) setCount(0);
    },[count])

    const handleRun=()=>{
        setCount(prev=>prev+1);
    }   
    
    return(
        <div>
            <h1>{count}</h1>
            <button
                onClick={handleRun}
            >
            Run
            </button>
        </div>
    )
}

export default Count;