import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom'

function Product({ product }) {

    const {id, title, price, description, category, image, rating} = product

    const navigate = useNavigate()


    return (
        <div className='flex-column card'>
            <img className='image' src={image} alt='Image not found' />
            <div>
                <p style={{textAlign: 'center', height: '50px'}}>{ title }</p>
                <h3 style={{textAlign: 'center'}}>{ price }</h3>
            </div>

            <div>
                <button onClick={ () => { navigate('/product-details/' + id) } } className='button-details'>Go into details</button>
            </div>
        </div>
    )
}

export default Product