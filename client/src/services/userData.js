export function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
}

export function getAccessToken() {
    const user = getUserData();

    return user? user.accessToken : null;
}

export function clearUserData() {
    localStorage.removeItem('user');
}

export function setUserData(data) {
    localStorage.setItem('user', JSON.stringify(data));
}