import { useState } from "react";
import RecipeeList from "../components/RecipeeList";

import useRecipeStore from "../state/recipeeResults";

const SearchRecipee = () => {
    const searchResults = useRecipeStore((state)=>state.searchResults)
    const isLoading = useRecipeStore((state)=>state.isLoading)
    const error = useRecipeStore((state)=>state.error)
    const onSearchResults = useRecipeStore((state)=>state.onSearchResults)
    const [searchText,setSearchText] = useState<string>('')

    const handleSearchBarRequest = async() => {
        onSearchResults(searchText)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setSearchText(e.target.value)
    }

 return (
    <div className="flex flex-col flex-nowrap place-content-center mx-auto">
        <div className="flex flex-row flex-nowrap place-content-around mb-6 p-4 gap-4">
            <h2 className="text-black text-3xl font-bold">Recipe Search</h2>
            <div>
                <input type="text"
                placeholder="Find a recipe"
                onChange={handleInputChange}
                value={searchText}
                className="bg-gray-200 
                text-gray-600 
                placeholder:text-gray-400 
                p-2 rounded-lg mb-4"/>
                <button onClick={handleSearchBarRequest}
                className='bg-green text-white m-1'>Search</button>
            </div>
        </div>
        {isLoading && <div>Cargando recetas...</div>}
        {error && <div>Disculpa, ha ocurrido un error</div>}
        {!isLoading && <RecipeeList recipes={searchResults}/>}
    </div>
 )
}
export default SearchRecipee;

// buscador de recetas 