import { useState } from "react";

function UseStateDemo()
{
    const [count,setCount]=useState(0);
    const [color1,setColor1]=useState('blue')
    
    // function Inc()
    // {
    //     setCount(count+1)

    // }
    // function Dec()
    // {
    //      setCount(count-1)
    // }
  

    return(
        <>
        <button onClick={()=>setCount(count-1)}>-</button>
        <span>{count}</span>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setColor1('red')}>Click to change Color</button>
        <h1>{color1}</h1>
        </>
    )

}
export default UseStateDemo