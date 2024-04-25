import { createContext, useContext, useEffect, useReducer } from "react"
import {useProductContext} from "./productcontext"
import reducer from "../reducer/filterReducer"

const FilterContext = createContext();


export const FilterContextProvider = ({ children }) => {

    const initailState = {
        filter_products : [],
        all_products: [],
        grid_view:false,
        sorting_value:"lowest",
        filters:{
            text:""
        }
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

    // sorting function
    const sorting = () =>{
        return dispatch({type:"GET_SORT_VALUE"})
    }

    // update the filter values
    const updateFilterValue = () =>{
        return 
    }

    // to sort the products
    useEffect(()=>{
        dispatch({type:"SORTING_PRODUCTS", payload:products})
    },[state.sorting_value])  // eslint-disable-line react-hooks/exhaustive-deps


    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
    },[products])

    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue }}>
            {children}
        </FilterContext.Provider>
    )
}

// custom hook
export const useFilterContext = () =>{
    return useContext(FilterContext)
}