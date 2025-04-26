import {React, useState} from "react";



const Room = ()=>
    {

        const [isLit, setLit] = useState(true);

        console.log("Room Component")
        return <>
        
        
        <div className={isLit ? 'lit' : 'dark'}>the room is {isLit ? 'lit' : 'dark'}</div>
        
        <button className='btn btn-blue' onClick={()=>{setLit(!isLit)}}>flip</button>
        
        
        </>




    }


export default Room;