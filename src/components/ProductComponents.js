import React from 'react'
import {useSelector} from 'react'
 const ProductComponents = () =>{
const products =useSelector((state)=>state.allProducts.products)
const {id , title} =products;
     return(
         <div className='four column wide'>
             <div className='card'>
                 <div className='image'>
                
                 </div>
                 <div className='content'>
                     <div className='header'>{title}</div>
                 </div>
             </div>
         </div>
     )
 } 
  export default ProductComponents;