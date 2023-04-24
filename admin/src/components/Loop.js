
import React from 'react'
import Login from './Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Error from './Error'
import Categories from './Category/Categories'
import Addcategorie from './Category/Addcategorie'
import Data from './Category/Data'
import Editcategory from './Category/Editcategory'
import Seo from './Category/Seo'
import HomeProducts from './Products/HomeProducts'
import AddProducts from './Products/AddProducts'
// import Design from './Design'

const PrivateRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('name');

    if (isAuthenticated) {
        return children
    }

    return <Navigate to="/" />
}

const Loop = (props) => {
    return (
        <>
            {/* <Routes>
                <Route path='*' element={<Error />} />
                <Route path="/admin" element={<Private />} >
                    <Route path='/admin' element={<Navigate replace to='dash' />} />
                    <Route path='dash' element={<Dashboard />} />
                    <Route path='dash/Categories' element={<Categories />} />
                    <Route path='dash/Add' element={<Addcategorie />} />
                </Route>
                <Route path="/admin" element={<Private />} />

            </Routes> */}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="*" element={<Error />} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /> </PrivateRoute>} />
                <Route path='/Categories' element={<PrivateRoute><Categories /></PrivateRoute>} />
                <Route path='/Add' element={<PrivateRoute><Addcategorie /></PrivateRoute>} />
                <Route path='/Data' element={<PrivateRoute><Data /></PrivateRoute>} />
                <Route path='/Seo' element={<PrivateRoute><Seo /></PrivateRoute>} />
                <Route path='/Editcategory' element={<PrivateRoute><Editcategory /></PrivateRoute>} />
                <Route path='/Products' element={<PrivateRoute><HomeProducts /></PrivateRoute>} />
                <Route path='/AddProducts' element={<PrivateRoute><AddProducts /></PrivateRoute>} />

            </Routes>

        </>
    )
}

export default Loop
