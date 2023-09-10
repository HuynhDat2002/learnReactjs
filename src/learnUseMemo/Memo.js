import { useState,memo } from "react";

function Content({onInscrease}){
    console.log('re-render');
    return (
        <>

        <h1>Hello</h1>
        <button onClick={onInscrease}>Inscrease</button>
        </>

    )
}

export default memo(Content);