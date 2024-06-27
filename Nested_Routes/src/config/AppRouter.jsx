import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Dashboard from '../screens/dashboard/Dashboard'
import PageNotFound from '../screens/pageNotFound/PageNotFound'

const AppRouter = () => <Router>
    <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
</Router>


export default AppRouter