import About from "../screens/about/About";
import Contact from "../screens/contact/Contact";
import Home from "../screens/home/Home";

export const publicRoutes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    },
]

// export default publicRoutes