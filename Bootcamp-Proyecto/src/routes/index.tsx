import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SearchRecipee from '../pages/SearchRecipee';
import RecipeDetails from '../pages/RecipeDetails';

const router = createBrowserRouter([
    {
        path:'/',
        element: <div>Pagina nutricional</div>
    },{
        path:'/search-recipe',
        element: <SearchRecipee/>
    },{
        path:'/detail/:recipeId',
        element: <RecipeDetails/>
    }
])

const MyRoutes = () => <RouterProvider router={router}/>;

export default MyRoutes;