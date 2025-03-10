import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <>
            <div style={{ display: 'flex', gap: '5vw', background: "black", color: "white", paddingLeft: "10px" }}>
                <NavLink to='/'> Home </NavLink>
                <NavLink to='/about'> About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/product'>product</NavLink>
                <NavLink to='/product/createProduct'>CreateProduct</NavLink>
                <NavLink to='/product/listProduct'>listProduct</NavLink>
            </div>
            <hr />
        </>
    )
}

export default Header
