import React from 'react'
import { Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <h2>Protected page</h2>
            <Outlet />
        </div>
    )
}

export default Product
