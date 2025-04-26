import { useEffect, useState } from "react";
function  MyUseEffect() {


    const [isCounter, setCounter] = useState(0);


    console.log("Component Render")

    useEffect(()=>{
        console.log(isCounter);
        return ()=>{
            
        }
    },[isCounter])
    
    const counter = ()=> setCounter(isCounter + 1)
    return <>

    <h1>{isCounter}</h1>
    <div>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={()=>{ counter()}}>Increase Counter Value</button>
    </div>
    
    </>
    
}

export default MyUseEffect;

