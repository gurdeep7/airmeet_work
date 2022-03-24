import thunk from "redux-thunk";

const { combineReducers, createStore, applyMiddleware } = require("redux");
const { carReducer } = require("./carReducer");


const rootReducer = combineReducers({
    carsState: carReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))
console.log("entire Stare", store.getState())
