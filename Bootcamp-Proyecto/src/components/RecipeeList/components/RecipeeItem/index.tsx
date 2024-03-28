import { FC } from 'react'
import './RecipeeItem.css'

type RecipeeItemProps = {
    name: string,
    image: string,
    prepTime: number,
}

const RecipeeItem: FC<RecipeeItemProps> = ({name, image, prepTime}) => {
    return (
        <div className="recipee-container">
            <div className="flex flex-col flex-nowrap items-start">
                <p className="mb-4 text-black text-xl">{name}</p>
                <div className="recipee-info">
                    <p>Level</p>
                    <p>{prepTime} mins</p>
                    <p>Rating</p>
                </div>
            </div>
            <img className="w-[150px] h-[120px] rounded-lg"
            alt="Recipee Name"
            src={image}/>
        </div>
    )
}

export default RecipeeItem;