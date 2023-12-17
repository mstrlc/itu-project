/** @type {import('./$types').RequestHandler} */
import { json } from '@sveltejs/kit';

import fs from 'fs/promises'; // Import the file system module
import path from 'path';

const foodsFilePath = path.resolve('src/lib/data/foods.json');

export async function GET({ }) {
    let foods = await loadFoods();
    return json(foods);
}

export async function POST({ request }) {
    const data = await request.json();
    let foods = await loadFoods();
    let newFood = {
        id: foods.length + 1,
        name: data.name,
        calories: data.calories,
        proteins: data.proteins,
        carbohydrates: data.carbohydrates,
        fats: data.fats,
        fiber: data.fiber,
        sugars: data.sugars,
        salt: data.salt,
    }
    foods.push(newFood);
    await saveFoods(foods);
    return json(foods);
}

export async function PUT({ request }) {
    const data = await request.json();
    let id = parseInt(data.id);
    let foods = await loadFoods();
    let food = foods.find(food => food.id == parseInt(id));
    food.name = data.name;
    food.calories = data.calories;
    food.proteins = data.proteins;
    food.carbohydrates = data.carbohydrates;
    food.fats = data.fats;
    food.fiber = data.fiber;
    food.sugars = data.sugars;
    food.salt = data.salt;
    await saveFoods(foods);
    return json(foods);
}

export async function DELETE({ request }) {
    const data = await request.json();
    let id = parseInt(data.id);
    let foods = await loadFoods();
    if (id > foods.length) return json(foods);
    foods.splice(foods.findIndex(food => food.id == parseInt(id)), 1);
    await saveFoods(foods);
    return json(foods);
}

async function loadFoods() {
    try {
        const data = await fs.readFile(foodsFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading foods file:', error);
        return [];
    }
}

async function saveFoods(foods) {
    try {
        await fs.writeFile(foodsFilePath, JSON.stringify(foods, null, 2), 'utf-8');
    } catch (error) {
        console.error('Error writing foods file:', error);
    }
}
