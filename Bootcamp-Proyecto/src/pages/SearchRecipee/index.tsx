import RecipeeList from "../../components/RecipeeList";
import SearchBar from "../../components/SearchBar";
//import './index.css'

const SearchRecipee = () => {
 return (
    <div className="flex flex-col flex-nowrap place-content-center mx-auto">
        <SearchBar/>
        <RecipeeList/>
    </div>
 )
}
export default SearchRecipee;