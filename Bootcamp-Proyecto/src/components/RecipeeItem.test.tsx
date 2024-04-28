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
                prepTime={10}
                calories={2500.17}
                mealType='lunch/dinner'
                onEventClick={handleClick}
                />
        )
        expect(screen.getByText('Fried Chicken')).toBeDefined()
        expect(screen.getByText('lunch/dinner')).toBeDefined()
        expect(screen.getByText('2500.17 cals')).toBeDefined()
        expect(screen.getByText('10 mins')).toBeDefined()
    });

    test("Render with prepTime as 0", () => {
        render(
            <RecipeeItem 
                data-testid='recipe-2'
                id='wdfgjgreqr'
                name='Turkey Sandwich'
                imageUrl='realImageUrl.com'
                prepTime={0}
                calories={2500.17}
                mealType='lunch/dinner'
                />
        )
        expect(screen.queryByText('mins')).toBeNull()
    });

    //Resolver como hacer test del click event
    test("Click recipe to navigate details page", () => {
        const item = screen.queryByTestId('recipe-1')
        userEvent.click(item)
        expect(handleClick).toHaveBeenCalled()
    });
})
