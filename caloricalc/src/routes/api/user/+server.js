/** @type {import('./$types').RequestHandler} */
import { json } from '@sveltejs/kit';

import fs from 'fs/promises'; // Import the file system module
import path from 'path';

const userFilePath = path.resolve('src/lib/data/user.json');

export async function GET({ }) {
    let user = await loadUser();
    return json(user);
}

export async function POST({ request }) {
    const data = await request.json();
    let user = await loadUser();
    user.name = data.name;
    user.birthday = data.birthday;
    user.weight = data.weight;
    user.height = data.height;
    user.sex = data.sex;
    await saveUser(user);
    return json(user);
}

async function loadUser() {
    try {
        const data = await fs.readFile(userFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading user file:', error);
        return [];
    }
}

async function saveUser(user) {
    try {
        await fs.writeFile(userFilePath, JSON.stringify(user, null, 2), 'utf-8');
    } catch (error) {
        console.error('Error writing user file:', error);
    }
}
