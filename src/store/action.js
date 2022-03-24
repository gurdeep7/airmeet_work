import { GET_CARS_LOADING, GET_CARS_SUCCESS } from "./actionTypes";

export const getcarloading = () =>({
    type:GET_CARS_LOADING,
  
})

export const getcarsuccess = (data) =>({
    type:GET_CARS_SUCCESS,
    payload:data
})