import {StoreContext} from "../store"
import {useStore,actions} from '../store'
import { useRef } from "react"


function App(){
    const [state,dispatch] = useStore()
    const {todo,todoInput}=state
    const todoInputRef=useRef();

    const handleSubmit=()=>{
        dispatch(actions.addTodo(todoInput))
        dispatch(actions.setTodoInput(''))
        todoInputRef.current.focus()

    }
    console.log(todo)
    return(
        <div>
            <input
                ref={todoInputRef}
                value={state.todoInput}
                placeholder="Enter todo"
                onChange={e=>{
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
            <button onClick={handleSubmit}>Add</button>
            {todo.map((Todo,index)=>(
                <li key={index}>{Todo}</li>
            ))}
        </div>
    )
}
export default App