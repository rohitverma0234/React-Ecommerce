import { createContext, useContext, useEffect, useReducer } from "react"
import {useProductContext} from "./productcontext"
import reducer from "../reducer/filterReducer"

const FilterContext = createContext();


export const FilterContextProvider = ({ children }) => {

    const initailState = {
        filter_products : [],
        all_products: [],
        grid_view:false,
    }

    const [state , dispatch] = useReducer(reducer , initailState)
    const {products} = useProductContext();

    // to set the grid view:-
    const setGridView = () =>{
        return dispatch({type:"SET_GRIDVIEW"})
    }

    // to set list view:-
    const setListView = () =>{
        return dispatch({type:"SET_LISTVIEW"})
    }


    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
    },[products])

    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView }}>
            {children}
        </FilterContext.Provider>
    )
}

// custom hook
export const useFilterContext = () =>{
    return useContext(FilterContext)
}