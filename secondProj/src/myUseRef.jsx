import { useRef } from "react";

function MyUseRef()
{

    const inputRef = useRef();

    function inputClick()
    {
        
        console.log(inputRef.current.value)
    }

    function inputChange(e){
        console.log(inputRef.current.value);
    }


    return <>
    
    <input type="text" ref={inputRef} onChange={(e)=>inputChange(e)} className="text-black  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800  dark:focus:ring-gray-700 dark:border-gray-800" />

    <input type="submit" onClick={inputClick} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" />
    </>
    
}
export default MyUseRef;




