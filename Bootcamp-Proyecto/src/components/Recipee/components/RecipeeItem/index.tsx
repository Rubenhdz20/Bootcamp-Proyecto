import './RecipeeItem.css'

const RecipeeItem = () => {
    return (
        <div className="recipee-container">
            <div className="flex flex-col flex-nowrap items-start">
                <p className="mb-4 text-black text-xl">Recipee Name</p>
                <div className="recipee-info">
                    <p>Difficulty level</p>
                    <p>Prep time</p>
                    <p>Rating</p>
                </div>
            </div>
            <img className="w-[170px] h-[140px] rounded-lg"
            alt="Recipee Name"
            src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0749D9BC-260D-40F4-A07F-54814C4A82B4/Derivates/A73A7793-F3EE-4B90-ABA4-1CC1A0C3E18F.jpg"/>
        </div>
    )
}

export default RecipeeItem;