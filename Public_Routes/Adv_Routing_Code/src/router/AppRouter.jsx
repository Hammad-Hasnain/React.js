import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { publicRoutes } from '../utils/PublicRoutesList'



const AppRouter = () => {


    return <Router>
        <Routes>
            {/* =========== Beginners/Basic level */}
            {/* <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} /> */}


            {/* =========== Professional/Advance level */}
            {
                publicRoutes.map((e, i) => <Route key={i} path={e.path} element={e.element} />)
            }

        </Routes>
    </Router>

}

export default AppRouter