/** @type {import('./$types').RequestHandler} */

import activities from '$lib/data/activities.json';

export async function GET({ }) {
    return new Response(JSON.stringify(activities), {
        headers: {
            'content-type': 'application/json'
        }
    });
}

export async function POST({ body }) {
    const newActivity = JSON.parse(body);
    activities.push(newActivity);

    return new Response(JSON.stringify(activities), {
        headers: {
            'content-type': 'application/json'
        }
    });
}

export async function PUT({ params, body }) {
    const activityId = parseInt(params.id);
    const updatedActivity = JSON.parse(body);

    const index = activities.findIndex(activity => activity.id === activityId);
    if (index !== -1) {
        activities[index] = { ...activities[index], ...updatedActivity };
    }

    return new Response(JSON.stringify(activities), {
        headers: {
            'content-type': 'application/json'
        }
    });
}

export async function DELETE({ params }) {
    const activityId = parseInt(params.id);

    const index = activities.findIndex(activity => activity.id === activityId);
    if (index !== -1) {
        activities.splice(index, 1);
    }

    return new Response(JSON.stringify(activities), {
        headers: {
            'content-type': 'application/json'
        }
    });
}
