/** @type {import('./$types').RequestHandler} */

import foods from '$lib/data/foods.json';

export async function GET({ }) {
    return new Response(JSON.stringify(foods), {
        headers: {
            'content-type': 'application/json'
        }
    });
}

export async function POST({ body }) {
    const newFood = JSON.parse(body);
    foods.push(newFood);

    return new Response(JSON.stringify(foods), {
        headers: {
            'content-type': 'application/json'
        }
    });
}

export async function PUT({ params, body }) {
    const foodId = parseInt(params.id);
    const updatedFood = JSON.parse(body);

    const index = foods.findIndex(food => food.id === foodId);
    if (index !== -1) {
        foods[index] = { ...foods[index], ...updatedFood };
    }

    return new Response(JSON.stringify(foods), {
        headers: {
            'content-type': 'application/json'
        }
    });
}

export async function DELETE({ params }) {
    const foodId = parseInt(params.id);

    const index = foods.findIndex(food => food.id === foodId);
    if (index !== -1) {
        foods.splice(index, 1);
    }

    return new Response(JSON.stringify(foods), {
        headers: {
            'content-type': 'application/json'
        }
    });
}
