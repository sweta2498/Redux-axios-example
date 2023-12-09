import { ActionTypes } from "../contants/action-type"

export const setProducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    };
};

export const selectedProducts=(products)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:products,
    };
};

export const removeSelectedProducts=()=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};
