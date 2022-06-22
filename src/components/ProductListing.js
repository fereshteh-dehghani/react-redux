import React from 'react'
import {useSelector} from 'react-redux';
import ProductComponents from './ProductComponents';
 const ProducListing = () =>{
     const products=useSelector( (state) => state)
     return(
         <>
         <h1>Product Listening</h1>
         <ProductComponents/>
         </>
     )
 } 
  export default ProducListing;