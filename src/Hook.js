import React,{useState,useEffect,randomcolor} from 'react'
import color from "./randomcolor"




export const Hook = () => {
   const [count,setCount] = useState(0)
   
//    function increment(){
//     setCount(prev=>prev+1)
//    }
//    function decrement(){
//     setCount(prev=>prev-1)
//    }
//    function double(){
//     setCount(prev=>prev*prev)
//    }
//    useEffect(() => {
//     const intervalId=setInterval(()=>{
//         setCount(prev=>prev+1)
//     },1000)
//     return ()=>{
//         clearInterval(intervalId)
//     }
//    }, [])
   
   
   

   return(
    <div>
    
        <h1 >{count}</h1>
        {/* <button  onClick={increment}>increment</button> */}
        {/* <button onClick={decrement} >decrement</button>
        <button onClick={double} >Double</button> */}
    </div>
   )
}