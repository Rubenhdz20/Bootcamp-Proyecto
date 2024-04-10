

const RecipeDetails = () => {
    return (
        <div className="flex flex-col gap-3 p-3 flex-nowrap place-items-center mx-auto">
            <img 
            className="w-[400px] h-[200px] sm:w-[600px] sm:h-[300px] lg:w-[800px] lg:h-[400px]"
            alt='Recipe image' 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_HMFcB1yxgNtdAqO_jgifhluyiSF6jjFCfM95lsUq9w&s'/>
            <div className="flex flex-col mx-auto p-3 gap-3 sm:grid sm:grid-cols-3">
                <div className="flex flex-col items-start gap-2 sm:col-span-1 p-2">
                    <h2 className="text-2xl font-bold ">Recipe Name</h2>
                    <p>Prep. time</p>
                </div>
                <div className="flex flex-col items-center sm:col-span-2 p-2">
                    <h2 className="text-2xl font-bold ">Ingredients</h2>
                    <h2 className="text-lg">Total servings #</h2>
                    <ul>
                        <li>Pollo</li>
                        <li>Sal</li>
                        <li>Pimienta</li>
                    </ul>
                </div>
            </div>
            
            <div>
                <h2 className="text-2xl font-bold ">Instructions</h2>
                <div>
                    Pasos para la receta
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold ">Nuntrition Facts (per serving)</h2>
                <div>Informacion Nutricional</div>
            </div>
        </div>
    )
}

export default RecipeDetails;