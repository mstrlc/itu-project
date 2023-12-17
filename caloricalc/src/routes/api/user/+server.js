// Author: xstrel03
// Date: 17.12.2023
/** @type {import('./$types').RequestHandler} */
import { json } from '@sveltejs/kit';

import fs from 'fs/promises'; // Import the file system module
import path from 'path';

const userFilePath = path.resolve('src/lib/data/user.json');

export async function GET({ }) {
    let user = await loadUsers();
    return json(user);
}

export async function POST({ request }) {
    const data = await request.json();
    let users = await loadUsers();
    let newuser = {
        id: users.length + 1,
        name: data.name,
        birthday: data.birthday,
        weight: data.weight || [],
        height: data.height,
        sex: data.sex
    }
    users.push(newuser);
    await saveUsers(users);
    return json(users);
}

export async function PUT({ request }) {
    const data = await request.json();
    let id = parseInt(data.id);
    let users = await loadUsers();
    let user = users.find(user => user.id == parseInt(id));
    user.name = data.name;
    user.portions = data.portions;
    user.foods = data.foods || [];
    user.users = data.users || [];
    await saveUsers(users);
    return json(users);
}

async function loadUsers() {
    try {
        const data = await fs.readFile(userFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading user file:', error);
        return [];
    }
}

async function saveUsers    (user) {
    try {
        await fs.writeFile(userFilePath, JSON.stringify(user, null, 2), 'utf-8');
    } catch (error) {
        console.error('Error writing user file:', error);
    }
}
