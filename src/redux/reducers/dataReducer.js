import Pedidos from '../../data/Pedidos.json'
import DataActionTypes from '../actions/actionTypes'

const initialState = {
    billingAddress: {},
    customer: {},
    payments: [],
    id: '',
    pointsOfSale: '',
    status: '',
    totals: {},
    loaded: false,
    error: null,
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case DataActionTypes.Delivery:
            return {...state, ...action.payload, loaded: true}
        default:
            return state;
    }
}

export default dataReducer;