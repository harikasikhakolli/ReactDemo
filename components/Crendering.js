function User(){
    return(
        <h1>Welcome User</h1>
    )
}
function Guest()
{
    return(
        <h2>Welcome guest</h2>
    )
}

function Crendering(){
  
      const isLoggedIn=false
//    if(isLoggedIn){
//        return <User/>
//    }
//    else{
//        return<Guest/>
//    }
   
     return(
        //  (isLoggedIn)&&alert('Hello Harika')

        (isLoggedIn)?<User/>:<Guest/>

     )


}
export default Crendering