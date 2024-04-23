import { useState } from "react";
import RecipeeList from "../../components/RecipeList/RecipeeList";
//import SearchBar from "../components/SearchBar";
import useRecipeStore from "../../state/recipeeResults";

const SearchRecipee = () => {
    const searchResults = useRecipeStore((state)=>state.searchResults)
    const isLoading = useRecipeStore((state)=>state.isLoading)
    const error = useRecipeStore((state)=>state.error)
    const onSearchResults = useRecipeStore((state)=>state.onSearchResults)
    const [searchText,setSearchText] = useState<string>('')
    
    console.log(searchResults)

    //const containerRef = useRef()

    const handleSearchBarRequest = async() => {
        onSearchResults(searchText)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        //console.log(e.target.value)
        setSearchText(e.target.value)
    }


 return (
    <div className="flex flex-col flex-nowrap place-content-center mx-auto">
        {/*<SearchBar onSearch={handleSearchBarRequest} ref={containerRef}/>*/}
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
                className='bg-green-500 text-white m-1'>Search</button>
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