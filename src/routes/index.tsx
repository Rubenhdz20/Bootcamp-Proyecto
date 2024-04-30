import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import HeroSection from "../pages/HeroSection";
import SearchRecipee from '../pages/SearchRecipee';
import RecipeDetails from '../pages/RecipeDetails';
import MealLoggin from "../pages/MealLoggin";
import Error404 from "../pages/Error404";


const router = createBrowserRouter([
    {  
        path:'/',
        element: <HeroSection/>,
        errorElement: <Error404/>
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
        path:'/meal-loggin',
        element: <MealLoggin/>
    },  
    {   
        path:'/mobile-menu',
        element: <MobileMenu/>

    }
])

const MyRoutes = () => <RouterProvider router={router}/>;

export default MyRoutes;