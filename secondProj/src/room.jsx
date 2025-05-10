import {Suspense, useState} from "react";
import LoadingPage from "./LoadingPage";
import { useNavigate, useParams } from "react-router";



const Room = ()=>
    {

        const [isLit, setLit] = useState(true);
        const room =  useNavigate()

        const {id,name,} = useParams();

        console.log(id)


        console.log("Room Component")
        return <>
   

        <div className={isLit ? 'lit' : 'dark'}>the room is {isLit ? 'lit' : 'dark'}</div>
        
        <button className='btn btn-blue' onClick={()=>{setLit(!isLit)}}>flip</button>
        <button className="btn btn-warning" onClick={()=>{
          
          room('/post');
        }}>Post</button>
        

        
        </>




    }


export default Room;