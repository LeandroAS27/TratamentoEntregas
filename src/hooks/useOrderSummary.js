import { useMemo } from "react"
import { useSelector } from "react-redux";

const useOrderSummary = (fulfillmentId, skus) => {
    const {fulfillments} = useSelector(rootReducer => rootReducer.dataReducer)

    const selectedFulfillment = fulfillments?.[fulfillmentId] || {};

    const items = selectedFulfillment?.items || {};

    const frete = selectedFulfillment?.freightCosts?.totalPrice;

    const subTotal = useMemo(() => {
        if(!Array.isArray(skus) || skus.length === 0) return 0;
        return skus.reduce((total, sku) => {
            const item = items[sku] || {};
            const quantity = item.quantity || 0;
            const price = item.price || 0;
            return total + quantity * price;
        }, 0)
    }, [items, skus])

    const totalItems = useMemo(() => {
        if(!Array.isArray(skus) || skus.length === 0) return 0;
        return skus.reduce((total, sku) => {
            const item = items[sku] || {};
            return total + (item.quantity || 0);
        }, 0)
    }, [items, skus])

    const Total = subTotal + frete;

    return{
        totalItems,
        subTotal,
        Total,
        frete
    };
};

export default useOrderSummary;