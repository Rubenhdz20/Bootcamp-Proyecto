import { memo } from "react";
import RecipeeItem from "./RecipeeItem"
import { useNavigate } from "react-router-dom";

const RecipeeList = (props:any) => {
    const recipes = props.recipes;
    const navigate = useNavigate();
    
    const handleRecipeeItemClick = (id:string) => { //Redirige a la página de la receta seleccionada
        navigate(`/detail/${id}`)
    }
   
    return (
        <div className="flex flex-col flex-nowrap">
            <h2 className="text-2xl text-black font-bold ml-6 place-self-center lg:place-self-start">Recipe Results</h2>
            <div className="flex flex-row flex-wrap place-content-center p-3 lg:grid lg:grid-cols-2">
                {recipes.map((recipeItem:any,index:any)=>(
                    <RecipeeItem key={`recipe-item-${index}`} name={recipeItem.recipe.label} 
                    id={recipeItem.recipe.uri.substring(51)}
                    prepTime={recipeItem.recipe.totalTime}
                    imageUrl={recipeItem.recipe.images.THUMBNAIL.url}
                    calories={recipeItem.recipe.calories.toFixed(2)}
                    mealType={recipeItem.recipe.mealType[0]}
                    onEventClick={handleRecipeeItemClick}/>     
                ))}
            </div>
        </div> 
    )
}

export default memo( RecipeeList );

