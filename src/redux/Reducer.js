import { combineReducers } from "redux";
import { CLEAR_ORDER, GET_ORDER, SEND_NAME } from "./types";

const initialStore = {
    currentPizza: [],
    list: []
}

export const rootReducer = combineReducers({
    currentPizza: getPizzaName,
    list: getPizzaName
})

function getPizzaName(state = initialStore, action) {
    switch(action.type) {
        case SEND_NAME:
            return {
                ...state,
                currentPizza: state.currentPizza.concat(action.payload),
                list: state.list.concat(action.payload)
            }
        case CLEAR_ORDER:
            return {
                ...state,
                currentPizza: action.payload,
            }
        default: return state;
    }
}
