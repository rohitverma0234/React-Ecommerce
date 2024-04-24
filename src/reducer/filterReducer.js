const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload]
            }

        case "SET_GRIDVIEW":
            return {
                ...state,
                grid_view: true
            }

        case "SET_LISTVIEW":
            return {
                ...state,
                grid_view: false
            }

        case "GET_SORT_VALUE":
            let userSortValue = document.getElementById("sort");
            let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
            console.log(sort_value)
            return {
                ...state,
                sorting_value: sort_value,
            }

        // case "SORTING_PRODUCTS":
        //     let newSortData;
        //     let tempSortProduct = [...action.payload]

        //     if (state.sorting_value === "lowest"){
        //         const sortingProducts = (a,b) =>{
        //             return a.price - b.price
        //         }
        //         newSortData = tempSortProduct.sort(sortingProducts)
        //     }

        //     if (state.sorting_value === "highest"){
        //         const sortingProducts = (a,b) =>{
        //             return b.price - a.price
        //         }
        //         newSortData = tempSortProduct.sort(sortingProducts)
        //     }

        //     if (state.sorting_value === "a-z"){
        //         newSortData = tempSortProduct.sort((a,b)=>{
        //             return a.name.localeCompare(b.name)
        //         })
        //     }

        //     if (state.sorting_value === "z-a"){
        //         newSortData = tempSortProduct.sort((a,b)=>{
        //             return b.name.localeCompare(a.name)
        //         })
        //     }


        case "SORTING_PRODUCTS":
            const tempSortProduct = [...action.payload];

            // Helper function to determine the sorting method
            const getSortFunction = (sortingValue) => {
                switch (sortingValue) {
                    case "lowest":
                        return (a, b) => a.price - b.price;
                    case "highest":
                        return (a, b) => b.price - a.price;
                    case "a-z":
                        return (a, b) => a.name.localeCompare(b.name);
                    case "z-a":
                        return (a, b) => b.name.localeCompare(a.name);
                    default:
                        return undefined;  // or some default sorting method
                }
            };

            // Determine the correct sorting function based on sorting_value
            const sortingFunction = getSortFunction(state.sorting_value);

            // Apply the sorting function
            let newSortData = tempSortProduct.sort(sortingFunction);
            

            return {
                ...state,
                filter_products: newSortData
            }

        default:
            return state;
    }
}

export default filterReducer;