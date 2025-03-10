import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Home = () => {
    return (
        <>
            <div>
                <Header />
                <div style={{ paddingTop: "10px", paddingLeft: "10px" }}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Home
