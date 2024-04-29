import { useForm } from 'react-hook-form';

const MealLoggin = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    console.log(errors)

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    return (
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
    )
}

export default MealLoggin;
