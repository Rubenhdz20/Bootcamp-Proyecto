import CtaButton from "../../components/CtaButton/Index";
import MobileMenu from "../../components/MobileMenu/index";

const HeroSection = () => {
    return(
        <>
            <div className="w-full h-full">
                <div className="mt-6 flex px-12">
                    <MobileMenu/>
                    <p className="text-black text-xl font-black leading-10">MyFitnessWeb</p>
                </div>
                <div>
                    <div className="mt-10 bg-hero-pattern bg-cover h-[30rem]">
                        <h1 className="pt-[7rem] px-4 text-4xl text-white font-black">Welcome to your free meal tracking and health information tool</h1>
                        <p className="px-5 pt-2 text-sm text-white">Get started with our free tool for tracking meals, healthy eating information, recipes, meal registration, and nutritional analysis. Improve your health and wellbeing.</p>
                    </div>
                </div>
                <div className="my-10">
                    <h2 className="mb-10 text-3xl text-black font-bold">Free tools for your health journey</h2>
                    <div className="p-4 grid grid-cols-2 justify-items-center">
                        <div className="w-44 h-40 p-4 mr-3 flex flex-col gap-2 border-slate-600 border rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.75 16.5C19.75 16.9142 19.4142 17.25 19 17.25H1C0.585786 17.25 0.25 16.9142 0.25 16.5V1.5C0.25 1.08579 0.585786 0.75 1 0.75C1.41421 0.75 1.75 1.08579 1.75 1.5V10.3472L6.50594 6.1875C6.77266 5.95401 7.16644 5.93915 7.45 6.15187L12.9634 10.2872L18.5059 5.4375C18.704 5.24149 18.9943 5.1714 19.2599 5.2555C19.5256 5.33959 19.7227 5.56402 19.7718 5.83828C19.8209 6.11254 19.714 6.39143 19.4941 6.5625L13.4941 11.8125C13.2273 12.046 12.8336 12.0608 12.55 11.8481L7.03656 7.71469L1.75 12.3403V15.75H19C19.4142 15.75 19.75 16.0858 19.75 16.5Z" fill="#121714"/>
                            </svg>
                            <p className="text-black">Track Meals</p>
                            <p className="text-black">Record what you eat</p>
                        </div>
                        <div className="w-44 h-40 p-4 ml-3 flex flex-col gap-2 border-slate-600 border rounded-lg">
                            <img src="" alt="" />
                            <p className="text-black">Health Information</p>
                            <p className="text-black">Learn about health topics</p>
                        </div>
                        <div className="w-44 h-40 p-4 mr-3 mt-3 flex flex-col gap-2 border-slate-600 border rounded-lg">
                            <img src="" alt="" />
                            <p className="text-black">Recipes</p>
                            <p className="text-black">Find new dishes</p>
                        </div>
                        <div className="w-44 h-40 p-4 ml-3 mt-3 flex flex-col gap-2 border-slate-600 border rounded-lg">
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