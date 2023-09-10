import { useReducer } from "react";

//useReducer
//1.init state
//2.action: down(state-1)/up(state+1)
//3.reducer
//4.dispatch


//init state
const initState=0;

//actions
const up_action = 'up'
const down_action='down'

const reducer = (state,action)=>{
    switch(action){
        case up_action:
            return  state+1;
        case down_action:
            return state-1;
        default:
            throw new Error('Invalid action')
        
    }
}
export default function Count(){

    const [count,dispatch] = useReducer(reducer,initState)
    //dispatch là hành động giúp action được kích hoạt và state được thay đổi
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(down_action)}>Down</button>
            <button onClick={()=>dispatch(up_action)}>Up</button>

        </div>
    )
}