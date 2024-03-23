import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path:'/',
        element: <div>Pagina nutricional</div>
    }
])

const MyRoutes = () => <RouterProvider router={router}/>;

export default MyRoutes;