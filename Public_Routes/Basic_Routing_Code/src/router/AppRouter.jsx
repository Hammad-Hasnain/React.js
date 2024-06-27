import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from '../screens/home/Home'
import About from '../screens/about/About'
import Contact from '../screens/contact/Contact'



const AppRouter = () =>
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </Router>


export default AppRouter