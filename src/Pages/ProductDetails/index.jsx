import React from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetailsPage() {
    const { productId } = useParams();
    return (
        <div>
            <h1>Product Page</h1>
            <p>Product ID: {productId}</p>
            {/* Ürün bilgilerini burada gösterin */}
        </div>
    )
}
