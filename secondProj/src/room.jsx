import {Suspense, useState, useContext} from "react";
import LoadingPage from "./LoadingPage";
import { useNavigate, useParams } from "react-router";
import { GlobalContext } from "./contextAPI/context";



const Room = ()=>
    {



      const {theme} = useContext(GlobalContext);



      // console.log(theme)


        const [isLit, setLit] = useState(true);
        const room =  useNavigate()

        const {id,name,} = useParams();

        console.log(id)


        console.log("Room Component")
        return <>
   

        <div className={isLit ? 'lit' : 'dark'}>the room is {isLit ? 'lit' : 'dark'}</div>
     
        <div>Theme is : {theme}</div>
        
        <button className='btn btn-blue' onClick={()=>{setLit(!isLit)}}>flip</button>
        <button className="btn btn-warning" onClick={()=>{
          
          room('/post');
        }}>Post</button>
        

        
        </>




    }


export default Room;