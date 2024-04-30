import { create } from 'zustand';
import { BASE_URL } from '../utils/constants';

type Actions = {
    findRecipe: (id: string | undefined) => Promise<void>,
}

type State = {
    recipe: {},
    isLoading: boolean,
    error: undefined | object | Error | unknown,
}

const initialState: State = {
    recipe: {},
    isLoading: false,
    error: undefined,
}

const useDetailStore = create<State & Actions>((set,get)=>({
    ...initialState,
    findRecipe: async (id: string|undefined) => {
        try {
            set({isLoading: true}); 
            set({error: undefined});
            //llamada a la api
            const results = await fetch(`${BASE_URL}/${ id }?type=public&app_id=${ import.meta.env.VITE_APP_ID }&app_key=${ import.meta.env.VITE_APP_KEY }`);
            const data = await results.json();
            set({recipe: data?.recipe});
        } catch (error: undefined | object | Error | unknown) {
            set({error});
        } finally {
            set({isLoading: false}); 
        }
    }
}));

export default useDetailStore;