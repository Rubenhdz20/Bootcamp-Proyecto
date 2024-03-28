import { memo } from "react";
import RecipeeItem from "./components/RecipeeItem"

const RecipeeList = () => {
    return (
        <div className="flex flex-row flex-wrap place-content-center p-3 lg:grid lg:grid-cols-2">
            {/*Render Recipees from search*/}
            <RecipeeItem name='Sushi' 
            prepTime={40}
            image="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0749D9BC-260D-40F4-A07F-54814C4A82B4/Derivates/A73A7793-F3EE-4B90-ABA4-1CC1A0C3E18F.jpg"/>
            <RecipeeItem name='Sushi' 
            prepTime={40}
            image="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0749D9BC-260D-40F4-A07F-54814C4A82B4/Derivates/A73A7793-F3EE-4B90-ABA4-1CC1A0C3E18F.jpg"/>
            <RecipeeItem name='Sushi' 
            prepTime={40}
            image="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0749D9BC-260D-40F4-A07F-54814C4A82B4/Derivates/A73A7793-F3EE-4B90-ABA4-1CC1A0C3E18F.jpg"/>
        </div>
    )
}

export default memo( RecipeeList );