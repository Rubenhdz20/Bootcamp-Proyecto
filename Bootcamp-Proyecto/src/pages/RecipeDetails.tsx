import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from '../utils/constants';

const RecipeDetails = () => {
    const {recipeId} = useParams();
    const [recipe, setRecipe] = useState<any>({});
    const [isLoading,setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(()=>{
        const fetchRecipe = async (id: string|undefined) => {
            try {
                setIsLoading(true); 
                setError(undefined);
                //llamada a la api
                const results = await fetch(`${BASE_URL}/${ id }?type=public&app_id=${ import.meta.env.VITE_APP_ID }&app_key=${ import.meta.env.VITE_APP_KEY }`);
                const data = await results.json();
                setRecipe(data?.recipe);
            } catch (error: undefined | object | Error | unknown) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchRecipe(recipeId);
    },[recipeId]);

    console.log(recipe);

    return (
        <>
        {isLoading && <div>Cargando...</div>}
        {error && <div>Ha ocurrido un error</div>}
        {!isLoading && (
            <div className="flex flex-col gap-3 p-3 flex-nowrap place-items-center mx-auto text-black">
                <img 
                className="w-[400px] h-[200px] sm:w-[700px] sm:h-[300px] lg:w-[800px] lg:h-[400px]"
                alt={recipe.label} 
                src={recipe.images.LARGE.url}/>
                <div className="flex flex-col mx-auto p-3 gap-3 sm:grid sm:grid-cols-3">
                    <div className="flex flex-col items-start gap-2 sm:col-span-1 p-2">
                        <h2 className="text-2xl font-bold ">{recipe.label}</h2>
                        <p>Prep. time: {recipe.totalTime} mins</p>
                        <p>{recipe.mealType}</p>
                    </div>
                    <div className="flex flex-col items-start sm:col-span-2 p-2">
                        <h2 className="text-2xl font-bold ">Ingredients</h2>
                        <h2 className="text-lg">Total servings #</h2>
                        {recipe.ingredientLines.map((ingredient:string,index:number)=>{
                            return <p key={index}>{ingredient}</p>
                        })}
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold ">Nutritional Facts</h2>
                    <div className="flex flex-row p-2 gap-5">
                        <div className="p-2 border-2 border-gray-300 rounded-lg">
                            <h2 className="text-lg">Calories</h2>
                            <p className="text-xl font-bold">{recipe.calories} kcals</p>
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