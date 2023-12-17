/** @type {import('./$types').RequestHandler} */
import { json } from '@sveltejs/kit';

import fs from 'fs/promises'; // Import the file system module
import path from 'path';

const activitiesFilePath = path.resolve('src/lib/data/activities.json');

export async function GET({ }) {
    let activities = await loadActivities();
    return json(activities);
}

export async function POST({ request }) {
    const data = await request.json();
    let activities = await loadActivities();
    let newActivity = {
        id: activities.length + 1,
        name: data.name,
        location: data.location,
        start: data.start,
        end: data.end,
        type: data.type,
        calories: data.calories,
    }
    activities.push(newActivity);
    await saveActivities(activities);
    return json(activities);
}

export async function PUT({ request }) {
    const data = await request.json();
    let id = parseInt(data.id);
    let activities = await loadActivities();
    let activity = activities.find(activity => activity.id == parseInt(id));
    activity.name = data.name;
    activity.location = data.location;
    activity.start = data.start;
    activity.end = data.end;
    activity.type = data.type;
    activity.calories = data.calories;
    await saveActivities(activities);
    return json(activities);
}

export async function DELETE({ request }) {
    const data = await request.json();
    let id = parseInt(data.id);
    let activities = await loadActivities();
    if (id > activities.length) return json(activities);
    activities.splice(activities.findIndex(activity => activity.id == parseInt(id)), 1);
    await saveActivities(activities);
    return json(activities);
}

async function loadActivities() {
    try {
        const data = await fs.readFile(activitiesFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading activities file:', error);
        return [];
    }
}

async function saveActivities(activities) {
    try {
        await fs.writeFile(activitiesFilePath, JSON.stringify(activities, null, 2), 'utf-8');
    } catch (error) {
        console.error('Error writing activities file:', error);
    }
}