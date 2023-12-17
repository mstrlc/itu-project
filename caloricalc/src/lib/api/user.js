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