const productReducer = (state, action) => {
    // if(action.type==="SET_LOADING"){
    //     return{
    //         ...state,
    //         isLoading:true
    //     }
    // }

    // if(action.type==="MY_API_DATA"){
    //     const featureData = action.payload.filter((curElem)=>{
    //               return curElem.featured === true;
    //        })
    //         return{
    //             ...state,
    //             isLoading:false,
    //             products:action.payload
    //             featureProducts:featureData
    //         }
    //     }


    // if(action.type==="API_ERROR"){
    //     return{
    //         ...state,
    //         isLoading:false,
    //         isError:true
    //     }
    // }

    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }

        case "MY_API_DATA":
            const featureData = action.payload.filter((curElem) => {
                return curElem.featured === true;
            })

            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureData
            }

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        //  2nd api actions:-
        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true
            }

        case "MY_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload
            }

        case "SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true
            }


        default:
            return state
    }
}

export default productReducer