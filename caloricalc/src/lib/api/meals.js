export async function getMeals() {
    const response = await fetch('/api/meals', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });

    return await response.json();
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
