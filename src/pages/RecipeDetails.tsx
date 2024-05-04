import { useParams } from "react-router-dom";
import { useEffect } from "react";

import useDetailStore from "../state/detailResults";

const RecipeDetails = () => {
    const {recipeId} = useParams();

    const recipe = useDetailStore((state) => state.recipe);
    const isLoading = useDetailStore((state) => state.isLoading);
    const error = useDetailStore((state) => state.error);
    const fetchRecipe = useDetailStore((state) => state.findRecipe);

    useEffect(()=>{

        fetchRecipe(recipeId);

    },[recipeId, fetchRecipe]);

    return (
        <>
        {isLoading && <div>Cargando...</div>}
        {error && <div>Ha ocurrido un error</div>}
        {!isLoading && (
            <div className="flex flex-col gap-3 p-3 flex-nowrap place-items-center mx-8 mb-8 text-black">
                <img 
                className="w-[400px] h-[250px] sm:w-[700px] sm:h-[350px] lg:w-[850px] lg:h-[400px]"
                alt={recipe.label} 
                src={recipe.images.LARGE.url}/>
                <div className="flex flex-col mx-auto p-3 gap-3 sm:grid sm:grid-cols-3 lg:ml-[150px]">
                    <div className="flex flex-col items-start gap-2 sm:col-span-1 p-2">
                        <h2 className="text-2xl font-bold ">{recipe.label}</h2>
                        <p>Prep. time: {recipe.totalTime} mins</p>
                        <p>{recipe.mealType}</p>
                    </div>
                    <div className="flex flex-col items-start sm:col-span-2 p-2">
                        <h2 className="text-2xl font-bold ">Ingredients</h2>
                        <h2 className="text-lg">Total servings #</h2>
                        <ul>
                            {recipe.ingredientLines.map((ingredient:string,index:number)=>{
                                return <li key={index} className="text-left">{ingredient}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold ">Nutritional Facts</h2>
                    <div className="flex flex-row p-2 gap-5">
                        <div className="p-6 border-2 border-gray-300 rounded-lg">
                            <h2 className="text-lg">Calories</h2>
                            <p className="text-xl font-bold">{recipe.calories.toFixed(2)} cals</p>
                        </div>
                        <div className="p-6 border-2 border-gray-300 rounded-lg">
                            <h2 className="text-lg">Carbs</h2>
                            <p className="text-xl font-bold">{recipe.totalNutrients.CHOCDF.quantity.toFixed()}{recipe.totalNutrients.CHOCDF.unit}</p>
                        </div>
                        <div className="p-6 border-2 border-gray-300 rounded-lg">
                            <h2 className="text-lg">Protein</h2>
                            <p className="text-xl font-bold">{recipe.totalNutrients.PROCNT.quantity.toFixed()}{recipe.totalNutrients.PROCNT.unit}</p>
                        </div>
                    </div>
                </div>
                <a href={recipe.url}>
                    <button className="bg-green text-white">See More</button>
                </a>
            </div>
            )}
        </>
    )
}

export default RecipeDetails;

// pagina de la receta en detalle 