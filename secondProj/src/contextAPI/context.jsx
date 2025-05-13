import { createContext, useState } from "react";


export const GlobalContext = createContext();


export default function ContextProvider({children}) {


    const [theme, setTheme] = useState('light');

    return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
        {children}
    </GlobalContext.Provider>
    )


}



