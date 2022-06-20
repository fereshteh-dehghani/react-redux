import { combineReducers } from "redux";
import { productReducer } from "./productreducers";
  const Reducers = combineReducers({
   allProducts: productReducer,
})
export default Reducers;