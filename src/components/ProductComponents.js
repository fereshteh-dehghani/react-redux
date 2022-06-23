import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
 const ProductComponents = () =>{
const products =useSelector((state)=>state.allProducts.products);
const renderList=products.map((product)=>{
    const {id , title , image ,price, category} =products;
    return(
        <div className='four column wide'>
            <link to={`products/${id}`}>
           <div className="ui link card">
           <div className='card'>
                <div className='image'>
                       <img src={image} alt={title}/>
                </div>
                <div className='content'>
                    <div className='header'>{title}</div>
                    <section className='meta price'>{price}</section>
                    <section className='meta'>{category}</section>

                </div>
            </div>
           </div>
           </link>
        </div>
    )

})
return (
    <>{renderList}</>
)
 } 
  export default ProductComponents;