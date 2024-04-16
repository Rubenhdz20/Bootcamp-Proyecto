import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchRecipee from '../pages/SearchRecipee';
import RecipeDetails from '../pages/RecipeDetails';
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
    },
    {
        path:'/',
        element: <div>Pagina nutricional</div>
    },
    {
        path:'/search-recipe',
        element: <SearchRecipee/>
    },
    {
        path:'/detail/:recipeId',
        element: <RecipeDetails/>
    }
])

const MyRoutes = () => <RouterProvider router={router}/>;

export default MyRoutes;