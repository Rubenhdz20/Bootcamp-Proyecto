import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";


const router = createBrowserRouter([
    {
        path:'/',
        element: <MobileMenu/>
    }
])

const MyRoutes = () => <RouterProvider router={router}/>;

export default MyRoutes;