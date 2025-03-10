import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({ children }) => {
    let auth = false;
    return (
        (true ? children : <Navigate to=' / login' replace />)
    )
}

export default Protected
