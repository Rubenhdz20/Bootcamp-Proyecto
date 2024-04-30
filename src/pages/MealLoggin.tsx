import { useForm } from 'react-hook-form';
import { useState } from 'react'; 
import MobileMenu from '../components/MobileMenu/index';

const MealLoggin = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const {register, handleSubmit, formState: {errors}} = useForm();

    console.log(errors)

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    return (
        <>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleMobileMenu} className='flex'>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 7C18 7.41421 17.6642 7.75 17.25 7.75H0.75C0.335786 7.75 0 7.41421 0 7C0 6.58579 0.335786 6.25 0.75 6.25H17.25C17.6642 6.25 18 6.58579 18 7ZM0.75 1.75H17.25C17.6642 1.75 18 1.41421 18 1C18 0.585786 17.6642 0.25 17.25 0.25H0.75C0.335786 0.25 0 0.585786 0 1C0 1.41421 0.335786 1.75 0.75 1.75ZM17.25 12.25H0.75C0.335786 12.25 0 12.5858 0 13C0 13.4142 0.335786 13.75 0.75 13.75H17.25C17.6642 13.75 18 13.4142 18 13C18 12.5858 17.6642 12.25 17.25 12.25Z" fill="#121714"/>
            </svg>

            {isMobileMenuOpen && <MobileMenu/>}

            <form onSubmit={onSubmit} className='w-80 h-[33rem] flex flex-col items-start gap-4 p-4'>
                <label htmlFor="date" className='text-xl font-bold text-black hover:text-black'>Date</label>
                <input
                    type="date"
                    id="date"
                    {...register("date", {
                        required: {
                            value: true,
                            message: "Date is required",
                        },
                    })}
                />
                
                <label htmlFor="mealType" className='text-xl font-bold text-black hover:text-black'>Meal Type</label>
                <input type="text" id="mealType"
                    {...register('mealType', {
                        required: true
                    })}
                />
                {
                    errors.mealType && <span>This field is required</span>
                }
                
                <label htmlFor="foodItems" className='text-xl font-bold text-black hover:text-black'>Food Items</label>
                <input type="text" id="foodItems"
                    {...register('foodItems', {
                        required: true
                    })}
                />
                {
                    errors.foodItems && <span>This field is required</span>
                }
                
                <label htmlFor="quantity" className='text-xl font-bold text-black hover:text-black'>Quantity</label>
                <input type="text" id="quantity"
                    {...register('quantity', {
                        required: true
                    })}
                />
                {
                    errors.quantity && <span>This field is required</span>
                }
                
                <label htmlFor="note" className='text-xl font-bold text-black hover:text-black'>Note</label>
                <input type="text" id="note"
                    {...register('note', {
                        required: true
                    })}
                />
                {
                    errors.note && <span>This field is required</span>
                }

                <button type='submit' className='text-xl font-bold text-black hover:text-black'>Submit</button>
            </form>
        </>   
    )
}

export default MealLoggin;
