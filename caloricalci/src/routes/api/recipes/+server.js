// Author: xstrel03
// Date: 17.12.2023
/** @type {import('./$types').RequestHandler} */
import { json } from '@sveltejs/kit';

import fs from 'fs/promises'; // Import the file system module
import path from 'path';

const recipesFilePath = path.resolve('src/lib/data/recipes.json');

export async function GET({ }) {
    let recipes = await loadRecipes();
    return json(recipes);
}

export async function POST({ request }) {
    const data = await request.json();
    let recipes = await loadRecipes();
    let newRecipe = {
        id: recipes.length + 1,
        name: data.name,
        portions: data.portions,
        foods: data.foods || [],
        recipes: data.recipes || [],
    }
    recipes.push(newRecipe);
    await saveRecipes(recipes);
    return json(recipes);
}

export async function PUT({ request }) {
    const data = await request.json();
    let id = parseInt(data.id);
    let recipes = await loadRecipes();
    let recipe = recipes.find(recipe => recipe.id == parseInt(id));
    recipe.name = data.name;
    recipe.portions = data.portions;
    recipe.foods = data.foods || [];
    recipe.recipes = data.recipes || [];
    await saveRecipes(recipes);
    return json(recipes);
}

export async function DELETE({ request }) {
    const data = await request.json();
    let id = parseInt(data.id);
    let recipes = await loadRecipes();
    if (id > recipes.length) return json(recipes);
    recipes.splice(recipes.findIndex(recipe => recipe.id == parseInt(id)), 1);
    await saveRecipes(recipes);
    return json(recipes);
}

async function loadRecipes() {
    try {
        const data = await fs.readFile(recipesFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading recipes file:', error);
        return [];
    }
}

async function saveRecipes(recipes) {
    try {
        await fs.writeFile(recipesFilePath, JSON.stringify(recipes, null, 2), 'utf-8');
    } catch (error) {
        console.error('Error writing recipes file:', error);
    }
}
