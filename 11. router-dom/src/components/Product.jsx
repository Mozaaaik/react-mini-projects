import React from 'react'
import { useNavigate } from 'react-router-dom'

function Product({ product }) {

    const {id, name, price} = product

    const navigate = useNavigate()

    return (
        <div>
            <h1>Ürün Detayı</h1>
            <h3>İsim: {name}</h3>
            <h3>Fiyat: {price}</h3>
            <button onClick={() => { navigate('/product-details/' + id) }}>Detayına Git</button> {/* Butona tıklanıldığında belirtlen url'ye gider*/}
        </div>
    )
}

export default Product