import { createContext, useReducer, useState } from "react";
import reducer from "./reducer";




export const GlobalContext = createContext();

let data = {
    user: {
        name: 'Arif',
        email: 'arif@gmail.com'
    },
    theme: 'Light',
    cartCount: 0
}

function ContextProvider({children}) {
    
    const [state, dispatch] = useReducer(reducer,data);
    // const [theme, setTheme] = useState('light');

    

return (
    <>

<GlobalContext.Provider value={{state, dispatch}}>
    {children}
</GlobalContext.Provider>
{/* 
<GlobalContext.Provider value={{theme, setTheme}}>
    {children}
</GlobalContext.Provider> */}
</>

)



}
export default ContextProvider;




