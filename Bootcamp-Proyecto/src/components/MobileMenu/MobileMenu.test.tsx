import { test, expect, describe } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import MobileMenu from ".";

describe(MobileMenu,() => {
    const router = createMemoryRouter([
        {
            path:'/', 
            element:<MobileMenu/>
        }, {
            path:'/meal-loggin',
            element: <div>New Meal</div>
        }, {
            path:'/search-recipe',
            element: <div>Search Recipes</div>
        }
    ])

    test('Render mobile menu', () => {
        render(
            <RouterProvider router={router}/>
        )
        const menu = screen.getByRole('navigation')
        expect(menu).toBeDefined()
        expect(screen.getByText('Home')).toBeDefined()
        expect(screen.getByText('Recipes')).toBeDefined()
        expect(screen.getByText('Meal Loggin')).toBeDefined()
    });

    test('Menu has right Recipe path', () => {
        const link = screen.getByRole('link',{name:'Recipes'})
        expect(link.getAttribute('href')).toBe('/search-recipe')
    });

    test('Menu has right Meal loggin path', () => {
        const link = screen.getByRole('link',{name:'Meal Loggin'})
        expect(link.getAttribute('href')).toBe('/meal-loggin')
    });

    test('Menu sends to Meal Loggin page on click', ()=>{
        const link = screen.getByRole('link',{name:'Meal Loggin'})
        fireEvent.click(link)
        expect(screen.getByText('New Meal')).toBeDefined()
    });
});

