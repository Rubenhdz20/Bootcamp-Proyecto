import { create } from 'zustand';

const BASE_URL = 'https://api.edamam.com/api/recipes/v2?';

type Actions = {
    onSearchResults: (searchTtext:string) => Promise<void>,
}

type State = {
    searchResults: any[],
    isLoading: boolean,
    error: undefined | object | Error | unknown,
}

const initialState: State = {
    searchResults: [],
    isLoading: false,
    error: undefined,
}


const useRecipeStore = create<State & Actions>((set,get)=>({
    ...initialState,
    onSearchResults: async(searchText:string)=>{
        try {
            set({isLoading: true, error: undefined})
            //llamada a la api
            let results:any = []
            if (searchText.length>0){
                results = await fetch(`${BASE_URL}type=public&q=${ searchText }&app_id=${ import.meta.env.VITE_APP_ID }&app_key=${ import.meta.env.VITE_APP_KEY }`)
            } else {
                results = await fetch(`${BASE_URL}type=public&app_id=${ import.meta.env.VITE_APP_ID }&app_key=${ import.meta.env.VITE_APP_KEY }`)
            }
            const data = await results.json()
            set({searchResults: data?.hits})
        } catch (error: undefined | object | Error | unknown) {
            set({error})
        } finally {
            set({isLoading: false})
        }
    }
}));

export default useRecipeStore;