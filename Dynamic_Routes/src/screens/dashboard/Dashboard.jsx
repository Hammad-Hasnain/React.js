import { Box, Grid } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import UserCard from "../../components/card/Card"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()



    const getUsers = async () => {
        try {
            const usersArr = await axios.get('https://fakestoreapi.com/users')
            console.log(usersArr.data)
            // const abc = usersArr.data
            setUsers(usersArr.data)
            setIsLoading(false)
        } catch (error) {
            console.log('error ==> ', error)
        }

    }

    const navigateHandller = (id) => navigate(`/carddetails/${id}`)

    console.log('users in App ', users)
    // getUsers()

    useEffect(() => {
        getUsers()
    }, [])


    return (
        <>
            <h1 style={{ textAlign: 'center', backgroundColor: 'orangered', color: 'whitesmoke', fontSize: '3em', fontFamily: 'sans-serif' }}>Cards </h1>

            {isLoading ? <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3QxNjV6Y253eHd1ZG9sNzlxNzlzOGsyMjM5cnJzdDcydmIyZXkyNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Loading......"
                style={{ display: 'block', margin: 'auto' }}
            />
                : <Grid container sx={{}}>
                    {users.map((e, i) => <Grid item xs={12} sm={10} md={4} sx={{ p: 1 }}> <Box sx={{ boxShadow: '6px 8px 10px #808080b5', borderRadius: '15px', }}>
                        <UserCard key={e.id} user={e} onClickHandler={() => navigateHandller(e.id)} /></Box>
                    </Grid>)}
                </Grid>}

        </>)
}

export default Dashboard