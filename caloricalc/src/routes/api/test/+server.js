/** @type {import('./$types').RequestHandler} */

export function GET({ }) {
    const response = JSON.stringify({
        message: 'Hello from the server!',
        time: new Date().toISOString(),
    });

    return new Response(response);
}