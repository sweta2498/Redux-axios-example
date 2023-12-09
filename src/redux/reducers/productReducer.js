import { ActionTypes } from "../contants/action-type";


const initialstate={
    products:[
        {
            id:1,
            title:"Dipesh",
            category:"programmer",
        },
    ],
};
export const productReducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
        default:
            return state;
    }
}

export const selectedProductReducer=(state={},{type,payload})=>{
    switch(type)
    {
        case ActionTypes.SELECTED_PRODUCT:
            return{...state,...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}