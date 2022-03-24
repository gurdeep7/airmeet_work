import { GET_CARS_LOADING, GET_CARS_SUCCESS } from "./actionTypes"


const init = {cars:[],loading:false}

export const carReducer = (state = init,{type,payload,loading})=>{
    switch(type){
        case GET_CARS_LOADING:
            return{
            loading:true
        }
        case GET_CARS_SUCCESS:
        { state.cars = payload
            console.log(state)
            return{
                
               state:payload,
                loading:false
            }
}
            default: return state
    }
}