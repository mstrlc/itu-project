/** @type {import('./$types').RequestHandler} */

import user from '$lib/data/user.json';

export async function GET({ }) {
    return new Response(JSON.stringify(user), {
        headers: {
            'content-type': 'application/json'
        }
    });
}

export async function PUT({ body }) {
    const updatedUserData = JSON.parse(body);
    Object.assign(user, updatedUserData);

    return new Response(JSON.stringify(user), {
        headers: {
            'content-type': 'application/json'
        }
    });
}
