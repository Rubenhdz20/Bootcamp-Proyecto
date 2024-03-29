import CtaButton from "../../components/CtaButton/Index";
import MobileMenu from "../../components/MobileMenu/index";

const HeroSection = () => {
    return(
        <>
            <div className="w-full h-full">
                <div className="flex">
                    <MobileMenu/>
                    <p className="text-black text-xl font-black leading-10">MyFitnessWeb</p>
                </div>
                <div>
                    <div className="bg-hero-pattern bg-cover h-[30rem]">
                        <h1 className="mt-5 pt-[7rem] px-4 text-4xl text-white font-black">Welcome to your free meal tracking and health information tool</h1>
                        <p className="px-5 pt-2 text-sm text-white">Get started with our free tool for tracking meals, healthy eating information, recipes, meal registration, and nutritional analysis. Improve your health and wellbeing.</p>
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
                    <CtaButton/>
                </div>
            </div>
        </>
    )
}

export default HeroSection;