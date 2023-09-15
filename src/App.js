import logo from './logo.svg';
import './App.css';
import Content from './learnUseMemo/Memo.js';
import ChatApp from './learnUseEffect/ChatApp.js';
import SetTimeout from './learnUseEffect/SetTimeout.js';
import Cleanup from './learnUseEffect/Cleanup.js';
import Count from './learnUseReducer/Count.js';
import Total from './learnUseMemo/TotalProducts.js';
import {AppStore} from './store';
import { AppImperative } from './learnUseImperativeHandle';
// import Todo from './learnUseReducer/Todo.js'
import MainContext from './learnContext/Main.js'
import { useState,useCallback,useMemo,memo, useRef } from 'react';

function App() {

  const [show,setShow]=useState(false)

  const [count,setCount]=useState(0)

  const handleInscrease = useCallback(()=>{
      setCount(prev=>prev+1)
  },[])


  // useMemo
  const [name,setName]=useState('')
  const [price,setPrice]=useState('')
  const [products,setProducts]=useState([])

  //focus name input
  const nameRef=useRef()
  

  const handleSubmit=()=>{
    setProducts([...products,{
      name:name,
      price:parseInt(price)
    }])
    setName('')
    setPrice('')

    nameRef.current.focus()
  }

  const total=useMemo(()=>{
    const result=products.reduce((result,prod)=>{
      console.log('tinh toan lai...')
     return result+prod.price
    },0)
    return result;
  },[products])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={()=>setShow(!show)}>Toggle</button>
        {show && <AppImperative/>}
      </header>
    </div>
  );
}

export default App;