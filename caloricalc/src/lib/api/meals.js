import { getFoodCalories } from './foods';
import { getRecipeCalories } from './recipes';

export async function getMeals() {
    const response = await fetch('/api/meals', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });

    return await response.json();
}

export async function getMealsMacros(date) {
    const response = await fetch('/api/meals', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
    let macros = {
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fats: 0,
        fiber: 0,
        sugar: 0,
        salt: 0
    };
    let allmeals = await response.json();
    allmeals = allmeals.filter(meal => meal.time.split("T")[0] == date);
    await Promise.all(allmeals.map(async meal => {
        await Promise.all(meal.foods.map(async food => {
            macros.calories += await getFoodCalories(food.id);
            macros.protein += await getFoodCalories(food.id);
            macros.carbohydrates += await getFoodCalories(food.id);
            macros.fats += await getFoodCalories(food.id);
            macros.fiber += await getFoodCalories(food.id);
            macros.sugar += await getFoodCalories(food.id);
            macros.salt += await getFoodCalories(food.id);
        }));
    }));
    return await macros;
}

export async function getMealsByDate(date) {
    const response = await fetch('/api/meals', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
    let meals = await response.json();
    meals = meals.filter(meal => meal.time.split("T")[0] == date);
    return await meals;
}

export async function getMealCalories(id) {
    const response = await fetch('/api/meals', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
    let meal = await response.json();
    meal = meal.find(meal => meal.id == id);
    let calories = 0;
    await Promise.all(meal.foods.map(async food => {
        calories += await getFoodCalories(food.id);
    }));
    await Promise.all(meal.recipes.map(async recipe => {
        calories += await getRecipeCalories(recipe.id);
    }));
    return calories;
}

export async function getMeal(id) {
    const response = await fetch('/api/meals', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
    let meal = await response.json();
    meal = meal.find(meal => meal.id == id);
    return await meal;
}

export async function createMeal(name, time, recipes, foods) {
    let meal = {
        name: name,
        time: time,
        recipes: recipes || [],
        foods: foods || [],
    };
    const response = await fetch('/api/meals', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(meal)
    });

    return await response.json();
}

export async function editMeal(id, name, time, recipes, foods) {
    let meal = {
        id: id,
        name: name,
        time: time,
        recipes: recipes || [],
        foods: foods || [],
    };
    const response = await fetch('/api/meals', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(meal)
    });

    return await response.json();
}

export async function deleteMeal(id) {
    let meal = {
        id: id
    };
    const response = await fetch('/api/meals', {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(meal)
    });

    return await response.json();
}
