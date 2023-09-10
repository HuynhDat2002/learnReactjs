
import { useState,useCallback,useMemo, useRef } from 'react';

function Total() {

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
    <>


        <input
          ref={nameRef}
          value={name}
          placeholder='Enter name...'
          onChange={e=>setName(e.target.value)}
        />
        <br/>
        <input
          value={price}
          placeholder='Enter price'
          onChange={e=>setPrice(e.target.value)}

        />
        <br/>
        <button onClick={handleSubmit}>Add</button>
        <br/>
        <h2>Total: {total}</h2>
        <ul>
          {products.map((product,index)=>(
            <li key={index}>{product.name}-{product.price}</li>
          ) )}
        </ul>
   
    </>
  );
}

export default Total;