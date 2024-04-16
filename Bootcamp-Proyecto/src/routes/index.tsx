import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import HeroSection from "../pages/HeroSection";
import SearchRecipee from '../pages/SearchRecipee';
import RecipeDetails from '../pages/RecipeDetails';


const router = createBrowserRouter([
    {  
        path:'/hero-section',
        element: <HeroSection/>
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
    }, 
    {   
        path:'/mobile-menu',
        element: <MobileMenu/>

    }
])

const MyRoutes = () => <RouterProvider router={router}/>;

export default MyRoutes;