import React from 'react'

function Product(props) {
    console.log(props)
    const {productName, price} = props

    return (
        <div>
            <div>ÜRÜN BİLGİLERİ</div>

            <div>
                <div>İsim: {productName}</div>
                <div>Fiyat: {price}</div>
            </div>

        </div>
    )
}

export default Product