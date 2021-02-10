import { SEND_NAME, CLEAR_ORDER, GET_ORDER } from "./types";

export function getPizzaName(name) {
    return {
        type: SEND_NAME,
        payload: name
    }
}

export function clearOrder() {
    return {
        type: CLEAR_ORDER,
        payload: []
    }
}

export function getOrder() {
    return {
        type: GET_ORDER,
    }
}