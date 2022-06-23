import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {selectedProducts} from  '../redux/actions/productActions'

 const ProductDetail = () =>{
     const product=useSelector(state => state.product)
     const dispatch = useDispatch();
     const {productId} = useParams();
     console.log(productId);


     const fetchproductDetail = async () => {
         const response = await axios 
         .get()
         .catch((err) => console.log(`Error : ${err}`));
         dispatch(selectedProducts(response.data));

     }
     return(
         <>
         <h1>ProductDetail</h1>
         </>
     )
 } 
  export default ProductDetail;