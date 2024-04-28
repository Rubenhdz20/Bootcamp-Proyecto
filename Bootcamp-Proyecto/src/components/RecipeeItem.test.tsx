import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event';
import RecipeeItem from './RecipeeItem'

describe(RecipeeItem, () => {
    const handleClick = vi.fn()

    test("Render base component", () => {
        render(
            <RecipeeItem 
                data-testid="recipe-1"
                id='wdfgjgreqr'
                name='Fried Chicken'
                imageUrl='realImageUrl.com'
                prepTime={0}
                calories={2500.17}
                mealType='lunch/dinner'
                onEventClick={handleClick}
                />
        )
        expect(screen.getByText('Fried Chicken')).toBeDefined()
        expect(screen.getByText('lunch/dinner')).toBeDefined()
        expect(screen.getByText('2500.17 cals')).toBeDefined()
    });

    test("Render with prepTime as 0", () => {
        expect(screen.queryByText('mins')).toBeNull()
    });

    //Resolver como hacer test del click event
    test("Click recipe to navigate details page", async () => {
        const user = userEvent.setup()
        const item = screen.getByText('See more')

        await user.click(item)
        expect(handleClick).toBeCalledTimes(1)
    });
})
