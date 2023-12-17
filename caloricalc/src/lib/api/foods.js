export async function getFoods() {
    const response = await fetch('/api/foods', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });

    return await response.json();
}

export async function getFood(id) {
    const response = await fetch('/api/foods', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
    let food = await response.json();
    food = food.find(food => food.id == id);
    return await food;
}

export async function getFoodCalories(id) {
    const response = await fetch('/api/foods', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
    let food = await response.json();
    food = food.find(food => food.id == id);
    let calories = 0;
    calories += food.calories;
    return await calories;
}

export async function createFood(name, calories, proteins, carbohydrates, fats, fiber, sugars, salt) {
    let food = {
        name: name,
        calories: calories,
        proteins: proteins,
        carbohydrates: carbohydrates,
        fats: fats,
        fiber: fiber,
        sugars: sugars,
        salt: salt,
    };
    const response = await fetch('/api/foods', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(food)
    });

    return await response.json();
}

export async function editFood(id, name, calories, proteins, carbohydrates, fats, fiber, sugars, salt) {
    let food = {
        id: id,
        name: name,
        calories: calories,
        proteins: proteins,
        carbohydrates: carbohydrates,
        fats: fats,
        fiber: fiber,
        sugars: sugars,
        salt: salt,
    };
    const response = await fetch('/api/foods', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(food)
    });

    return await response.json();
}

export async function deleteFood(id) {
    let food = {
        id: id
    };
    const response = await fetch('/api/foods', {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(food)
    });

    return await response.json();
}