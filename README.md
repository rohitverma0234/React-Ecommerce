# useReducer Hook:
State management using useReducer Hook:-<br/>
const initailState = { filter_products : [] , all_products: [] }<br/>
const [state, dispatch] = useReducer(reducer, initialState)<br/>

state is the initialState and dispatch function calls the reducer function which will calls the action method in reducer function.
