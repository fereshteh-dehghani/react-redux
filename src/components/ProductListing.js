import React,{useEffect} from 'react'
import axios from 'axios';
import {useSelector} from 'react-redux';
import ProductComponents from './ProductComponents';
 const ProducListing = () =>{
     const products=useSelector( (state) => state)
      const fetchProducts = (acync) =>{

      }
     console.log(products);
     return(
        <div className='ui grid container'>
              <ProductComponents/>
        </div>
     )
 } 
  export default ProducListing;