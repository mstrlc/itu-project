/** @type {import('./$types').RequestHandler} */

import recipes from '$lib/data/recipes.json';

export async function GET({ }) {
    return new Response(JSON.stringify(recipes), {
        headers: {
            'content-type': 'application/json'
        }
    });
}

export async function POST({ body }) {
    const newRecipe = JSON.parse(body);
    recipes.push(newRecipe);

    return new Response(JSON.stringify(recipes), {
        headers: {
            'content-type': 'application/json'
        }
    });
}

export async function PUT({ params, body }) {
    const recipeId = parseInt(params.id);
    const updatedRecipe = JSON.parse(body);

    const index = recipes.findIndex(recipe => recipe.id === recipeId);
    if (index !== -1) {
        recipes[index] = { ...recipes[index], ...updatedRecipe };
    }

    return new Response(JSON.stringify(recipes), {
        headers: {
            'content-type': 'application/json'
        }
    });
}

export async function DELETE({ params }) {
    const recipeId = parseInt(params.id);

    const index = recipes.findIndex(recipe => recipe.id === recipeId);
    if (index !== -1) {
        recipes.splice(index, 1);
    }

    return new Response(JSON.stringify(recipes), {
        headers: {
            'content-type': 'application/json'
        }
    });
}
