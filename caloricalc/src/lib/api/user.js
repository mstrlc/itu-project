// Author: xstrel03
// author: Ondrej Seidl <xseidl06>
// Date: 17.12.2023
export async function getUser() {
    const response = await fetch('/api/user', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });

    return await response.json();
}

export async function getUserGoals() {
    const response = await fetch('/api/user', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
    let user = await response.json();
    return await user[0].goals;
}

export async function getUserFilters() {
    const response = await fetch('/api/user', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });
    let user = await response.json();
    return await user[0].filters;
}

export async function editUserGoals(goals) {
    var user = await getUser();
    user[0].goals = goals;
    const response = await fetch('/api/user', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    return await response.json();
}

export async function editUserFilters(filters) {
    var user = await getUser();
    user[0].filters = filters;
    const response = await fetch('/api/user', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    return await response.json();
}

export async function editUser(name, birthday, weight, height, sex) {
    let user = {
        name,
        birthday,
        weight,
        height,
        sex
    };
    const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    return await response.json();
}

export async function createUser(name, birthday, weight, height, sex) {
    let User = {
        name: name,
        birthday: birthday,
        weight: weight || [],
        height: height,
        sex: sex
    };
    const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(User)
    });

    return await response.json();
}