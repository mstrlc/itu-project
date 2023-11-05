/** @type {import('./$types').RequestHandler} */

import meals from '$lib/data/meals.json';

export async function GET({ }) {
    return new Response(JSON.stringify(meals), {
        headers: {
            'content-type': 'application/json'
        }
    });
}