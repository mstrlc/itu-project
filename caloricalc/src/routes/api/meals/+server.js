/** @type {import('./$types').RequestHandler} */
import { json } from '@sveltejs/kit';

import fs from 'fs/promises'; // Import the file system module
import path from 'path';

const mealsFilePath = path.resolve('src/lib/data/meals.json');

export async function GET({ }) {
    let meals = await loadMeals();
    return json(meals);
}

export async function POST({ request }) {
    const data = await request.json();
    let meals = await loadMeals();
    let newMeal = {
        id: meals.length + 1,
        name: data.name,
        time: data.time,
        recipes: data.recipes || [],
        foods: data.foods || [],
    }
    meals.push(newMeal);
    await saveMeals(meals);
    return json(meals);
}

export async function PUT({ request }) {
    const data = await request.json();
    let id = parseInt(data.id);
    let meals = await loadMeals();
    let meal = meals.find(meal => meal.id == parseInt(id));
    meal.name = data.name;
    meal.time = data.time;
    meal.recipes = data.recipes || [];
    meal.foods = data.foods || [];
    await saveMeals(meals);
    return json(meals);
}

export async function DELETE({ request }) {
    const data = await request.json();
    let id = parseInt(data.id);
    let meals = await loadMeals();
    if (id > meals.length) return json(meals);
    meals.splice(meals.findIndex(meal => meal.id == parseInt(id)), 1);
    await saveMeals(meals);
    return json(meals);
}

async function loadMeals() {
    try {
        const data = await fs.readFile(mealsFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading meals file:', error);
        return [];
    }
}

async function saveMeals(meals) {
    try {
        await fs.writeFile(mealsFilePath, JSON.stringify(meals, null, 2), 'utf-8');
    } catch (error) {
        console.error('Error writing meals file:', error);
    }
}
