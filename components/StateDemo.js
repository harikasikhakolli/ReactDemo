import { useState } from "react"

function StateDemo()
{
    const [count,setCount]=useState(5)
    function dec()
    {
       setCount(count-1); 
    }
    function inc()
    {
        setCount(count+1);
    }
    const isLoggedIn=true
     if(isLoggedIn){
        return(<h1>Welcome Harika</h1>)
     }
     else{
         return(<h1>Welcome guest</h1>)
     }
   

   

}
export default StateDemo