import { ThemeContext } from "./ThemeContext.js"
import { useContext } from "react"
export default function Paragraph(){

    const context = useContext(ThemeContext)
    console.log(context.theme)
    
    return (
        <p className={context.theme}>
            lorem ipsum dolor sit amet, consectetur adip
        </p>
    )
} 