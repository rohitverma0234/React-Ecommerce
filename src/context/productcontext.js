import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from "../reducer/productReducer"

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const API = "https://api.pujakaitem.com/api/products";

    const initialState = {
        isLoading:false,
        isError:false,
        products:[],
        featureProducts:[],
        isSingleLoading:false,
        singleProduct:{}
    }

    const[state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async (url)=>{
        dispatch({type:"SET_LOADING"})
        try {
            const res = await axios.get(url)
            const products = await res.data
            // console.log(res)
            // console.log(products)
            dispatch({type:"MY_API_DATA", payload:products})
        } catch (error) {
            dispatch({type:"API_ERROR"})
        }
    }

    // my 2nd API call for SingleProduct Page
    const getSingleProduct = async(url) =>{
        dispatch({type:"SET_SINGLE_LOADING"})
        try {
            const res = await axios.get(url)
            const singleProduct = res.data
            dispatch({type:"MY_SINGLE_PRODUCT", payload:singleProduct})
        } catch (error) {
            dispatch({type:"SINGLE_ERROR"})
        }
    }


    useEffect(()=>{
        getProducts(API)
    },[])

    return (
        <AppContext.Provider value={{...state, getSingleProduct}}>
            {children}
        </AppContext.Provider>
    )
}

// custom hook:-

const useProductContext = () =>{
    return useContext(AppContext);
}

export { AppProvider, useProductContext}