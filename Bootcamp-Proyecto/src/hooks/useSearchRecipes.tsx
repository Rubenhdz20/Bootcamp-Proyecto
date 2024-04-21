import { useStore, useSelector } from 'zustand';
import { useState } from 'react';
import { RecipeState, SearchRecipeAction } from '../../state/recipeeResults'; // Assuming your types

const useSearchRecipes = (): {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  searchResults: RecipeState['searchResults'];
  isLoading: RecipeState['isLoading'];
  error: RecipeState['error'];
  handleSearchBarRequest: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} => {
  // Access the entire state store using useStore
  const store = useStore<RecipeState>();

  // Use useSelector to select specific state properties
  const searchResults = useSelector(state => state.searchResults);
  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);
  const onSearchResults = useSelector(state => state.onSearchResults);

  const [searchText, setSearchText] = useState<string>('');

  const handleSearchBarRequest = async () => {
    if (searchText) { // Perform search only if searchText has a value
      onSearchResults(searchText);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return {
    searchText,
    setSearchText,
    searchResults,
    isLoading,
    error,
    handleSearchBarRequest,
    handleInputChange,
  };
};

export default useSearchRecipes;