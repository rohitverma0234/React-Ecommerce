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
    const sorting = (event) =>{
        let userValue = event.target.value;
        return dispatch({type:"GET_SORT_VALUE", payload:userValue})
    }

    // to sort the products
    useEffect(()=>{
        dispatch({type:"SORTING_PRODUCTS"})
    },[products, state.sorting_value])


    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
    },[products])

    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting }}>
            {children}
        </FilterContext.Provider>
    )
}

// custom hook
export const useFilterContext = () =>{
    return useContext(FilterContext)
}