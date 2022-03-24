import { DEC_PAGE, GET_CARS_LOADING, GET_CARS_SUCCESS, INC_PAGE } from "./actionTypes"


const init = {cars:[],loading:true,page:1}

export const carReducer = (state = init,{type,payload,loading,page})=>{
    switch(type){
        case GET_CARS_LOADING:{
            state.loading = true
            return{
            
            ...state
        }}
        case GET_CARS_SUCCESS:
        { state.cars = payload
            
            return{
                
               ...state,
                loading:false
            }
            }
            case INC_PAGE:{
                ++state.page
                return{
                    ...state,
                }
            }
            case DEC_PAGE:{
                --state.page
                return{
                    ...state,
                }
            }
            


            default: return state
    }
}