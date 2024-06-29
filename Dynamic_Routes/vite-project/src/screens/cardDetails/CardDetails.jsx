import { Box, Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserCard from '../../components/card/Card'

const CardDetails = () => {
    const [user, setUser] = useState('')
    const [isLoading, setIsLoading] = useState(true)


    const { id } = useParams()
    console.log('id ===== > ', id)

    const getUser = async () => {
        try {
            const userData = await axios.get(`https://fakestoreapi.com/users/${id}`)
            console.log(userData.data)
            setUser(userData.data)

        } catch (error) {
            console.log('error ====> ', error)
        }
    }

    useEffect(() => {
        getUser()
    }, [])
    console.log('user ==> ', user)

    return (
        // 'hello'

        isLoading ? <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3QxNjV6Y253eHd1ZG9sNzlxNzlzOGsyMjM5cnJzdDcydmIyZXkyNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Loading......"
            style={{ display: 'block', margin: 'auto' }
            }
        /> :
            <Grid container sx={{ justifyContent: 'center', pt: 5, height: '100vh', backgroundColor: '#ff450096' }}>
                <Grid item xs={11} md={7}>
                    <Box>
                        <UserCard user={user} />
                    </Box>
                </Grid>
            </Grid>

    )
}

export default CardDetails