import { LOAD_ORDERS } from "../actions/orderActions";

const initialState = {
    orders: []
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        default:
            return state;
    }
}