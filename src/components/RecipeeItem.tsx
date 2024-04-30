import { FC } from 'react'
import './Recipees.css'

type RecipeeItemProps = {
    id: string
    name: string,
    imageUrl: string,
    prepTime: number,
    calories: number,
    mealType: string,
    onEventClick: (name: string) => void,
}

const RecipeeItem: FC<RecipeeItemProps> = ({id, name, imageUrl, prepTime, calories, mealType, onEventClick}) => {

    const handleDetailsClick = (event: any) => {
        event.stopPropagation()
        onEventClick(id)
    }

    return (
        <div className="recipee-container">
            <div className="flex flex-col flex-nowrap items-start">
                <p className="mb-4 text-black text-xl font-bold">{name}</p>
                <div className="recipee-info">
                    <p>{mealType}</p>
                    {prepTime > 0 && <p>{prepTime} mins</p>}
                    <p>{calories} cals</p>
                </div>
                <button   className='recipe-btn' onClick={handleDetailsClick}>See more</button>
            </div>
            <img className="recipee-img"
            alt={name}
            src={imageUrl}/>
        </div>
    )
}

export default RecipeeItem;

// elemento que muesta la vista inicial de las recetas 