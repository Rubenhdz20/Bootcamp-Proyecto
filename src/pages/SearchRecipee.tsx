import { useState } from "react";
import RecipeeList from "../components/RecipeeList";
import useRecipeStore from "../state/recipeeResults";
import MobileMenu from '../components/MobileMenu/index';

const SearchRecipee = () => {
    const searchResults = useRecipeStore((state)=>state.searchResults)
    const isLoading = useRecipeStore((state)=>state.isLoading)
    const error = useRecipeStore((state)=>state.error)
    const onSearchResults = useRecipeStore((state)=>state.onSearchResults)
    const [searchText,setSearchText] = useState<string>('')

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    const handleSearchBarRequest = async() => {
        onSearchResults(searchText)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setSearchText(e.target.value)
    }

 return (
    <>
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleMobileMenu} className='flex'>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 7C18 7.41421 17.6642 7.75 17.25 7.75H0.75C0.335786 7.75 0 7.41421 0 7C0 6.58579 0.335786 6.25 0.75 6.25H17.25C17.6642 6.25 18 6.58579 18 7ZM0.75 1.75H17.25C17.6642 1.75 18 1.41421 18 1C18 0.585786 17.6642 0.25 17.25 0.25H0.75C0.335786 0.25 0 0.585786 0 1C0 1.41421 0.335786 1.75 0.75 1.75ZM17.25 12.25H0.75C0.335786 12.25 0 12.5858 0 13C0 13.4142 0.335786 13.75 0.75 13.75H17.25C17.6642 13.75 18 13.4142 18 13C18 12.5858 17.6642 12.25 17.25 12.25Z" fill="#121714"/>
        </svg>

        {isMobileMenuOpen && <MobileMenu/>}
        
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
    </>
   
 )
}
export default SearchRecipee;

// buscador de recetas 