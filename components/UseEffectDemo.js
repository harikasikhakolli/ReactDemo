import { useEffect, useState } from "react";
import { Button } from '@material-ui/core';
import {Home} from '@material-ui/icons'
import SaveIcon from '@material-ui/icons/Save';
function UseEffectDemo()
{
    const [count,setCount]=useState(4)
    const [color1,setColor1]=useState('red')
    useEffect(()=>{
        document.title = `You clicked ${count} times`;
    },[count])
    return(
        <>
      <Button 
      size="large" 
      variant="text" 
      color="primary"
      startIcon={<Home/>}
      endIcon={<SaveIcon />}
      onClick={()=>setCount(count+1)}>
          +
      </Button>
      <span>{count}</span>
      <button onClick={()=>setCount(count-1)}>-</button>
       <br/>
      <Button size="small" variant="contained" color="secondary" disabled onClick={()=>setColor1('yellow')}>Click to change color</Button>
      <span>{color1}</span>

      </>

    )
}
export default UseEffectDemo