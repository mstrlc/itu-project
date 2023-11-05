/** @type {import('./$types').RequestHandler} */

import foods from '$lib/data/foods.json';

export async function GET({ }) {
    return new Response(
        JSON.stringify(foods),
        {
            headers: {
                'content-type': 'application/json'
            }
        }
    );
}