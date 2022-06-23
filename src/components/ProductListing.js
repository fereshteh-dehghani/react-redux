import React,{useEffect} from 'react'
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux';
import ProductComponents from './ProductComponents';
import {setProducts} from '../redux/actions/productActions'
 const ProducListing = () =>{
     const products=useSelector( (state) => state)
      const dispatch=useDispatch();
      const fetchProducts = async() =>{
const response= await axios.get('https://fakestoreapi.com/products')
.catch((err)=>console.log('Error :',err));
console.log(response.data)
dispatch(setProducts)

      }
     console.log(products);
     return(
        <div className='ui grid container'>
              <ProductComponents/>
        </div>
     )
 } 
  export default ProducListing;