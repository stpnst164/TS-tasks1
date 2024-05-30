const admins = [
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];
const users = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' }
];
 function requestAdmins(callback) {
    callback({
        status: 'success',
        data: admins
    });
}
 function requestUsers(callback) {
    callback({
        status: 'success',
        data: users
    });
}
requestAdmins((response) => {
    if (response.status === 'success') {
        console.log(response.data);
    }
    else {
        console.error(response.error);
    }
});
requestUsers((response) => {
    if (response.status === 'success') {
        console.log(response.data);
    }
    else {
        console.error(response.error);
    }
});
//# sourceMappingURL=index4.js.map