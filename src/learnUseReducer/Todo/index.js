import { useReducer,useRef } from "react";
import reducer,{initState} from "./reducer.js";
import {setJob,addJob,deleteJob} from './actions.js'


//1.init state


//2.action


//3.reducer


//4.dispatch

export default function Todo(){
    const [state,dispatch]=useReducer(reducer,initState)

    const {job,jobs}=state

    const jobRef=useRef();
    const handleSubmit=()=>{
        dispatch(addJob(job))
        dispatch(setJob(''))
        jobRef.current.focus()
    }

    const handleDelete=(index)=>{
        dispatch(deleteJob(index))
    }

    return (
        <div>
            <h3>Todo</h3>
            <input 
                ref={jobRef}
                value={job}
                placeholder="Enter job"
                onChange={e=>{
                   dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job,index)=>(
                    <li key={index}>
                        {job} 
                        <span
                            style={{'padding':'10px'}}
                            onClick={()=>dispatch(deleteJob(index))}
                        >
                            &times;
                        </span>
                    </li>
                ))}

            </ul>
        </div>
    )
}