import { FC } from 'react'
import './Recipees.css'

type RecipeeItemProps = {
    name: string,
    imageUrl: string,
    prepTime: number,
}

const RecipeeItem: FC<RecipeeItemProps> = ({name, imageUrl, prepTime}) => {
    return (
        <div className="recipee-container">
            <div className="flex flex-col flex-nowrap items-start">
                <p className="mb-4 text-black text-xl font-bold">{name}</p>
                <div className="recipee-info">
                    <p>Level</p>
                    <p>{prepTime} mins</p>
                    <p>Rating</p>
                </div>
            </div>
            <img className="recipee-img"
            alt="Recipee Name"
            src={imageUrl}/>
        </div>
    )
}

export default RecipeeItem;