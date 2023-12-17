export async function getRecipes() {
    const response = await fetch('/api/recipes', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });

    return await response.json();
}

export async function getRecipe(id) {
    const response = await fetch('/api/recipes', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
    let recipe = await response.json();
    recipe = recipe.find(recipe => recipe.id == id);
    return await recipe;
}

export async function createRecipe(name, portions, foods, recipes) {
    let recipe = {
        name: name,
        portions: portions,
        foods: foods || [],
        recipes : recipes || [],
    };
    const response = await fetch('/api/recipes', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(recipe)
    });

    return await response.json();
}

export async function editRecipe(id, name, portions, foods, recipes) {
    let recipe = {
        id: id,
        name: name,
        portions: portions,
        foods: foods || [],
        recipes: recipes || [],
    };
    const response = await fetch('/api/recipes', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(recipe)
    });

    return await response.json();
}

export async function deleteRecipe(id) {
    let recipe = {
        id: id
    };
    const response = await fetch('/api/recipes', {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(recipe)
    });

    return await response.json();
}
