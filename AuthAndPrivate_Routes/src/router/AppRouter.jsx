import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { publicRoutes } from '../utils/PublicRoutesList'
import Login from '../screens/login/Login'
import Signup from '../screens/signup/Signup'
import AuthRoutes from '../routes/AuthRoutes'
import PageNotFound from '../screens/pageNotFound/PageNotFound'
import { authRoutes } from '../utils/AuthRoutesList'



const AppRouter = () => <Router>
    <Routes>
        {/* =========== Beginners/Basic level */}
        {/* <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} /> */}

        {/* <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} /> */}



        {/* =========== Professional/Advance level */}
        {/* Private Routes */}
        <Route element={<AuthRoutes />}>
            {
                publicRoutes.map((e, i) => <Route key={i} path={e.path} element={e.element} />)
            }
        </Route>

        {/* Auth Routes */}
        {
            authRoutes.map((e, i) => <Route key={i} path={e.path} element={e.element} />)
        }

        {/* Catch-All Routes */}
        <Route path='*' element={<PageNotFound />} />

    </Routes>
</Router>



export default AppRouter