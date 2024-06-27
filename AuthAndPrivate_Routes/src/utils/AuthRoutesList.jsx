import Login from "../screens/login/Login";
import Signup from "../screens/signup/Signup";

export const authRoutes = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    }
]