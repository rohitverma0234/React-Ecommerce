import axios from 'axios';
import React, { createContext, useContext, useEffect } from 'react'

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const API = "https://api.pujakaitem.com/api/products";

    const getProduct = async (url)=>{
        const res = await axios.get(url)
        const product = await res.data
        // console.log(res)
        console.log(product)
        
    }

    useEffect(()=>{
        getProduct(API)
    },[])

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