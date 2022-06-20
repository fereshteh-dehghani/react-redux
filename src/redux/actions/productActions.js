import { ActionTypes } from "../contants/actionTypes"
export const setProducts = (products) =>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payloads:products,
    }
}
 export const selectedProducts = (products) =>{
     return{
         type:ActionTypes.SELECTED_PRODUCTS,
         payloads:products,
     }
 }
 export const removeSelectedProducts = (products) =>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCTS,
        payloads:products,
    }
}