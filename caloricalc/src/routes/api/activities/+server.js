/** @type {import('./$types').RequestHandler} */

import activities from '$lib/data/activities.json';

export async function GET({ }) {
    return new Response(JSON.stringify(activities), {
        headers: {
            'content-type': 'application/json'
        }
    });
}