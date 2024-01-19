// Author: xstrel03
// Date: 19.1.2023
export async function getMacros() {
    const response = await fetch('/api/macros', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });

    return await response.json();
}

export async function getMacro(date) {
    const response = await fetch('/api/macros', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
    let macros = await response.json();
    return await macros[date];
}


export async function createMacro(date, calories, proteins, carbohydrates, fats, fiber, sugars, salt) {
    let macro = {
        [date]: {
            calories: calories,
            proteins: proteins,
            carbohydrates: carbohydrates,
            fats: fats,
            fiber: fiber,
            sugars: sugars,
            salt: salt
        }
    };

    const response = await fetch('/api/macros', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(macro)
    });

    return await response.json();
}

export async function editMacro(date, calories, proteins, carbohydrates, fats, fiber, sugars, salt) {
    let macro = {
        [date]: {
            calories: calories,
            proteins: proteins,
            carbohydrates: carbohydrates,
            fats: fats,
            fiber: fiber,
            sugars: sugars,
            salt: salt
        }
    };

    const response = await fetch('/api/macros', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(macro)
    });

    return await response.json();
}

export async function deleteMacro(date) {
    let macro = {
        [date]: null
    };

    const response = await fetch('/api/macros', {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(macro)
    });

    return await response.json();
}
