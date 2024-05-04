import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { BASE_URL } from '../utils/constants';

type Actions = {
    findRecipe: (id: string | undefined) => Promise<void>,
}

type State = {
    recipe: {
        label: string,
        images: {
            LARGE: {
                url: string,
            }
        },
        totalTime: number,
        ingredientLines: string[],
        calories: number,
        mealType: string,
        url: string,
        totalNutrients: {
            CHOCDF:{
                quantity: number,
                unit: string
            },
            PROCNT:{
                quantity: number,
                unit: string
            }
        }
    },
    isLoading: boolean,
    error: undefined | object | Error | unknown,
}

const initialState: State = {
    recipe: {
        label: '',
        images: {
            LARGE: {
                url: '',
            }
        },
        totalTime: 0,
        ingredientLines: ['Ingredient'],
        calories: 0,
        mealType: '',
        url: '',
        totalNutrients: {
            CHOCDF:{
                quantity: 0,
                unit: ''
            },
            PROCNT:{
                quantity: 0,
                unit: ''
            }
        }
    },
    isLoading: false,
    error: undefined,
}

const useDetailStore = create<State & Actions>()(immer((set) => ({
    ...initialState,
    findRecipe: async (id: string|undefined) => {
        try {
            set({isLoading: true}); 
            set({error: undefined});
            //llamada a la api
            const results = await fetch(`${BASE_URL}/${ id }?type=public&app_id=${ import.meta.env.VITE_APP_ID }&app_key=${ import.meta.env.VITE_APP_KEY }`);
            const data = await results.json();
            //set({recipe: data?.recipe});
            set((state)=> {
                state.recipe.label = data?.recipe.label;
                state.recipe.images.LARGE.url = data?.recipe.images.LARGE.url;
                state.recipe.totalTime = data?.recipe.totalTime;
                state.recipe.ingredientLines = data?.recipe.ingredientLines;
                state.recipe.calories = data?.recipe.calories;
                state.recipe.mealType = data?.recipe.mealType;
                state.recipe.url = data?.recipe.url;
                state.recipe.totalNutrients.CHOCDF.quantity = data?.recipe.totalNutrients.CHOCDF.quantity
                state.recipe.totalNutrients.CHOCDF.unit = data?.recipe.totalNutrients.CHOCDF.unit
                state.recipe.totalNutrients.PROCNT.quantity = data?.recipe.totalNutrients.PROCNT.quantity
                state.recipe.totalNutrients.PROCNT.unit = data?.recipe.totalNutrients.PROCNT.unit
            })
        } catch (error: undefined | object | Error | unknown) {
            set({error});
        } finally {
            set({isLoading: false}); 
        }
    }
})));

export default useDetailStore;