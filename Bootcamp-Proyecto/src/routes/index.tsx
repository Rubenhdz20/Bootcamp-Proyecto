import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import HeroSection from "../pages/HeroSection";
import SearchRecipee from '../pages/SearchRecipee';
import RecipeDetails from '../pages/RecipeDetails';
import MealLoggin from "../pages/MealLoggin";


const router = createBrowserRouter([
    {  
        path:'/',
        element: <HeroSection/>
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
        path:'/MealLoggin',
        element: <MealLoggin/>
    },  
    {   
        path:'/mobile-menu',
        element: <MobileMenu/>

    }
])

const MyRoutes = () => <RouterProvider router={router}/>;

export default MyRoutes;