/** @type {import('./$types').RequestHandler} */

import meals from '$lib/data/meals.json';

export async function GET({ }) {
    return new Response(JSON.stringify(meals), {
        headers: {
            'content-type': 'application/json'
        }
    });
}

export async function POST({ body }) {
    const newMeal = JSON.parse(body);
    meals.push(newMeal);

    return new Response(JSON.stringify(meals), {
        headers: {
            'content-type': 'application/json'
        }
    });
}

export async function PUT({ params, body }) {
    const mealId = parseInt(params.id);
    const updatedMeal = JSON.parse(body);

    const index = meals.findIndex(meal => meal.id === mealId);
    if (index !== -1) {
        meals[index] = { ...meals[index], ...updatedMeal };
    }

    return new Response(JSON.stringify(meals), {
        headers: {
            'content-type': 'application/json'
        }
    });
}

export async function DELETE({ params }) {
    const mealId = parseInt(params.id);

    const index = meals.findIndex(meal => meal.id === mealId);
    if (index !== -1) {
        meals.splice(index, 1);
    }

    return new Response(JSON.stringify(meals), {
        headers: {
            'content-type': 'application/json'
        }
    });
}