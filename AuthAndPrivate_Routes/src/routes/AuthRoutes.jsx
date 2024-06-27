import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'


const AuthRoutes = () => {

    // const authToken = true;
    const authToken = false;

    return authToken ? <Outlet /> : <Navigate to={'/login'} />





}

export default AuthRoutes