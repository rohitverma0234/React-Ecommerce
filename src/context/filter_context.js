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
    const sorting = (event) =>{
        let userValue = event.target.value;
        return dispatch({type:"GET_SORT_VALUE", payload:userValue})
    }

    // update the filter values
    const updateFilterValue = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({type:"UPDATE_FILTERS_VALUE" , payload:{name,value}})
    }

    // to sort the products
    useEffect(()=>{
        dispatch({type:"SORTING_PRODUCTS"})
    },[products, state.sorting_value])
  
        dispatch({type:"FILTER_PRODUCTS"})
        dispatch({type:"SORTING_PRODUCTS", payload:products})
    },[state.sorting_value, state.filters])  // eslint-disable-line react-hooks/exhaustive-deps


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