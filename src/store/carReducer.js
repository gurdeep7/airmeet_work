import { GET_CARS_LOADING, GET_CARS_SUCCESS } from "./actionTypes"


const init = {cars:[],loading:true}

export const carReducer = (state = init,{type,payload,loading})=>{
    switch(type){
        case GET_CARS_LOADING:
            return{
            loading:true
        }
        case GET_CARS_SUCCESS:
        { state.cars = payload
            return{
                
               state,
                loading:false
            }
}
            default: return state
    }
}