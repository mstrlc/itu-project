// Author: xstrel03
// Date: 17.12.2023
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
    let len = Object.keys(activities).length
    console.log('POSTing with id ' + l);
    let newActivity = {
        id: activities[len - 1].id + 1,
        name: data.name,
        location: data.location,
        time: data.time,
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
    activity.time = data.time;
    activity.end = data.end;
    activity.type = data.type;
    activity.calories = data.calories;
    await saveActivities(activities);
    return json(activities);
}

export async function DELETE({ request }) {
    const data = await request.json();
    let id = parseInt(data.id);
    console.log('DELETing with id ' + id);
    let activities = await loadActivities();
    activities.splice(activities.findIndex(activity => activity.id == id), 1);
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