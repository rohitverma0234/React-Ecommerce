import { createContext, useContext, useEffect, useReducer } from "react"
import {useProductContext} from "./productcontext"
import reducer from "../reducer/filterReducer"

const FilterContext = createContext();


export const FilterContextProvider = ({ children }) => {

    const initailState = {
        filter_products : [],
        all_products: [],
        grid_view:true
    }

    const [state , dispatch] = useReducer(reducer , initailState)
    const {products} = useProductContext();

    // to set the grid view
    const setGridView = () =>{
        return dispatch({type:"SET_GRIDVIEW"})
    }


    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
    },[products])

    return (
        <FilterContext.Provider value={{ ...state, setGridView }}>
            {children}
        </FilterContext.Provider>
    )
}

// custom hook
export const useFilterContext = () =>{
    return useContext(FilterContext)
}