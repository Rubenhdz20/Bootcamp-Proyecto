import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import HeroSection from "../views/HeroSection";


const router = createBrowserRouter([
    {  
        path:'/hero-section',
        element: <HeroSection/>
    },
    {
        path:'/mobile-menu',
        element: <MobileMenu/>
    }
])

const MyRoutes = () => <RouterProvider router={router}/>;

export default MyRoutes;