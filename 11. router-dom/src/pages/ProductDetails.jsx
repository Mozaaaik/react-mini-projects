import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/products.jsx'
import Product from '../components/Product'

function ProductDetails() {
    
    const { id } = useParams() 


    return (
        <div>
            <h1>Ürün detayları</h1>
            <hr/>
            {
                products && products.map((product) => {
                    if (product.id == id) return <Product key={product.id} product = {product} />
                })
            }
        </div>
    )
}

export default ProductDetails