import { DEC_PAGE, GET_CARS_LOADING, GET_CARS_SUCCESS, INC_PAGE } from "./actionTypes";

export const getcarloading = () =>({
    type:GET_CARS_LOADING,
  
})

export const getcarsuccess = (data) =>({
    type:GET_CARS_SUCCESS,
    payload:data
})

export const incrementPage = ()=>({
    type:INC_PAGE
})

export const decrementPage = ()=>({
    type:DEC_PAGE
})

