import Context from "./Context.js"
import '../App.css'
import { ThemeContext } from "./ThemeContext.js"
import { useContext } from "react"

//1.Create Context
//2.Provider
//3.Consumer



export default function Main(){

  //Context
  const context = useContext(ThemeContext)
    console.log(context)
    return(
        <ThemeContext>

            <div>
                <button >Toggle Theme</button>
                <Context />
            </div>
    
        </ThemeContext>

    )
}