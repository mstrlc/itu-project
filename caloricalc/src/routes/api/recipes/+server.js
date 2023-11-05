/** @type {import('./$types').RequestHandler} */

import recipes from '$lib/data/recipes.json';

export async function GET({ }) {
    return new Response(JSON.stringify(recipes), {
        headers: {
            'content-type': 'application/json'
        }
    });
}