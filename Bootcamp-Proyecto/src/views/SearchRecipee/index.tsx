import RecipeeList from "../../components/Recipee";
import SearchBar from "../../components/SearchBar";
//import './index.css'

const SearchRecipee = () => {
 return (
    <div className="flex flex-col flex-nowrap">
        <SearchBar/>
        <div>
            <RecipeeList/>
        </div>
    </div>
 )
}
export default SearchRecipee;