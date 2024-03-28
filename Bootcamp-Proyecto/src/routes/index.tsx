import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SearchRecipee from '../pages/SearchRecipee';

const router = createBrowserRouter([
    {
        path:'/',
        element: <div>Pagina nutricional</div>
    },{
        path:'/search-recipee',
        element: <SearchRecipee/>
    }
])

const MyRoutes = () => <RouterProvider router={router}/>;

export default MyRoutes;