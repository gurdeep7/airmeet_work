const { combineReducers, createStore } = require("redux");
const { carReducer } = require("./carReducer");


const rootReducer = combineReducers({
    carsState: carReducer
})

export const store = createStore(rootReducer)
console.log("entire Stare", store.getState())
