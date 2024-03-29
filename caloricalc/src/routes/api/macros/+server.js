// Author: xstrel03
// Date: 19.1.2023
/** @type {import('./$types').RequestHandler} */
import { json } from '@sveltejs/kit';

import fs from 'fs/promises';
import path from 'path';

const macrosFilePath = path.resolve('src/lib/data/macros.json');

export async function GET({ }) {
    let macros = await loadMacros();
    return json(macros);
}

export async function POST({ request }) {
    const data = await request.json();
    let macros = await loadMacros();
    let newMacro = {
        id: macros.length + 1,
        calories: data.calories,
        proteins: data.proteins,
        carbohydrates: data.carbohydrates,
        fats: data.fats,
        fiber: data.fiber,
        sugars: data.sugars,
        salt: data.salt,
    };
    macros.push(newMacro)
    await saveMacros(macros);
    return json(macros);
}

export async function PUT({ request }) {
    const data = await request.json();
    let id = parseInt(data.id);
    let macros = await loadMacros();
    let macro = macros.find(macro => macro.id == parseInt(id));
    macro.calories = data.calories;
    macro.proteins = data.proteins;
    macro.carbohydrates = data.carbohydrates;
    macro.fats = data.fats;
    macro.fiber = data.fiber;
    macro.sugars = data.sugars;
    macro.salt = data.salt;
    await saveMacros(macros);
    return json(macros);
}

export async function DELETE({ request }) {
    const data = await request.json();
    let id = parseInt(data.id);
    let macros = await loadMacros();
    if (id > macros.length) return json(macros);
    macros.splice(macros.findIndex(macro => macro.id == parseInt(id)), 1);
    await saveMacros(macros);
    return json(macros);
}

async function loadMacros() {
    try {
        const data = await fs.readFile(macrosFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading macros file:', error);
        return {};
    }
}

async function saveMacros(macros) {
    try {
        await fs.writeFile(macrosFilePath, JSON.stringify(macros, null, 2), 'utf-8');
    } catch (error) {
        console.error('Error writing macros file:', error);
    }
}
