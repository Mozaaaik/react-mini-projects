import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slice/productSlice'
import { addToBasket } from '../redux/slice/basketSlice'
import '../css/ProductDetails.css'
import { BiPlusCircle } from "react-icons/bi";
import { LuCircleMinus } from "react-icons/lu";
import { useState } from 'react'



function ProductDetails() {

    const [count, setCount] = useState(0)

    const { id } = useParams()
    const { products, selectedProduct } = useSelector((store) => store.products) /* store.products initialState'in tamamıc */

    const { title, price, description, image } = selectedProduct

    const increment = () => {
        setCount(prev => (
            prev + 1
        ))
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const addBasket = () => {
        const payload = { id, title, price, image, description, count }
        dispatch(addToBasket(payload))
    }

    const dispatch = useDispatch()

    useEffect(() => {
        getProductById()
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (id == product.id) {
                dispatch(setSelectedProduct(product)) /* action.payload yerine geçer notu product.slice da */
            }
        })
    }


    return (
        <div className='product-details'>
            <img src={image} alt='Image not found' />

            <div className='description-tp'>
                <h1 className='title'>{title}</h1>
                <p className='description'>{description}</p>
                <h4 className='price'>{price}</h4>
                <div className='iconButton'>
                    <div className='plus-minus'>
                        <BiPlusCircle onClick={increment} className='icon' /> <span style={{ marginRight: '15px' }}>{count}</span> <LuCircleMinus onClick={decrement} className='icon' />
                    </div>
                    <button
                        className='details-button'
                        onClick={addBasket}
                    >Sepete ekle</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails