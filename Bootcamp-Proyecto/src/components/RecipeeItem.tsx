import { FC } from 'react'
import './Recipees.css'

type RecipeeItemProps = {
    name: string,
    imageUrl: string,
    prepTime: number,
    calories: number,
    mealType: string,
}

const RecipeeItem: FC<RecipeeItemProps> = ({name, imageUrl, prepTime, calories, mealType}) => {
    const roundedCalories = calories.toFixed()

    return (
        <div className="recipee-container">
            <div className="flex flex-col flex-nowrap items-start">
                <p className="mb-4 text-black text-xl font-bold">{name}</p>
                <div className="recipee-info">
                    <p>{mealType}</p>
                    {prepTime > 0 && <p>{prepTime} mins</p>}
                    <p>{roundedCalories} cals</p>
                </div>
            </div>
            <img className="recipee-img"
            alt={name}
            src={imageUrl}/>
        </div>
    )
}

export default RecipeeItem;