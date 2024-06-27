import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Notifications from '../notifications/Notifications'
import Profile from '../profile/Profile'
import Button from '../../components/Button'

const Dashboard = () => {

    const navigate = useNavigate()

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1>Dashboard</h1>
                <Button onClickTrigger={() => navigate('/notifications')} btnTxt={'Notifications'} />
                <Button onClickTrigger={() => navigate('/profile')} btnTxt={'Profile'} />

            </div>

            <hr />
            <Routes>
                <Route path='/notifications' element={<Notifications />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>

        </>)
}


export default Dashboard