import { memo } from "react";
import RecipeeItem from "./RecipeeItem"

/*
type RecipeeListProps = {
    searchTerm: string,
    recipees: [],
}
*/

const RecipeeList = (props) => {
    const recipes = props.recipes
    //const renderList = [...Array(10).keys()] //arreglo para mostrar el render de la lista.
    
    /*
    const handleRecipeeItemClick = (id:string) => { //Redirige a la página de la receta seleccionada
        return
    }

    const renderRecipees = () => { //Carga la lista de recetas
        return
    }
    */
   
    return (
        <div className="flex flex-col flex-nowrap">
            <h2 className="text-2xl font-bold ml-4 place-self-start">Popular Recipees</h2>
            <div className="flex flex-row flex-wrap place-content-center p-3 lg:grid lg:grid-cols-2">
                {recipes.map((recipeItem,index)=>(
                    <RecipeeItem key={`recipe-item-${index}`} name={recipeItem.recipe.label} 
                    prepTime={recipeItem.recipe.totalTime}
                    imageUrl={recipeItem.recipe.images.SMALL.url}
                    calories={recipeItem.recipe.calories}
                    mealType={recipeItem.recipe.mealType[0]}/>     
                ))}
            </div>
        </div> 
    )
}

export default memo( RecipeeList );