import React, { createContext, useContext } from 'react'

const AppContext = createContext();

const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={{myName:"Rohit"}}>
            {children}
        </AppContext.Provider>
    )
}

// custom hook:-

const useProductContext = () =>{
    return useContext(AppContext);
}

export { AppProvider, useProductContext}