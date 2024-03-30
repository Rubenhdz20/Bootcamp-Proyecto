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
                        <div className="w-44 h-40 p-4 flex flex-col gap-2 border-slate-600 border rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.75 16.5C19.75 16.9142 19.4142 17.25 19 17.25H1C0.585786 17.25 0.25 16.9142 0.25 16.5V1.5C0.25 1.08579 0.585786 0.75 1 0.75C1.41421 0.75 1.75 1.08579 1.75 1.5V10.3472L6.50594 6.1875C6.77266 5.95401 7.16644 5.93915 7.45 6.15187L12.9634 10.2872L18.5059 5.4375C18.704 5.24149 18.9943 5.1714 19.2599 5.2555C19.5256 5.33959 19.7227 5.56402 19.7718 5.83828C19.8209 6.11254 19.714 6.39143 19.4941 6.5625L13.4941 11.8125C13.2273 12.046 12.8336 12.0608 12.55 11.8481L7.03656 7.71469L1.75 12.3403V15.75H19C19.4142 15.75 19.75 16.0858 19.75 16.5Z" fill="#121714"/>
                            </svg>
                            <p className="mt-3 text-left text-base text-black font-bold">Track Meals</p>
                            <p className="text-left text-sm text-green font-normal">Record what you eat</p>
                        </div>
                        <div className="w-44 h-40 p-4 flex flex-col gap-2 border-slate-600 border rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 8.5C12.75 8.91421 12.4142 9.25 12 9.25H6C5.58579 9.25 5.25 8.91421 5.25 8.5C5.25 8.08579 5.58579 7.75 6 7.75H12C12.4142 7.75 12.75 8.08579 12.75 8.5ZM12 10.75H6C5.58579 10.75 5.25 11.0858 5.25 11.5C5.25 11.9142 5.58579 12.25 6 12.25H12C12.4142 12.25 12.75 11.9142 12.75 11.5C12.75 11.0858 12.4142 10.75 12 10.75ZM18.75 9.625C18.7443 14.8003 14.5503 18.9943 9.375 19H1.46906C0.65815 18.999 0.00103307 18.3419 0 17.5309V9.625C0 4.44733 4.19733 0.25 9.375 0.25C14.5527 0.25 18.75 4.44733 18.75 9.625ZM17.25 9.625C17.25 5.27576 13.7242 1.75 9.375 1.75C5.02576 1.75 1.5 5.27576 1.5 9.625V17.5H9.375C13.7223 17.4953 17.2453 13.9723 17.25 9.625Z" fill="#121714"/>
                            </svg>
                            <p className="mt-3 text-left text-base text-black font-bold">Health Information</p>
                            <p className="text-left text-sm text-green font-normal">Learn about health topics</p>
                        </div>
                        <div className="w-44 h-40 p-4 mt-3 flex flex-col gap-2 border-slate-600 border rounded-lg">
                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5153 7.72844L10.0153 0.652188C10.0116 0.648989 10.0082 0.645543 10.005 0.641875C9.43281 0.121501 8.55876 0.121501 7.98656 0.641875L7.97625 0.652188L0.484688 7.72844C0.17573 8.01254 -6.38962e-05 8.41309 0 8.83281V17.5C0 18.3284 0.671573 19 1.5 19H6C6.82843 19 7.5 18.3284 7.5 17.5V13H10.5V17.5C10.5 18.3284 11.1716 19 12 19H16.5C17.3284 19 18 18.3284 18 17.5V8.83281C18.0001 8.41309 17.8243 8.01254 17.5153 7.72844ZM16.5 17.5H12V13C12 12.1716 11.3284 11.5 10.5 11.5H7.5C6.67157 11.5 6 12.1716 6 13V17.5H1.5V8.83281L1.51031 8.82344L9 1.75L16.4906 8.82156L16.5009 8.83094L16.5 17.5Z" fill="#121714"/>
                            </svg>
                            <p className="mt-3 text-left text-base text-black font-bold">Recipes</p>
                            <p className="text-left text-sm text-green font-normal">Find new dishes</p>
                        </div>
                        <div className="w-44 h-40 p-4 mt-3 flex flex-col gap-2 border-slate-600 border rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5306 18.4694L14.8366 13.7762C17.6629 10.383 17.3204 5.36693 14.0591 2.38935C10.7978 -0.588237 5.77134 -0.474001 2.64867 2.64867C-0.474001 5.77134 -0.588237 10.7978 2.38935 14.0591C5.36693 17.3204 10.383 17.6629 13.7762 14.8366L18.4694 19.5306C18.7624 19.8237 19.2376 19.8237 19.5306 19.5306C19.8237 19.2376 19.8237 18.7624 19.5306 18.4694ZM1.75 8.5C1.75 4.77208 4.77208 1.75 8.5 1.75C12.2279 1.75 15.25 4.77208 15.25 8.5C15.25 12.2279 12.2279 15.25 8.5 15.25C4.77379 15.2459 1.75413 12.2262 1.75 8.5Z" fill="#121714"/>
                            </svg>
                            <p className="mt-3 text-left text-base text-black font-bold">Nutrition Analysis</p>
                            <p className="text-left text-sm text-green font-normal">Understand what you eat</p>
                        </div>
                    </div>
                </div>
                <div className="py-10">
                    <h2 className="mb-14 text-3xl text-center text-black font-bold">Change your life now!</h2>
                    <CtaButton/>
                </div>
            </div>
        </>
    )
}

export default HeroSection;