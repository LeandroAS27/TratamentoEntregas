export const LOAD_ORDERS = "LOAD_ORDERS"

export const loadOrders = (orders) => {
    return{
        type: LOAD_ORDERS,
        payload: orders
    }
}