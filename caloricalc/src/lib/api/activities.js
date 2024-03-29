// Author: xstrel03
// Date: 17.12.2023
export async function getActivities() {
    const response = await fetch('/api/activities', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });

    return await response.json();
}

export async function getActivity(id) {
    const response = await fetch('/api/activities', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
    let activity = await response.json();
    activity = activity.find(activity => activity.id == id);
    return await activity;
}

export async function createActivity(name, location, time, end, type, calories) {
    let activity = {
        name: name,
        location: location,
        time: time,
        end: end,
        type: type,
        calories: calories
    };
    const response = await fetch('/api/activities', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(activity)
    });

    return await response.json();
}

export async function editActivity(id, name, location, time, end, type, calories) {
    let activity = {
        id: id,
        name: name,
        location: location,
        time: time,
        end: end,
        type: type,
        calories: calories
    };
    const response = await fetch('/api/activities', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(activity)
    });

    return await response.json();
}

export async function deleteActivity(id) {
    let activity = {
        id: id
    };
    const response = await fetch('/api/activities', {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(activity)
    });

    return await response.json();
}