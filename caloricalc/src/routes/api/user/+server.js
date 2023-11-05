/** @type {import('./$types').RequestHandler} */

import user from '$lib/data/user.json';

export async function GET({ }) {
    return new Response(JSON.stringify(user), {
        headers: {
            'content-type': 'application/json'
        }
    });
}