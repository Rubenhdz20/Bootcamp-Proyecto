import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import HeroSection from "../views/HeroSection";


const router = createBrowserRouter([
    {
        path:'/',
        element: <MobileMenu/>
    },
    {
        path:'/src/views/HeroSection/index.tsx',
        element: <HeroSection/>
    }
])

const MyRoutes = () => <RouterProvider router={router}/>;

export default MyRoutes;