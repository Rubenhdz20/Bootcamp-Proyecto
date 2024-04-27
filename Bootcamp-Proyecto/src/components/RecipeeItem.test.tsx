import { beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen} from '@testing-library/react'
import { userEvent } from '@testing-library/user-event';
import RecipeeItem from './RecipeeItem'

describe(RecipeeItem, () => {
    const handleClick = vi.fn()

    beforeEach(()=>{
        render(
            <RecipeeItem 
                data-testid='recipe-1'
                id='wdfgjgreqr'
                name='Fried Chicken'
                imageUrl='realImageUrl.com'
                prepTime={0}
                calories={2500.17}
                mealType='lunch/dinner'
                onEventClick={handleClick}
                />
        )
    })
    test("Render base component", () => {
        expect(screen.getByText('Fried Chicken')).toBeDefined()
        expect(screen.getByText('lunch/dinner')).toBeDefined()
        expect(screen.getByText('2500.17 cals')).toBeDefined()
    });

    test("Render with prepTime as 0", () => {
        expect(screen.queryByText('mins')).toBeNull()
    });

    //Resolver como hacer test del click event
    test("Click recipe to navigate details page", () => {
        userEvent.click(screen.getByTestId('recipe-1'))
        expect(handleClick).toBeCalledTimes(1)
    })
})
