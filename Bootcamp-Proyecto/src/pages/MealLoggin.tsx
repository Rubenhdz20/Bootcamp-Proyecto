import { useForm } from 'react-hook-form';

const MealLoggin = () => {
    const {register, handleSubmit} = useForm();

    return (
        <>
            <form onSubmit={handleSubmit(data => {console.log(data)})} className='w-80 h-[33rem] flex flex-col items-start gap-4 p-4'>
                <label htmlFor="date" className='text-xl font-bold text-black hover:text-black'>Date</label>
                <input
                    type="date"
                    id="date"
                    {...register("date", {
                        required: {
                            value: true,
                            message: "Date",
                        },
                    })}
                />
                
                <label htmlFor="Meal Type" className='text-xl font-bold text-black hover:text-black'>Meal Type</label>
                <input type="text" id="mealType"
                    {...register('mealType')}
                />
                
                <label htmlFor="Food" className='text-xl font-bold text-black hover:text-black'>Food Items</label>
                <input type="text" id="foodItems"
                    {...register('foodItems')}
                />
                
                <label htmlFor="date" className='text-xl font-bold text-black hover:text-black'>Quantity</label>
                <input type="text" id="quantity"
                    {...register('quantity')}
                />
                
                <label htmlFor="date" className='text-xl font-bold text-black hover:text-black'>Note</label>
                <input type="text" id="note"
                    {...register('note')}
                />

                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default MealLoggin;
