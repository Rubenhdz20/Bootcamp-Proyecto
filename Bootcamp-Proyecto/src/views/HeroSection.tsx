
const HeroSection = () => {
    return(
        <>
            <div className="w-full h-full">
                <div>
                    <p className="text-black text-xl font-bold">MyFitnessWeb</p>
                    <div className="bg-hero-pattern">
                        <h1 className="text-white font-bold">Welcome to your free meal tracking and health information tool</h1>
                        <p className="text-white">Get started with our free tool for tracking meals, healthy eating information, recipes, meal registration, and nutritional analysis. Improve your health and wellbeing.</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-black">Free tools for your health journey</h2>
                    <div>
                        <div>
                            <img src="" alt="" />
                            <p className="text-black">Track Meals</p>
                            <p>Record what you eat</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p className="text-black">Health Information</p>
                            <p className="text-black">Learn about health topics</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p className="text-black">Recipes</p>
                            <p className="text-black">Find new dishes</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p className="text-black">Nutrition Analysis</p>
                            <p className="text-black">Understand what you eat</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-black">Change your life now!</h2>
                    <button >Start now</button>
                </div>
            </div>
        </>
    )
}

export default HeroSection;