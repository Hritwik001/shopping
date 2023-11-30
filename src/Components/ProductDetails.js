import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import product from '../product.json';
import { useState } from 'react';


const ProductDetails = () => {

    const location = useLocation()
    const prodId = location.state.id

    const [item, setItem] = useState(product);

    return (
        <div>
            {item["mobile"]?.map((val) => {
                if (val.id === prodId) {
                    return <div>
                        <img src={val.image} alt="img" />
                        {val.name}
                        {val.description}
                        {val.price}

                    </div>
                }
            })}
            <button>Buy Now</button>
        </div>
    )
}

export default ProductDetails
