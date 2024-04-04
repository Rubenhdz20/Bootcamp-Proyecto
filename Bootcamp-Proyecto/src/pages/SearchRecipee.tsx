import { useRef, useState } from "react";
import RecipeeList from "../components/RecipeeList";
import SearchBar from "../components/SearchBar";

import useRecipeStore from "../state/recipeeResults";

const SearchRecipee = () => {
    const searchResults = useRecipeStore((state)=>state.searchResults)
    const isLoading = useRecipeStore((state)=>state.isLoading)
    const error = useRecipeStore((state)=>state.error)
    const onSearchResults = useRecipeStore((state)=>state.onSearchResults)
    const [searchText,setSearchText] = useState<string>('')

    console.log(searchResults)

    const containerRef = useRef()

    const handleSearchBarRequest = async(text: string) => {
        setSearchText(text)
        console.log(searchText)
        onSearchResults(searchText)
    }

 return (
    <div className="flex flex-col flex-nowrap place-content-center mx-auto">
        <SearchBar onSearch={handleSearchBarRequest} ref={containerRef}/>
        {isLoading && <div>Cargando recetas...</div>}
        {error && <div>Disculpa, ha ocurrido un error</div>}
        {!isLoading && <RecipeeList recipes={searchResults}/>}
    </div>
 )
}
export default SearchRecipee;