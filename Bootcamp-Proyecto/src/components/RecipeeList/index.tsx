import { memo } from "react";
import RecipeeItem from "./components/RecipeeItem"

type RecipeeListProps = {
    searchTerm: string,
    recipees: [],
}

const RecipeeList = () => {
    const renderList = [...Array(10).keys()] //arreglo para mostrar el render de la lista.
    
    /*
    const handleRecipeeItemClick = (id:string) => { //Redirige a la página de la receta seleccionada
        return
    }

    const renderRecipees = () => { //Carga la lista de recetas
        return
    }
    */
   
    return (
        <div className="flex flex-col flex-nowrap">
            <h2 className="text-2xl font-bold ml-4 place-self-start">Popular Recipees</h2>
            <div className="flex flex-row flex-wrap place-content-center p-3 lg:grid lg:grid-cols-2">
                {renderList.map(()=>(
                    <RecipeeItem name='Sushi' 
                    prepTime={40}
                    imageUrl="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0749D9BC-260D-40F4-A07F-54814C4A82B4/Derivates/A73A7793-F3EE-4B90-ABA4-1CC1A0C3E18F.jpg"/>     
                ))}
            </div>
        </div> 
    )
}

export default memo( RecipeeList );