export async function getUser() {
    const response = await fetch('/api/user', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
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

export async function createUser( name, birthday, weight, height, sex) {
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