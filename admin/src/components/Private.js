import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Private = () => {
    const data = localStorage.getItem('name')
    return data ? (<Outlet />) : <Navigate to='/' />
}

export default Private