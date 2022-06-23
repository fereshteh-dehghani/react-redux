import { ActionTypes } from "../contants/actionTypes";
const initialState ={
    products:[],
}

//create reducers for Update State from actions
 export const productReducer =  (state=initialState,{type,payload}) =>{
     switch(type){
         case ActionTypes.SET_PRODUCTS:
             return {...state,payload};
             default :
             return state;
     }
 }