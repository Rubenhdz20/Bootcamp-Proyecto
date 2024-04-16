import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from '../utils/constants';

const RecipeDetails = () => {
    const {recipeId} = useParams()
    const [recipe, setRecipe] = useState<any>({})
    const [isLoading,setIsLoading] = useState(false)
    const [error, setError] = useState<any>(null)

    useEffect(()=>{
        const fetchRecipe = async (id: string|undefined) => {
            try {
                setIsLoading(true); 
                setError(undefined);
                //llamada a la api
                const results = await fetch(`${BASE_URL}/${ id }?type=public&app_id=${ import.meta.env.VITE_APP_ID }&app_key=${ import.meta.env.VITE_APP_KEY }`)
                const data = await results.json()
                setRecipe(data?.recipe)
            } catch (error: undefined | object | Error | unknown) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchRecipe(recipeId);
    },[recipeId])

    //La llamada funciona, pero de repente regresa un objeto vacio
    console.log(recipe);

    return (
        <>
        {isLoading && <div>Cargando...</div>}
        {error && <div>Ha ocurrido un error</div>}
        {!isLoading && (
            <div className="flex flex-col gap-3 p-3 flex-nowrap place-items-center mx-auto text-black">
                <img 
                className="w-[400px] h-[200px] sm:w-[600px] sm:h-[300px] lg:w-[800px] lg:h-[400px]"
                alt='Recipe image' 
                src='https://www.seriouseats.com/thmb/xw1krLC9Yh85qx1wl5jw0BPCWHk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2015__07__20210324-SouthernFriedChicken-Andrew-Janjigian-21-cea1fe39234844638018b15259cabdc2.jpg'/>
                <div className="flex flex-col mx-auto p-3 gap-3 sm:grid sm:grid-cols-3">
                    <div className="flex flex-col items-start gap-2 sm:col-span-1 p-2">
                        <h2 className="text-2xl font-bold ">{recipe.label}</h2>
                        <p>Prep. time: {recipe.totalTime} mins</p>
                        <p>{recipe.mealType}</p>
                    </div>
                    <div className="flex flex-col items-center sm:col-span-2 p-2">
                        <h2 className="text-2xl font-bold ">Ingredients</h2>
                        <h2 className="text-lg">Total servings #</h2>
                        <div>{recipe.ingredientLines}</div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold ">Nutritional Facts</h2>
                    <div className="flex flex-row p-2">
                        <div className="flex flex-column">
                            <h2 className="text-xl font-bold">Calories</h2>
                            <p>{recipe.calories}</p>
                        </div>
                        <div className="flex flex-column">
                            <h2 className="text-xl font-bold">Carbs</h2>
                            <p>{recipe.totalDaily.CHOCDF.quantity}{recipe.totalDaily.CHOCDF.unit}</p>
                        </div>
                        <div className="flex flex-column">
                            <h2 className="text-xl font-bold">Protein</h2>
                            <p>{recipe.totalDaily.PROCNT.quantity}{recipe.totalDaily.PROCNT.unit}</p>
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